import type { MuscleEntry } from "../types";

export const intertransversarii_thoracis: MuscleEntry = {
  id: "intertransversarii-thoracis",
  name: { zh: "胸横突间肌", latin: "Musculi intertransversarii thoracis" },
  category: "trunk",
  view: ["back"],
  svgPath: {
    "back": "M185,45 Q200,40 215,45 L215,110 Q200,115 185,110 Z"
  },
  origin: "T1-T12横突",
  insertion: "相邻上位横突",
  innervation: "脊神经后支",
  bloodSupply: "肋间动脉",
  primaryActions: ["胸侧屈", "胸椎节段稳定"],
  secondaryActions: ["功能有限"],
  joints: ["胸椎"],
    chains: [
    {
      chainId: "nerve_synergy_dorsal_rami",
      position: "middle",
      upstream: ["erector_spinae", "iliocostalis-lumborum"],
      downstream: ["iliocostalis-thoracis", "interspinales-lumborum"],
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
