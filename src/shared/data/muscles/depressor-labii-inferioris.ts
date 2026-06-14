import type { MuscleEntry } from "../types";

export const depressor_labii_inferioris: MuscleEntry = {
  id: "depressor-labii-inferioris",
  name: { zh: "降下唇肌", latin: "Musculus depressor labii inferioris" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M180,75 Q200,72 220,75 Q220,85 200,88 Q180,85 180,75 Z"
  },
  origin: "下颌骨下颌体（颏孔与下颌角之间）",
  insertion: "下唇皮肤及肌肉",
  innervation: "面神经下颌缘支 (VII)",
  bloodSupply: "面动脉",
  primaryActions: ["降下唇（显露下齿）"],
  secondaryActions: ["下唇外翻", "表达悲伤/怀疑"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_cranial_nerves",
      position: "middle",
      upstream: ["anterior-auricular", "antitragicus"],
      downstream: ["aryepiglotticus", "buccinator"],
    },
    {
      chainId: "func_synergy_oral_closure",
      position: "middle",
      upstream: ["depressor-anguli-oris", "levator-anguli-oris"],
      downstream: ["levator-labii-superioris-alaeque-nasi", "levator-labii-superioris"],
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
