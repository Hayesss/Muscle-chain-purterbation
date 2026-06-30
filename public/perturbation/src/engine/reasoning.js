/**
 * 临床推理引擎
 * ============
 * 在"肌肉知识图谱"上进行图遍历与评分，把查体输入转化为整体性的推理输出。
 *
 * 输入：{ problemMuscleIds: string[], painLocationIds: string[] }
 * 输出：见 analyze() 返回结构。
 *
 * 推理由四类关系驱动：
 *   1) 协同/代偿 (synergists)  —— 一肌受损，协同肌易过度代偿
 *   2) 拮抗/失衡 (antagonists)  —— 一肌紧张，拮抗肌易被抑制（或反之）
 *   3) 肌筋膜链 (chains)        —— 张力沿筋膜链上下游传导
 *   4) 牵涉痛   (referredPain) —— 由疼痛部位反查责任肌肉
 *
 * 引擎对未收录的 id 做容错（不会抛错，标记 known:false）。
 */

import { muscles, muscleById } from '../data/muscles.js';
import { chains } from '../data/chains.js';
import { movements } from '../data/movements.js';
import { painLocationById } from '../data/painPatterns.js';
import { postureSyndromes } from '../data/postureSyndromes.js';

// 各类连带关系的传导权重（可按临床经验调参）
const WEIGHTS = {
  synergist: 1.0, // 协同代偿
  antagonist: 0.9, // 拮抗失衡
  chain: 0.7, // 筋膜链传导
  seedFromPain: 0.6, // 由疼痛反查得到的种子肌肉的初始权重
};

/** 安全取肌肉名（含未收录容错） */
export function muscleName(id) {
  const m = muscleById[id];
  return m ? m.name.zh : id;
}
export function isKnownMuscle(id) {
  return Boolean(muscleById[id]);
}

/** 构建 肌肉id -> 所属链 的索引 */
const muscleChains = (() => {
  /** @type {Record<string, {id:string,name:object,muscles:string[]}[]>} */
  const map = {};
  for (const ch of chains) {
    for (const mid of ch.muscles) {
      (map[mid] ||= []).push(ch);
    }
  }
  return map;
})();

/**
 * 主分析入口
 * @param {{problemMuscleIds?: string[], painLocationIds?: string[]}} input
 */
export function analyze(input) {
  const problemMuscleIds = [...new Set(input.problemMuscleIds || [])];
  const painLocationIds = [...new Set(input.painLocationIds || [])];

  // —— 1) 由疼痛位置反查候选责任肌肉 ——
  /** @type {{muscleId:string, fromPain:string, rank:number}[]} */
  const painImplicated = [];
  for (const pid of painLocationIds) {
    const loc = painLocationById[pid];
    if (!loc) continue;
    loc.candidateMuscles.forEach((mid, idx) => {
      painImplicated.push({ muscleId: mid, fromPain: pid, rank: idx });
    });
  }

  // 种子肌肉集合 = 明确的问题肌肉 ∪ 疼痛反查得到的高排位肌肉
  const seedSet = new Set(problemMuscleIds);
  for (const p of painImplicated) seedSet.add(p.muscleId);

  // —— 2) 连带受累预测：从种子肌肉沿三类关系扩展评分 ——
  /** @type {Record<string, {score:number, reasons:{type:string, via:string, weight:number}[]}>} */
  const related = {};
  const addRelated = (mid, type, viaId, weight) => {
    if (seedSet.has(mid)) return; // 种子肌肉本身不计入"连带"
    const node = (related[mid] ||= { score: 0, reasons: [] });
    node.score += weight;
    node.reasons.push({ type, via: viaId, weight });
  };

  for (const sid of seedSet) {
    const m = muscleById[sid];
    if (!m) continue;
    (m.synergists || []).forEach((x) => addRelated(x, 'synergist', sid, WEIGHTS.synergist));
    (m.antagonists || []).forEach((x) => addRelated(x, 'antagonist', sid, WEIGHTS.antagonist));
    for (const ch of muscleChains[sid] || []) {
      ch.muscles.forEach((x) => {
        if (x !== sid) addRelated(x, 'chain', `${sid}@${ch.id}`, WEIGHTS.chain);
      });
    }
  }

  const relatedList = Object.entries(related)
    .map(([muscleId, v]) => ({
      muscleId,
      known: isKnownMuscle(muscleId),
      score: round(v.score),
      reasons: v.reasons,
      relationTypes: [...new Set(v.reasons.map((r) => r.type))],
    }))
    .sort((a, b) => b.score - a.score);

  // —— 3) 干预优先级（关键靶点）——
  // 思路：种子肌肉给基础分；再叠加其在连带网络中的"被牵连度"（度中心性近似）。
  /** @type {Record<string, number>} */
  const centrality = {};
  const bump = (id, w) => {
    if (!isKnownMuscle(id)) return;
    centrality[id] = (centrality[id] || 0) + w;
  };
  // 种子肌肉基础权重（疼痛反查的按排位衰减）
  for (const sid of problemMuscleIds) bump(sid, 2.0);
  for (const p of painImplicated) bump(p.muscleId, WEIGHTS.seedFromPain / (1 + p.rank));
  // 连带网络贡献
  for (const r of relatedList) bump(r.muscleId, r.score * 0.5);

  const priorityTargets = Object.entries(centrality)
    .map(([muscleId, score]) => {
      const m = muscleById[muscleId];
      return {
        muscleId,
        score: round(score),
        isSeed: problemMuscleIds.includes(muscleId),
        tendency: m?.tendency,
        treatment: m?.treatment || {},
        clinicalNote: m?.clinicalNote,
      };
    })
    .sort((a, b) => b.score - a.score);

  // —— 4) 动作影响：相关肌肉 → 涉及的动作 + 损伤后可能受限的动作 ——
  const involvedMuscleIds = new Set([...seedSet, ...relatedList.map((r) => r.muscleId)]);
  const movementImpact = analyzeMovements(involvedMuscleIds, seedSet);

  // —— 5) 整体姿势模式识别 ——
  const syndromeMatches = matchSyndromes(seedSet, relatedList);

  return {
    input: { problemMuscleIds, painLocationIds },
    seedMuscles: [...seedSet].map((id) => ({ muscleId: id, known: isKnownMuscle(id), isExplicit: problemMuscleIds.includes(id) })),
    painImplicated,
    relatedMuscles: relatedList,
    priorityTargets,
    movementImpact,
    syndromeMatches,
  };
}

