import type { MuscleEntry } from "../types";

export const infraspinatus: MuscleEntry = {
  id: "infraspinatus",
  name: { zh: "冈下肌", latin: "Musculus infraspinatus" },
  category: "shoulder",
  view: ["back"],
  svgPath: {
    "back": "M180,55 Q200,50 220,55 L220,85 Q200,90 180,85 Z"
  },
  origin: "冈下窝",
  insertion: "肱骨大结节中压迹",
  innervation: "肩胛上神经 (C5-C6)",
  bloodSupply: "旋肩胛动脉/肩胛上动脉",
  primaryActions: ["肩关节外旋", "肱骨头稳定"],
  secondaryActions: ["肩袖功能"],
  joints: ["肩关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["coracobrachialis", "deltoid_anterior"],
      downstream: ["deltoid_middle", "deltoid_posterior"],
    },
    {
      chainId: "func_synergy_shoulder_external_rotation",
      position: "middle",
      upstream: ["deltoid_posterior", "deltoid"],
      downstream: ["teres-minor"],
    },
    {
      chainId: "segment_synergy_C5_C6",
      position: "middle",
      upstream: ["deltoid_anterior"],
      downstream: ["deltoid_middle"],
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
