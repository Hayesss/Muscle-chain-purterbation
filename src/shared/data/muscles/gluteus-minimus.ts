import type { MuscleEntry } from "../types";

export const gluteus_minimus: MuscleEntry = {
  id: "gluteus-minimus",
  name: { zh: "臀小肌", latin: "Musculus gluteus minimus" },
  category: "hip",
  view: ["back"],
  svgPath: {
    "back": "M170,80 Q200,72 230,80 L230,120 Q200,128 170,120 Z"
  },
  origin: "髂骨臀前线与下唇之间",
  insertion: "股骨大转子前缘压迹",
  innervation: "臀上神经 (L4-S1)",
  bloodSupply: "臀上动脉深支",
  primaryActions: ["髋关节外展", "髋关节内旋", "骨盆额状面稳定"],
  secondaryActions: ["臀中肌协同"],
  joints: ["髋关节"],
    chains: [
    {
      chainId: "nerve_synergy_sacral_plexus",
      position: "middle",
      upstream: ["adductor-magnus", "biceps-femoris-long-head"],
      downstream: ["biceps-femoris-short-head", "gemellus-inferior"],
    },
    {
      chainId: "func_synergy_hip_abduction",
      position: "middle",
      upstream: ["gemellus-inferior", "gemellus-superior"],
      downstream: ["gluteus-medius", "piriformis"],
    },
    {
      chainId: "segment_synergy_L4",
      position: "middle",
      upstream: ["adductor-brevis"],
      downstream: ["adductor-longus"],
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
