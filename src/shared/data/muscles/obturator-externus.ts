import type { MuscleEntry } from "../types";

export const obturator_externus: MuscleEntry = {
  id: "obturator-externus",
  name: { zh: "闭孔外肌", latin: "Musculus obturator externus" },
  category: "hip",
  view: ["front"],
  svgPath: {
    "front": "M170,85 Q200,78 230,85 L230,120 Q200,128 170,120 Z"
  },
  origin: "闭孔膜外面及周围骨面",
  insertion: "股骨转子窝",
  innervation: "闭孔神经后支 (L3-L4)",
  bloodSupply: "旋股内侧动脉/闭孔动脉",
  primaryActions: ["髋关节外旋", "髋关节内收（辅助）"],
  secondaryActions: ["髋关节稳定"],
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
