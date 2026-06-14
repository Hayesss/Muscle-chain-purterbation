import type { MuscleEntry } from "../types";

export const helicis_minor: MuscleEntry = {
  id: "helicis-minor",
  name: { zh: "小耳轮肌", latin: "Musculus helicis minor" },
  category: "head-neck",
  view: ["side"],
  svgPath: {
    "side": "M235,42 Q245,38 248,48 Q245,58 235,52 Z"
  },
  origin: "耳轮脚根部",
  insertion: "耳轮脚上部",
  innervation: "面神经耳支 (VII)",
  bloodSupply: "耳后动脉",
  primaryActions: ["耳轮微动"],
  secondaryActions: ["功能意义有限"],
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
