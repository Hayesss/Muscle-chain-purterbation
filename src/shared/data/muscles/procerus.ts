import type { MuscleEntry } from "../types";

export const procerus: MuscleEntry = {
  id: "procerus",
  name: { zh: "降眉间肌", latin: "Musculus procerus" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M190,45 Q200,42 210,45 L210,52 Q200,50 190,52 Z"
  },
  origin: "鼻背筋膜/鼻骨",
  insertion: "眉间皮肤",
  innervation: "面神经颊支 (VII)",
  bloodSupply: "鼻背动脉",
  primaryActions: ["降眉间、鼻根皮肤皱褶"],
  secondaryActions: ["表达轻蔑/愤怒"],
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
