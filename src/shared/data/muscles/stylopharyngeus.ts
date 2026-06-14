import type { MuscleEntry } from "../types";

export const stylopharyngeus: MuscleEntry = {
  id: "stylopharyngeus",
  name: { zh: "茎突咽肌", latin: "Musculus stylopharyngeus" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M190,65 Q200,60 210,65 L210,75 Q200,78 190,75 Z"
  },
  origin: "茎突根部",
  insertion: "甲状软骨板上缘及咽壁",
  innervation: "舌咽神经 (IX)",
  bloodSupply: "咽升动脉",
  primaryActions: ["咽上提", "喉上提", "咽扩张"],
  secondaryActions: ["吞咽辅助"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_cranial_nerves",
      position: "middle",
      upstream: ["anterior-auricular", "antitragicus"],
      downstream: ["aryepiglotticus", "buccinator"],
    },
    {
      chainId: "func_synergy_deglutition",
      position: "middle",
      upstream: ["aryepiglotticus", "buccinator"],
      downstream: ["chondroglossus", "digastric-anterior-belly"],
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
