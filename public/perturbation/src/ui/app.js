/**
 * 前端主应用：构建查体输入界面，调用推理引擎，渲染结果。
 * 纯原生 ES Module，无构建步骤。
 */
import { muscles, muscleById, regions } from '../data/muscles.js';
import { painLocations } from '../data/painPatterns.js';
import { analyze, muscleName } from '../engine/reasoning.js';

const $ = (sel) => document.querySelector(sel);

const tendencyLabel = { tight: '易紧张', weak: '易无力', either: '可双向' };
const relationLabel = { synergist: '协同代偿', antagonist: '拮抗失衡', chain: '力线传导' };
const treatLabel = { manual: '徒手', stretch: '牵伸', strengthen: '强化', modality: '物理因子', reeducation: '再教育' };
const impactLabel = { severe: '显著受限', moderate: '中度受限', mild: '轻度影响' };

/* ---------------- 构建输入区 ---------------- */
function buildMuscleCheckboxes() {
  const container = $('#muscle-groups');
  container.innerHTML = '';
  for (const region of regions) {
    const group = muscles.filter((m) => m.region === region.id);
    if (!group.length) continue;
    const title = document.createElement('div');
    title.className = 'cb-group-title';
    title.textContent = region.name.zh;
    container.appendChild(title);
    for (const m of group) {
      const label = document.createElement('label');
      label.className = 'cb-item';
      label.dataset.name = `${m.name.zh}${m.name.en}`.toLowerCase();
      const tag = m.tendency
        ? `<span class="cb-tag ${m.tendency}">${tendencyLabel[m.tendency] || ''}</span>`
        : '';
      label.innerHTML = `<input type="checkbox" name="muscle" value="${m.id}" />
        <span>${m.name.zh}</span>${tag}`;
      container.appendChild(label);
    }
  }
}

function buildPainCheckboxes() {
  const container = $('#pain-groups');
  container.innerHTML = '';
  const byRegion = {};
  for (const p of painLocations) (byRegion[p.region] ||= []).push(p);
  for (const region of regions) {
    const group = byRegion[region.id];
    if (!group?.length) continue;
    const title = document.createElement('div');
    title.className = 'cb-group-title';
    title.textContent = region.name.zh;
    container.appendChild(title);
    for (const p of group) {
      const label = document.createElement('label');
      label.className = 'cb-item';
      label.innerHTML = `<input type="checkbox" name="pain" value="${p.id}" />
        <span>${p.name.zh}</span>`;
      container.appendChild(label);
    }
  }
}

function getSelected(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map((i) => i.value);
}

