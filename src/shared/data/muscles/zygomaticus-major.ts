import type { MuscleEntry } from "../types";

export const zygomaticus_major: MuscleEntry = {
  id: "zygomaticus-major",
  name: { zh: "颧大肌", latin: "Musculus zygomaticus major" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M180,75 Q200,72 220,75 Q220,85 200,88 Q180,85 180,75 Z"
  },
  origin: "颧骨颞面前部",
  insertion: "口角皮肤",
  innervation: "面神经颧支/颊支 (VII)",
  bloodSupply: "面动脉",
  primaryActions: ["上提并后拉口角（大笑）"],
  secondaryActions: ["加深鼻唇沟", "协助闭眼"],
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
