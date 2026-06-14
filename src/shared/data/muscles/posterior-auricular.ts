import type { MuscleEntry } from "../types";

export const posterior_auricular: MuscleEntry = {
  id: "posterior-auricular",
  name: { zh: "耳后肌", latin: "Musculus auricularis posterior" },
  category: "head-neck",
  view: ["back"],
  svgPath: {
    "back": "M245,42 Q250,38 252,45 Q250,52 245,48 Z"
  },
  origin: "乳突根部",
  insertion: "耳廓后内侧面",
  innervation: "面神经耳后支 (VII)",
  bloodSupply: "耳后动脉",
  primaryActions: ["后拉耳廓"],
  secondaryActions: ["表情辅助（几乎退化）"],
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
