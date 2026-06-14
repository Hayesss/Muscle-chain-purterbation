import type { MuscleEntry } from "../types";

export const tensor_fasciae_latae: MuscleEntry = {
  id: "tensor-fasciae-latae",
  name: { zh: "阔筋膜张肌", latin: "Musculus tensor fasciae latae" },
  category: "hip",
  view: ["front", "side"],
  svgPath: {
    "front": "M170,85 Q200,78 230,85 L230,120 Q200,128 170,120 Z",
    "side": "M210,80 Q232,75 238,100 Q232,125 210,118 Z"
  },
  origin: "髂前上棘/髂骨结节",
  insertion: "髂胫束（近端）",
  innervation: "臀上神经 (L4-S1)",
  bloodSupply: "臀上动脉浅支/旋股外侧动脉升支",
  primaryActions: ["髋关节屈曲", "髋关节外展", "髋关节内旋", "髂胫束紧张"],
  secondaryActions: ["步态摆动期稳定"],
  joints: ["髋关节"],
    chains: [
    {
      chainId: "nerve_synergy_sacral_plexus",
      position: "middle",
      upstream: ["adductor-magnus", "biceps-femoris-long-head"],
      downstream: ["biceps-femoris-short-head", "gemellus-inferior"],
    },
    {
      chainId: "func_synergy_hip_flexion",
      position: "middle",
      upstream: ["adductor-brevis", "adductor-longus"],
      downstream: ["gracilis", "iliacus"],
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
