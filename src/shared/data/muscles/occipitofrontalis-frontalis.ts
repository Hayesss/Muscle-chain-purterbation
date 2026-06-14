import type { MuscleEntry } from "../types";

export const occipitofrontalis_frontalis: MuscleEntry = {
  id: "occipitofrontalis-frontalis",
  name: { zh: "枕额肌额腹（额肌）", latin: "Musculus frontalis" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M170,35 Q200,30 230,35 L230,50 Q200,48 170,50 Z"
  },
  origin: "帽状腱膜",
  insertion: "眉部皮肤及皮下组织",
  innervation: "面神经颞支 (VII)",
  bloodSupply: "颞浅动脉额支",
  primaryActions: ["提眉（惊讶表情）", "额部皮肤皱褶"],
  secondaryActions: ["协助眼睑睁开"],
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
