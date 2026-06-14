import type { MuscleEntry } from "../types";

export const cricothyroid: MuscleEntry = {
  id: "cricothyroid",
  name: { zh: "环甲肌", latin: "Musculus cricothyroideus" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M188,68 Q200,62 212,68 L212,78 Q200,82 188,78 Z"
  },
  origin: "环状软骨弓前外侧面",
  insertion: "甲状软骨板下缘及下角",
  innervation: "喉上神经外支",
  bloodSupply: "甲状腺上动脉",
  primaryActions: ["甲状软骨前倾（声带紧张/音调高）"],
  secondaryActions: ["喉部稳定"],
  joints: ["无特定关节"],
    chains: [],
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
