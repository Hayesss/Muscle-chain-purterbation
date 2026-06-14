import type { MuscleEntry } from "../types";

export const sartorius: MuscleEntry = {
  id: "sartorius",
  name: { zh: "缝匠肌", latin: "Musculus sartorius" },
  category: "hip",
  view: ["front"],
  svgPath: {
    "front": "M175,95 Q200,88 225,95 L225,140 Q200,148 175,140 Z"
  },
  origin: "髂前上棘",
  insertion: "胫骨粗隆内侧面（鹅足）",
  innervation: "股神经 (L2-L3)",
  bloodSupply: "旋股外侧动脉/股动脉",
  primaryActions: ["髋关节屈曲", "髋关节外展", "髋关节外旋", "膝关节屈曲", "膝关节内旋（屈膝时）"],
  secondaryActions: ["盘腿坐关键肌"],
  joints: ["髋关节", "膝关节"],
    chains: [
    {
      chainId: "nerve_synergy_lumbar_plexus",
      position: "middle",
      upstream: ["adductor-brevis", "adductor-longus"],
      downstream: ["adductor-magnus", "adductor-minimus"],
    },
    {
      chainId: "func_synergy_hip_external_rotation",
      position: "middle",
      upstream: ["adductor-brevis", "adductor-longus"],
      downstream: ["adductor-magnus", "adductor-minimus"],
    },
    {
      chainId: "segment_synergy_L2_L3",
      position: "middle",
      upstream: ["gracilis"],
      downstream: [],
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
