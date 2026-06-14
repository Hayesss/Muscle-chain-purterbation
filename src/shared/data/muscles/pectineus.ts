import type { MuscleEntry } from "../types";

export const pectineus: MuscleEntry = {
  id: "pectineus",
  name: { zh: "耻骨肌", latin: "Musculus pectineus" },
  category: "hip",
  view: ["front"],
  svgPath: {
    "front": "M185,105 Q200,98 215,105 L215,140 Q200,145 185,140 Z"
  },
  origin: "耻骨上支（pectineal line）",
  insertion: "股骨小转子至粗线内侧（pectineal line）",
  innervation: "股神经/闭孔神经 (L2-L4)",
  bloodSupply: "闭孔动脉/旋股内侧动脉",
  primaryActions: ["髋关节内收", "髋关节屈曲", "髋关节外旋（辅助）"],
  secondaryActions: ["腹股沟区稳定"],
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
