import type { MuscleEntry } from "../types";

export const buccinator: MuscleEntry = {
  id: "buccinator",
  name: { zh: "颊肌", latin: "Musculus buccinator" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M180,75 Q200,72 220,75 Q220,85 200,88 Q180,85 180,75 Z"
  },
  origin: "上颌骨/下颌骨牙槽突外侧面",
  insertion: "口角处（与口轮匝肌交织）",
  innervation: "面神经颊支 (VII)",
  bloodSupply: "面动脉",
  primaryActions: ["颊部贴近牙列（咀嚼/吸吮）"],
  secondaryActions: ["吹口哨", "鼓腮", "协助吞咽", "维持口腔前庭封闭"],
  joints: ["颞下颌关节（间接）"],
    chains: [
    {
      chainId: "nerve_synergy_cranial_nerves",
      position: "middle",
      upstream: ["anterior-auricular", "antitragicus"],
      downstream: ["aryepiglotticus", "chondroglossus"],
    },
    {
      chainId: "func_synergy_deglutition",
      position: "middle",
      upstream: ["aryepiglotticus", "chondroglossus"],
      downstream: ["digastric-anterior-belly", "digastric-posterior-belly"],
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
