import type { MuscleEntry } from "../types";

export const pectoralis_major: MuscleEntry = {
  id: "pectoralis-major",
  name: { zh: "胸大肌", latin: "Musculus pectoralis major" },
  category: "shoulder",
  view: ["front"],
  svgPath: {
    "front": "M170,50 Q200,45 230,50 L230,80 Q200,85 170,80 Z"
  },
  origin: "锁骨内侧半/胸骨柄/胸骨体/上位6肋软骨/腹直肌鞘",
  insertion: "肱骨大结节嵴",
  innervation: "胸外侧神经+胸内侧神经 (C5-T1)",
  bloodSupply: "胸肩峰动脉/胸廓内动脉",
  primaryActions: ["肩关节内收", "肩关节内旋", "肩关节前屈（锁骨部）", "肩关节水平内收"],
  secondaryActions: ["辅助深呼吸（固定臂时）", "攀爬功能"],
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
      downstream: ["rhomboid-major", "rhomboid-minor"],
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
