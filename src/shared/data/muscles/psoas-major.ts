import type { MuscleEntry } from "../types";

export const psoas_major: MuscleEntry = {
  id: "psoas-major",
  name: { zh: "腰大肌", latin: "Musculus psoas major" },
  category: "hip",
  view: ["front"],
  svgPath: {
    "front": "M175,85 Q200,78 225,85 L225,115 Q200,122 175,115 Z"
  },
  origin: "T12-L5椎体侧面/椎间盘/横突",
  insertion: "股骨小转子",
  innervation: "腰丛 (L1-L3)",
  bloodSupply: "腰动脉/髂腰动脉",
  primaryActions: ["髋关节屈曲", "髋关节外旋", "脊柱前屈（固定下肢时）"],
  secondaryActions: ["腰椎稳定", "骨盆前倾"],
  joints: ["髋关节", "腰椎"],
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
      chainId: "segment_synergy_L1_L3",
      position: "middle",
      upstream: ["iliocostalis-lumborum"],
      downstream: ["iliopsoas"],
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
