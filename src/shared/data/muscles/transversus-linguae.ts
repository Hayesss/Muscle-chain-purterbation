import type { MuscleEntry } from "../types";

export const transversus_linguae: MuscleEntry = {
  id: "transversus-linguae",
  name: { zh: "舌横肌", latin: "Musculus transversus linguae" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M192,80 Q200,76 208,80 L208,88 Q200,90 192,88 Z"
  },
  origin: "舌背正中隔",
  insertion: "舌侧缘黏膜",
  innervation: "舌下神经 (XII)",
  bloodSupply: "舌动脉",
  primaryActions: ["舌变窄变厚"],
  secondaryActions: ["协助咀嚼/吞咽"],
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
