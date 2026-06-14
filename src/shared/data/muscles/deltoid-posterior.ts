import type { MuscleEntry } from "../types";

export const deltoid_posterior: MuscleEntry = {
  id: "deltoid_posterior",
  name: { zh: "三角肌后束", latin: "Deltoid, pars spinalis" },
  category: "shoulder",
  view: ["back"],
  svgPath: {
    back: "M240,82 Q255,78 270,82 L272,108 Q258,112 242,108 Z"},
  origin: "肩胛冈下缘",
  insertion: "肱骨三角肌粗隆",
  innervation: "腋神经 (C5-C6)",
  bloodSupply: "旋肱后动脉",
  primaryActions: ["肩关节伸展", "肩关节外旋"],
  secondaryActions: ["水平外展"],
  joints: ["盂肱关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["coracobrachialis", "deltoid_anterior"],
      downstream: ["deltoid_middle", "deltoid"],
    },
    {
      chainId: "func_synergy_shoulder_extension",
      position: "middle",
      upstream: ["deltoid", "latissimus-dorsi"],
      downstream: ["teres-major", "triceps-brachii"],
    },
    {
      chainId: "segment_synergy_C5_C6",
      position: "middle",
      upstream: ["deltoid_anterior"],
      downstream: ["deltoid_middle"],
    },
  ],
  triggerPoints: [
    {
      id: "dp_tp1",
      location: "肌腹后部，肩胛冈下方",
      svgCoordinates: { x: 50, y: 50 },
      referralPattern: {
        description: "肩后区、上臂后侧",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["肩后痛", "后伸受限"],
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
