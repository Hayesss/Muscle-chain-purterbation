import type { MuscleEntry } from "../types";

export const nasalis_alar: MuscleEntry = {
  id: "nasalis-alar",
  name: { zh: "鼻肌翼部（开大鼻翼肌）", latin: "Musculus nasalis, pars alaris" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M195,58 Q200,55 205,58 L205,68 Q200,70 195,68 Z"
  },
  origin: "上颌骨外侧切牙窝",
  insertion: "鼻大翼软骨及皮肤",
  innervation: "面神经颊支 (VII)",
  bloodSupply: "面动脉",
  primaryActions: ["开大鼻翼（扩张鼻孔）"],
  secondaryActions: ["深呼吸辅助", "表达愤怒"],
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
