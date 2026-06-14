import type { MuscleEntry } from "../types";

export const transversus_menti: MuscleEntry = {
  id: "transversus-menti",
  name: { zh: "颏横肌", latin: "Musculus transversus menti" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M190,88 Q200,85 210,88 L210,95 Q200,98 190,95 Z"
  },
  origin: "下颌骨颏部",
  insertion: "对侧降口角肌",
  innervation: "面神经 (VII)",
  bloodSupply: "面动脉",
  primaryActions: ["颏部紧张"],
  secondaryActions: ["功能有限"],
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
