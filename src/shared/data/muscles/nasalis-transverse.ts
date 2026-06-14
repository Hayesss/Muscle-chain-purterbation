import type { MuscleEntry } from "../types";

export const nasalis_transverse: MuscleEntry = {
  id: "nasalis-transverse",
  name: { zh: "鼻肌横部（压鼻翼肌）", latin: "Musculus nasalis, pars transversa" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M195,58 Q200,55 205,58 L205,68 Q200,70 195,68 Z"
  },
  origin: "上颌骨犬齿窝",
  insertion: "鼻大翼软骨",
  innervation: "面神经颊支 (VII)",
  bloodSupply: "面动脉",
  primaryActions: ["压鼻翼（缩小鼻孔）"],
  secondaryActions: ["表达愤怒/用力吸气"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_cranial_nerves",
      position: "middle",
      upstream: ["anterior-auricular", "antitragicus"],
      downstream: ["aryepiglotticus", "buccinator"],
    },
    {
      chainId: "func_synergy_inspiration",
      position: "middle",
      upstream: ["scalenes", "scalenus-anterior"],
      downstream: ["scalenus-medius", "scalenus-posterior"],
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
