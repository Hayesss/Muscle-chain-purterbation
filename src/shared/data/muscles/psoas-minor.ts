import type { MuscleEntry } from "../types";

export const psoas_minor: MuscleEntry = {
  id: "psoas-minor",
  name: { zh: "腰小肌", latin: "Musculus psoas minor" },
  category: "hip",
  view: ["front"],
  svgPath: {
    "front": "M175,85 Q200,78 225,85 L225,115 Q200,122 175,115 Z"
  },
  origin: "T12-L1椎体侧面",
  insertion: "髂耻隆起/髂筋膜",
  innervation: "腰丛 (L1-L2)",
  bloodSupply: "腰动脉",
  primaryActions: ["腰曲紧张/骨盆前倾"],
  secondaryActions: ["功能有限/退化肌"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_lumbar_plexus",
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
