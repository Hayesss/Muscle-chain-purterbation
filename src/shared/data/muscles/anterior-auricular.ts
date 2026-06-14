import type { MuscleEntry } from "../types";

export const anterior_auricular: MuscleEntry = {
  id: "anterior-auricular",
  name: { zh: "耳前肌", latin: "Musculus auricularis anterior" },
  category: "head-neck",
  view: ["front", "side"],
  svgPath: {
    "front": "M235,45 Q245,40 250,50 Q245,60 235,55 Z",
    "side": "M235,42 Q245,38 248,48 Q245,58 235,52 Z"
  },
  origin: "帽状腱膜侧缘",
  insertion: "耳廓前外侧面",
  innervation: "面神经颞支 (VII)",
  bloodSupply: "颞浅动脉",
  primaryActions: ["前拉耳廓"],
  secondaryActions: ["表情辅助（几乎退化）"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_cranial_nerves",
      position: "middle",
      upstream: ["antitragicus", "aryepiglotticus"],
      downstream: ["buccinator", "chondroglossus"],
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
