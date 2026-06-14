import type { MuscleEntry } from "../types";

export const inferior_longitudinal_tongue: MuscleEntry = {
  id: "inferior-longitudinal-tongue",
  name: { zh: "舌下纵肌", latin: "Musculus longitudinalis inferior linguae" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M190,50 Q200,48 210,50 L210,60 Q200,62 190,60 Z"
  },
  origin: "舌根下方",
  insertion: "舌尖下方",
  innervation: "舌下神经 (XII)",
  bloodSupply: "舌动脉",
  primaryActions: ["舌短缩（向下卷曲）"],
  secondaryActions: ["协助发音"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_cranial_nerves",
      position: "middle",
      upstream: ["anterior-auricular", "antitragicus"],
      downstream: ["aryepiglotticus", "buccinator"],
    },
    {
      chainId: "func_synergy_phonation",
      position: "middle",
      upstream: ["genioglossus", "geniohyoid"],
      downstream: ["inferior-pharyngeal-constrictor", "lateral-cricoarytenoid"],
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
