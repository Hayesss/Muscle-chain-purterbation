import type { MuscleEntry } from "../types";

export const corrugator_supercilii: MuscleEntry = {
  id: "corrugator-supercilii",
  name: { zh: "皱眉肌", latin: "Musculus corrugator supercilii" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M190,45 Q200,42 210,45 L210,52 Q200,50 190,52 Z"
  },
  origin: "眉弓内侧额骨",
  insertion: "眉中部及内侧皮肤",
  innervation: "面神经颞支 (VII)",
  bloodSupply: "眶上动脉",
  primaryActions: ["眉向内下牵拉（皱眉）"],
  secondaryActions: ["眉间纵向皱纹形成"],
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
