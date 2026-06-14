import type { MuscleEntry } from "../types";

export const iliacus: MuscleEntry = {
  id: "iliacus",
  name: { zh: "髂肌", latin: "Musculus iliacus" },
  category: "hip",
  view: ["front"],
  svgPath: {
    "front": "M175,85 Q200,78 225,85 L225,115 Q200,122 175,115 Z"
  },
  origin: "髂窝/骶骨翼/髂腰韧带",
  insertion: "股骨小转子（与腰大肌腱融合）",
  innervation: "股神经 (L2-L4)",
  bloodSupply: "髂腰动脉/旋股外侧动脉",
  primaryActions: ["髋关节屈曲", "髋关节外旋", "骨盆前倾"],
  secondaryActions: ["腰椎-骨盆稳定"],
  joints: ["髋关节"],
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
