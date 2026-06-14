import type { MuscleEntry } from "../types";

export const deltoid_middle: MuscleEntry = {
  id: "deltoid_middle",
  name: { zh: "三角肌中束", latin: "Deltoid, pars acromialis" },
  category: "shoulder",
  view: ["front", "back", "side"],
  svgPath: {
    front: "M240,82 Q255,78 270,82 L272,108 Q258,112 242,108 Z",
    back: "M240,82 Q255,78 270,82 L272,108 Q258,112 242,108 Z",
    side: "M225,82 Q235,78 245,82 L247,108 Q237,112 227,108 Z"},
  origin: "肩峰外侧缘",
  insertion: "肱骨三角肌粗隆",
  innervation: "腋神经 (C5-C6)",
  bloodSupply: "胸肩峰动脉三角肌支",
  primaryActions: ["肩关节外展"],
  secondaryActions: ["水平外展"],
  joints: ["盂肱关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["coracobrachialis", "deltoid_anterior"],
      downstream: ["deltoid_posterior", "deltoid"],
    },
    {
      chainId: "func_synergy_shoulder_abduction",
      position: "middle",
      upstream: ["deltoid", "supraspinatus"],
      downstream: ["serratus_anterior"],
    },
    {
      chainId: "segment_synergy_C5_C6",
      position: "middle",
      upstream: ["deltoid_anterior"],
      downstream: ["deltoid_posterior"],
    },
  ],
  triggerPoints: [
    {
      id: "dm_tp1",
      location: "肌腹中部，肩峰下方",
      svgCoordinates: { x: 50, y: 50 },
      referralPattern: {
        description: "肩外侧、上臂外侧",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["肩外展痛", "侧抬受限"],
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
  relatedDiagnoses: ["subacromial_impingement", "rotator_cuff_tendinopathy"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
