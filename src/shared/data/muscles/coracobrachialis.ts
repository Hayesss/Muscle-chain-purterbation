import type { MuscleEntry } from "../types";

export const coracobrachialis: MuscleEntry = {
  id: "coracobrachialis",
  name: { zh: "喙肱肌", latin: "Musculus coracobrachialis" },
  category: "shoulder",
  view: ["front"],
  svgPath: {
    "front": "M180,55 Q200,50 220,55 L220,85 Q200,90 180,85 Z"
  },
  origin: "肩胛骨喙突尖",
  insertion: "肱骨中段内侧",
  innervation: "肌皮神经 (C5-C7)",
  bloodSupply: "肱动脉/旋肱前动脉",
  primaryActions: ["肩关节前屈", "肩关节内收"],
  secondaryActions: ["辅助臂稳定"],
  joints: ["肩关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["deltoid_anterior", "deltoid_middle"],
      downstream: ["deltoid_posterior", "deltoid"],
    },
    {
      chainId: "func_synergy_shoulder_adduction",
      position: "middle",
      upstream: ["latissimus-dorsi", "pectoralis-major"],
      downstream: ["rhomboid-major", "rhomboid-minor"],
    },
    {
      chainId: "segment_synergy_C5",
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
