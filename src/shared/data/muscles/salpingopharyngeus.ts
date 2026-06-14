import type { MuscleEntry } from "../types";

export const salpingopharyngeus: MuscleEntry = {
  id: "salpingopharyngeus",
  name: { zh: "咽鼓管咽肌", latin: "Musculus salpingopharyngeus" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M190,65 Q200,60 210,65 L210,75 Q200,78 190,75 Z"
  },
  origin: "咽鼓管软骨咽口附近",
  insertion: "咽侧壁",
  innervation: "迷走神经咽丛 (X)",
  bloodSupply: "咽升动脉",
  primaryActions: ["咽鼓管咽口开放", "咽侧壁内收"],
  secondaryActions: ["辅助吞咽/耳压平衡"],
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
