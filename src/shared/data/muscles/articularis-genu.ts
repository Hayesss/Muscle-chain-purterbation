import type { MuscleEntry } from "../types";

export const articularis_genu: MuscleEntry = {
  id: "articularis-genu",
  name: { zh: "膝关节肌", latin: "Musculus articularis genus" },
  category: "hip",
  view: ["front"],
  svgPath: {
    "front": "M175,95 Q200,88 225,95 L225,140 Q200,148 175,140 Z"
  },
  origin: "股骨干下1/3前面",
  insertion: "膝关节囊/髌上囊",
  innervation: "股神经 (L2-L4)",
  bloodSupply: "膝动脉",
  primaryActions: ["膝关节囊牵拉（伸展时）", "髌上囊紧张"],
  secondaryActions: ["膝关节稳定"],
  joints: ["膝关节"],
    chains: [
    {
      chainId: "nerve_synergy_lumbar_plexus",
      position: "middle",
      upstream: ["adductor-brevis", "adductor-longus"],
      downstream: ["adductor-magnus", "adductor-minimus"],
    },
    {
      chainId: "func_synergy_knee_extension",
      position: "middle",
      upstream: ["rectus-femoris", "vastus-intermedius"],
      downstream: ["vastus-lateralis", "vastus-medialis"],
    },
    {
      chainId: "segment_synergy_L2",
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