/**
 * 动作影响分析
 * @param {Set<string>} involvedMuscleIds 所有涉及肌肉（种子+连带）
 * @param {Set<string>} seedSet 种子（核心问题）肌肉
 */
function analyzeMovements(involvedMuscleIds, seedSet) {
  const results = [];
  for (const mv of movements) {
    const roles = [];
    const checkRole = (list, roleZh, roleKey) => {
      for (const mid of list || []) {
        if (involvedMuscleIds.has(mid)) {
          roles.push({ muscleId: mid, role: roleZh, roleKey, isSeed: seedSet.has(mid) });
        }
      }
    };
    checkRole(mv.primeMovers, '主动肌', 'prime');
    checkRole(mv.synergists, '协同肌', 'synergist');
    checkRole(mv.stabilizers, '稳定肌', 'stabilizer');
    if (roles.length === 0) continue;

    // 受限程度：主动肌受累 > 稳定肌受累 > 仅协同肌受累；种子肌肉受累加重
    const hasPrime = roles.some((r) => r.roleKey === 'prime');
    const hasStab = roles.some((r) => r.roleKey === 'stabilizer');
    const hasSeed = roles.some((r) => r.isSeed);
    let impact = 'mild';
    if (hasPrime) impact = hasSeed ? 'severe' : 'moderate';
    else if (hasStab) impact = hasSeed ? 'moderate' : 'mild';
    results.push({
      movementId: mv.id,
      name: mv.name,
      joint: mv.joint,
      note: mv.note,
      roles,
      impact, // severe | moderate | mild
    });
  }
  const order = { severe: 0, moderate: 1, mild: 2 };
  return results.sort((a, b) => order[a.impact] - order[b.impact]);
}

/**
 * 姿势综合征匹配：种子+连带肌肉与综合征典型肌肉的重叠度
 * @param {Set<string>} seedSet
 * @param {{muscleId:string}[]} relatedList
 */
function matchSyndromes(seedSet, relatedList) {
  const involved = new Set([...seedSet, ...relatedList.map((r) => r.muscleId)]);
  const matches = [];
  for (const s of postureSyndromes) {
    const all = [...s.tightMuscles, ...s.weakMuscles];
    const hitTight = s.tightMuscles.filter((m) => involved.has(m));
    const hitWeak = s.weakMuscles.filter((m) => involved.has(m));
    const hitCount = hitTight.length + hitWeak.length;
    if (hitCount === 0) continue;
    const coverage = hitCount / all.length;
    matches.push({
      syndromeId: s.id,
      name: s.name,
      description: s.description,
      strategy: s.strategy,
      coverage: round(coverage),
      hitTight,
      hitWeak,
      matchedCount: hitCount,
      totalCount: all.length,
    });
  }
  return matches.sort((a, b) => b.coverage - a.coverage);
}

function round(n) {
  return Math.round(n * 100) / 100;
}
