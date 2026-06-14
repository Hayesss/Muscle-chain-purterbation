import type { MuscleEntry } from "../types";

export const thyroarytenoid: MuscleEntry = {
  id: "thyroarytenoid",
  name: { zh: "甲杓肌", latin: "Musculus thyroarytenoideus" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M188,68 Q200,62 212,68 L212,78 Q200,82 188,78 Z"
  },
  origin: "甲状软骨板内面",
  insertion: "杓状软骨外侧缘/前角",
  innervation: "喉返神经 (X)",
  bloodSupply: "甲状腺上动脉",
  primaryActions: ["声带内收/松弛（降低音调）"],
  secondaryActions: ["喉部稳定"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_cranial_nerves",
      position: "middle",
      upstream: ["anterior-auricular", "antitragicus"],
      downstream: ["aryepiglotticus", "buccinator"],
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
