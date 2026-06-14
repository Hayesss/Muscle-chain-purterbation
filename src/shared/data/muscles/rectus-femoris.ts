import type { MuscleEntry } from "../types";

export const rectus_femoris: MuscleEntry = {
  id: "rectus-femoris",
  name: { zh: "股直肌", latin: "Musculus rectus femoris" },
  category: "hip",
  view: ["front"],
  svgPath: {
    "front": "M175,95 Q200,88 225,95 L225,140 Q200,148 175,140 Z"
  },
  origin: "髂前下棘/髋臼上缘（直头/反折头）",
  insertion: "髌骨/髌韧带/胫骨粗隆",
  innervation: "股神经 (L2-L4)",
  bloodSupply: "旋股外侧动脉降支",
  primaryActions: ["膝关节伸展", "髋关节屈曲"],
  secondaryActions: ["股四头肌核心跨双关节"],
  joints: ["髋关节", "膝关节"],
    chains: [
    {
      chainId: "nerve_synergy_lumbar_plexus",
      position: "middle",
      upstream: ["adductor-brevis", "adductor-longus"],
      downstream: ["adductor-magnus", "adductor-minimus"],
    },
    {
      chainId: "func_synergy_hip_flexion",
      position: "middle",
      upstream: ["adductor-brevis", "adductor-longus"],
      downstream: ["gracilis", "iliacus"],
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
