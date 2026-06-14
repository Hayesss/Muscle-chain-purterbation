import type { MuscleEntry } from "../types";

export const orbicularis_oris: MuscleEntry = {
  id: "orbicularis-oris",
  name: { zh: "口轮匝肌", latin: "Musculus orbicularis oris" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M180,75 Q200,72 220,75 Q220,85 200,88 Q180,85 180,75 Z"
  },
  origin: "口角皮肤黏膜（联合处）",
  insertion: "唇红缘及皮肤",
  innervation: "面神经颊支/下颌缘支 (VII)",
  bloodSupply: "上/下唇动脉",
  primaryActions: ["闭口（闭合唇裂）"],
  secondaryActions: ["噘嘴", "接吻", "吹口哨", "发音辅助（p/b/m）", "咀嚼维持口腔前庭封闭"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_cranial_nerves",
      position: "middle",
      upstream: ["anterior-auricular", "antitragicus"],
      downstream: ["aryepiglotticus", "buccinator"],
    },
    {
      chainId: "func_synergy_phonation",
      position: "middle",
      upstream: ["genioglossus", "geniohyoid"],
      downstream: ["inferior-longitudinal-tongue", "inferior-pharyngeal-constrictor"],
    },
  ],
  triggerPoints: [],
  interventions: {
    manualTherapy: ["触诊评估", "软组织松解"],
    dryNeedling: "临床评估后决定。",
    stretching: [{ position: "温和牵伸位", duration: "20-30秒", caution: "避免过度牵拉" }],
    strengthening: ["渐进抗阻训练"],
    prognosis: "预后良好，配合康复训练可恢复。",
    redFlags: ["进行性加重", "伴随神经症状", "不明原因体重下降"],
  },
  relatedDiagnoses: [],
  relatedTechniques: [],
  relatedSymptomRegions: [],
};
