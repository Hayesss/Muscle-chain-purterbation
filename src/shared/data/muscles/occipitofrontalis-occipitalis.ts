import type { MuscleEntry } from "../types";

export const occipitofrontalis_occipitalis: MuscleEntry = {
  id: "occipitofrontalis-occipitalis",
  name: { zh: "枕额肌枕腹（枕肌）", latin: "Musculus occipitalis" },
  category: "head-neck",
  view: ["back"],
  svgPath: {
    "back": "M185,35 Q200,30 215,35 L215,50 Q200,48 185,50 Z"
  },
  origin: "上项线及乳突根部",
  insertion: "帽状腱膜",
  innervation: "面神经耳后支 (VII)",
  bloodSupply: "枕动脉",
  primaryActions: ["后拉头皮"],
  secondaryActions: ["稳定帽状腱膜"],
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
