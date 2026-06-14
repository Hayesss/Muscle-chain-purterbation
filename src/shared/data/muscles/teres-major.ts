import type { MuscleEntry } from "../types";

export const teres_major: MuscleEntry = {
  id: "teres-major",
  name: { zh: "大圆肌", latin: "Musculus teres major" },
  category: "shoulder",
  view: ["back"],
  svgPath: {
    "back": "M180,55 Q200,50 220,55 L220,85 Q200,90 180,85 Z"
  },
  origin: "肩胛骨下角背面",
  insertion: "肱骨小结节嵴",
  innervation: "肩胛下神经下支 (C5-C7)",
  bloodSupply: "肩胛下动脉/旋肱后动脉",
  primaryActions: ["肩关节内收", "肩关节后伸", "肩关节内旋"],
  secondaryActions: ["背阔肌协同"],
  joints: ["肩关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["coracobrachialis", "deltoid_anterior"],
      downstream: ["deltoid_middle", "deltoid_posterior"],
    },
    {
      chainId: "func_synergy_shoulder_adduction",
      position: "middle",
      upstream: ["coracobrachialis", "latissimus-dorsi"],
      downstream: ["pectoralis-major", "rhomboid-major"],
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
