import type { MuscleEntry } from "../types";

export const inferior_pharyngeal_constrictor: MuscleEntry = {
  id: "inferior-pharyngeal-constrictor",
  name: { zh: "咽下缩肌", latin: "Musculus constrictor pharyngis inferior" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M188,68 Q200,62 212,68 L212,78 Q200,82 188,78 Z"
  },
  origin: "甲状软骨板斜线/环状软骨",
  insertion: "咽后壁正中缝",
  innervation: "迷走神经咽丛 (X)",
  bloodSupply: "咽升动脉/甲状腺下动脉",
  primaryActions: ["咽腔收缩（吞咽）", "食管上括约肌"],
  secondaryActions: ["辅助发音"],
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
