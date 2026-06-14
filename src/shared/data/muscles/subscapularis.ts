import type { MuscleEntry } from "../types";

export const subscapularis: MuscleEntry = {
  id: "subscapularis",
  name: { zh: "肩胛下肌", latin: "Musculus subscapularis" },
  category: "shoulder",
  view: ["front"],
  svgPath: {
    "front": "M180,55 Q200,50 220,55 L220,85 Q200,90 180,85 Z"
  },
  origin: "肩胛下窝",
  insertion: "肱骨小结节",
  innervation: "肩胛下神经上/下支 (C5-C7)",
  bloodSupply: "肩胛下动脉/旋肩胛动脉",
  primaryActions: ["肩关节内旋", "肱骨头稳定"],
  secondaryActions: ["肩袖功能核心"],
  joints: ["肩关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["coracobrachialis", "deltoid_anterior"],
      downstream: ["deltoid_middle", "deltoid_posterior"],
    },
    {
      chainId: "func_synergy_shoulder_internal_rotation",
      position: "middle",
      upstream: ["deltoid_anterior", "deltoid"],
      downstream: ["latissimus-dorsi", "pectoralis-major"],
    },
    {
      chainId: "segment_synergy_C5",
      position: "middle",
      upstream: ["coracobrachialis"],
      downstream: ["deltoid_anterior"],
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