/* ---------------- 渲染结果 ---------------- */
function render(result) {
  const root = $('#results');
  root.innerHTML = '';
  root.appendChild(renderRelated(result.relatedMuscles, result.painImplicated));
  root.appendChild(renderPriority(result.priorityTargets));
  root.appendChild(renderSyndromes(result.syndromeMatches));
  root.appendChild(renderMovements(result.movementImpact));
  root.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function section(icon, title, count) {
  const sec = document.createElement('section');
  sec.className = 'result-section';
  const h = document.createElement('h3');
  h.innerHTML = `<span>${title}</span>` +
    (count != null ? `<span class="section-count">${count}</span>` : '');
  sec.appendChild(h);
  const body = document.createElement('div');
  body.className = 'body';
  sec.appendChild(body);
  sec._body = body;
  return sec;
}

function renderRelated(related, painImplicated) {
  const sec = section(null, '连带受累肌肉预测', `${related.length} 块`);
  const body = sec._body;
  if (painImplicated.length) {
    const note = document.createElement('p');
    note.className = 'legend';
    const names = [...new Set(painImplicated.map((p) => muscleName(p.muscleId)))].join('、');
    note.textContent = `由疼痛位置反查的候选责任肌肉：${names}`;
    body.appendChild(note);
  }
  if (!related.length) {
    body.insertAdjacentHTML('beforeend', '<p class="muted">未发现明显的连带肌肉（可能输入过少或关系未收录）。</p>');
    return sec;
  }
  const grid = document.createElement('div');
  grid.className = 'card-grid';
  for (const r of related) {
    const card = document.createElement('div');
    card.className = 'muscle-card';
    const uniqueReasons = [...new Map(r.reasons.map((rs) => [rs.type, rs])).values()]
      .map((rs) => {
        const viaId = rs.via.split('@')[0];
        return `<span class="rel-tag ${rs.type}" title="经由 ${muscleName(viaId)}">${relationLabel[rs.type]}</span>`;
      })
      .join('');
    const m = muscleById[r.muscleId];
    card.innerHTML = `
      <div class="mc-head">
        <span class="mc-name">${muscleName(r.muscleId)}${r.known ? '' : ' <small class="muted">(未收录)</small>'}</span>
        <span class="mc-score">关联度 ${r.score}</span>
      </div>
      <div class="mc-reasons">${uniqueReasons}</div>
      ${m?.clinicalNote ? `<div class="mc-note">${m.clinicalNote}</div>` : ''}`;
    grid.appendChild(card);
  }
  body.appendChild(grid);
  body.insertAdjacentHTML('beforeend',
    '<p class="legend">关联度 = 经协同代偿、拮抗失衡、力线传导多路径累加的传导权重，越高越值得关注。</p>');
  return sec;
}

function renderPriority(targets) {
  const sec = section(null, '干预优先级（关键治疗靶点）', `${targets.length} 块`);
  const body = sec._body;
  if (!targets.length) {
    body.innerHTML = '<p class="muted">无可排序的干预靶点。</p>';
    return sec;
  }
  const max = targets[0].score || 1;
  const list = document.createElement('div');
  list.className = 'priority-list';
  targets.forEach((t, idx) => {
    const item = document.createElement('div');
    item.className = 'priority-item' + (t.isSeed ? ' is-seed' : '');
    const pct = Math.max(8, Math.round((t.score / max) * 100));
    const tags = [];
    if (t.isSeed) tags.push('<span class="pi-tag seed">问题肌肉</span>');
    if (t.tendency === 'tight') tags.push('<span class="pi-tag tight">易紧张→松解为主</span>');
    if (t.tendency === 'weak') tags.push('<span class="pi-tag weak">易无力→激活强化</span>');

    const tr = t.treatment || {};
    const treatRows = Object.keys(treatLabel)
      .filter((k) => tr[k]?.length)
      .map((k) => `<div class="treat-row"><span class="treat-label ${k}">${treatLabel[k]}</span><span>${tr[k].join('；')}</span></div>`)
      .join('');

    item.innerHTML = `
      <div class="pi-head">
        <span class="pi-rank">#${idx + 1}</span>
        <span class="pi-name">${muscleName(t.muscleId)}</span>
        <span class="pi-bar"><span style="width:${pct}%"></span></span>
        ${tags.join('')}
      </div>
      ${treatRows ? `<div class="pi-treat">${treatRows}</div>` : ''}
      ${t.clinicalNote ? `<div class="pi-clinical">${t.clinicalNote}</div>` : ''}`;
    list.appendChild(item);
  });
  body.appendChild(list);
  body.insertAdjacentHTML('beforeend',
    '<p class="legend">优先级综合：明确问题肌肉权重 + 在连带网络中的被牵连度（图中心性近似）。绿色边=直接问题肌肉。</p>');
  return sec;
}

function renderSyndromes(matches) {
  const sec = section(null, '整体姿势 / 失衡模式', matches.length ? `${matches.length} 个匹配` : null);
  const body = sec._body;
  if (!matches.length) {
    body.innerHTML = '<p class="muted">未匹配到典型姿势综合征模式。</p>';
    return sec;
  }
  for (const s of matches) {
    const card = document.createElement('div');
    card.className = 'syndrome-card';
    const tightChips = s.hitTight.map((m) => `<span class="syn-m tight">${muscleName(m)}（紧张）</span>`).join('');
    const weakChips = s.hitWeak.map((m) => `<span class="syn-m weak">${muscleName(m)}（无力）</span>`).join('');
    card.innerHTML = `
      <div class="syn-head">
        <span class="syn-name">${s.name.zh}</span>
        <span class="syn-cover">匹配度 ${Math.round(s.coverage * 100)}%（${s.matchedCount}/${s.totalCount}）</span>
      </div>
      <div class="syn-desc">${s.description}</div>
      <div class="syn-muscles">${tightChips}${weakChips}</div>
      <div class="syn-strategy"><strong>处理策略：</strong>${s.strategy}</div>`;
    body.appendChild(card);
  }
  return sec;
}

function renderMovements(impacts) {
  const sec = section(null, '动作影响（损伤后可能受限的动作）', `${impacts.length} 项`);
  const body = sec._body;
  if (!impacts.length) {
    body.innerHTML = '<p class="muted">未发现与所选肌肉相关的动作。</p>';
    return sec;
  }
  const table = document.createElement('table');
  table.className = 'movement-table';
  table.innerHTML = `<thead><tr>
      <th>动作</th><th>预计影响</th><th>涉及肌肉（角色）</th>
    </tr></thead>`;
  const tbody = document.createElement('tbody');
  for (const mv of impacts) {
    const roleChips = mv.roles
      .map((r) => `<span class="role-chip ${r.roleKey}${r.isSeed ? ' seed' : ''}">${muscleName(r.muscleId)}·${r.role}</span>`)
      .join('');
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${mv.name.zh}</strong><br><small class="muted">${mv.joint || ''}</small></td>
      <td><span class="impact-pill ${mv.impact}">${impactLabel[mv.impact]}</span></td>
      <td>${roleChips}${mv.note ? `<div class="muted" style="font-size:11.5px;margin-top:4px">${mv.note}</div>` : ''}</td>`;
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  body.appendChild(table);
  body.insertAdjacentHTML('beforeend',
    '<p class="legend">影响判定：主动肌受累>稳定肌>协同肌；直接问题肌肉参与时加重。这反映"损伤这些肌肉后哪些动作会受限"。</p>');
  return sec;
}

/* ---------------- 事件绑定 ---------------- */
function onAnalyze() {
  const problemMuscleIds = getSelected('muscle');
  const painLocationIds = getSelected('pain');
  const hint = $('#input-hint');
  if (!problemMuscleIds.length && !painLocationIds.length) {
    hint.textContent = '请至少选择 1 块问题肌肉或 1 个疼痛位置。';
    hint.classList.add('error');
    return;
  }
  hint.classList.remove('error');
  hint.textContent = '提示：至少选择 1 块问题肌肉或 1 个疼痛位置。';
  const result = analyze({ problemMuscleIds, painLocationIds });
  render(result);
}

function onReset() {
  document.querySelectorAll('input[type="checkbox"]').forEach((c) => (c.checked = false));
  $('#muscle-search').value = '';
  document.querySelectorAll('#muscle-groups .cb-item').forEach((el) => el.classList.remove('hidden'));
  $('#results').innerHTML =
    '<div class="empty-state"><p>在左侧录入查体信息后点击「开始推理」。</p>' +
    '<p class="muted">系统将从整体角度分析连带肌肉、干预优先级、治疗方法与动作影响。</p></div>';
}

function onSearch(e) {
  const q = e.target.value.trim().toLowerCase();
  document.querySelectorAll('#muscle-groups .cb-item').forEach((el) => {
    el.classList.toggle('hidden', q && !el.dataset.name.includes(q));
  });
}

function init() {
  buildMuscleCheckboxes();
  buildPainCheckboxes();
  $('#analyze-btn').addEventListener('click', onAnalyze);
  $('#reset-btn').addEventListener('click', onReset);
  $('#muscle-search').addEventListener('input', onSearch);
}

document.addEventListener('DOMContentLoaded', init);
