import type { MuscleEntry } from "../types";

export const deltoid_anterior: MuscleEntry = {
  id: "deltoid_anterior",
  name: { zh: "三角肌前束", latin: "Deltoid, pars clavicularis" },
  category: "shoulder",
  view: ["front"],
  svgPath: {
    front: "M210,82 Q225,78 240,82 L242,108 Q228,112 212,108 Z"},
  origin: "锁骨外侧1/3前缘",
  insertion: "肱骨三角肌粗隆",
  innervation: "腋神经 (C5-C6)",
  bloodSupply: "胸肩峰动脉三角肌支",
  primaryActions: ["肩关节屈曲", "肩关节内旋"],
  secondaryActions: ["水平内收"],
  joints: ["盂肱关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["coracobrachialis", "deltoid_middle"],
      downstream: ["deltoid_posterior", "deltoid"],
    },
    {
      chainId: "func_synergy_shoulder_internal_rotation",
      position: "middle",
      upstream: ["deltoid", "latissimus-dorsi"],
      downstream: ["pectoralis-major", "subscapularis"],
    },
    {
      chainId: "segment_synergy_C5_C6",
      position: "middle",
      upstream: ["deltoid_middle"],
      downstream: ["deltoid_posterior"],
    },
  ],
  triggerPoints: [
    {
      id: "da_tp1",
      location: "肌腹前部，锁骨外侧下方",
      svgCoordinates: { x: 50, y: 45 },
      referralPattern: {
        description: "肩前区、上臂前侧",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["肩前痛", "推举受限"],
      recommendedTechniques: ["ischemic_compression_deltoid"],
    },
  ],
  interventions: {
    manualTherapy: ["缺血性压迫", "深层摩擦按摩", "肌筋膜释放"],
    dryNeedling: "适合。注意局部解剖结构及安全区。",
    stretching: [{ position: "渐进拉伸", duration: "30秒×3次", caution: "避免暴力牵拉" }],
    strengthening: ["渐进抗阻训练"],
    prognosis: "单纯肌筋膜疼痛预后良好。",
    redFlags: ["进行性肌无力", "夜间痛不缓解", "不明原因体重下降"],
  },
  relatedDiagnoses: ["subacromial_impingement", "biceps_tendinitis"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
