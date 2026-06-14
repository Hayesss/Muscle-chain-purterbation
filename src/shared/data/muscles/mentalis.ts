import type { MuscleEntry } from "../types";

export const mentalis: MuscleEntry = {
  id: "mentalis",
  name: { zh: "颏肌", latin: "Musculus mentalis" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M190,88 Q200,85 210,88 L210,95 Q200,98 190,95 Z"
  },
  origin: "下颌骨门齿窝",
  insertion: "颏部皮肤",
  innervation: "面神经下颌缘支 (VII)",
  bloodSupply: "下唇动脉",
  primaryActions: ["上提颏部皮肤", "前突下唇（噘嘴/吹口哨）"],
  secondaryActions: ["颏部皱纹", "协助咀嚼封闭口腔前庭"],
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
      upstream: ["depressor-anguli-oris", "depressor-labii-inferioris"],
      downstream: ["levator-anguli-oris", "levator-labii-superioris-alaeque-nasi"],
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
