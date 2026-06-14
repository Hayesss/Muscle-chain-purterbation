import type { MuscleEntry } from "../types";

export const adductors: MuscleEntry = {
  id: "adductors",
  name: { zh: "内收肌群", latin: "Musculi adductores femoris" },
  category: "lower-limb",
  view: ["front"],
  svgPath: {
    front: "M175,285 Q185,280 195,285 L198,340 Q185,345 172,340 Z"},
  origin: "耻骨支、坐骨支",
  insertion: "股骨粗线、内侧髁上方",
  innervation: "闭孔神经 (L2-L4), 坐骨神经 (L4)",
  bloodSupply: "闭孔动脉、股动脉",
  primaryActions: ["髋关节内收", "髋关节外旋", "髋关节屈曲（辅助）"],
  secondaryActions: ["骨盆稳定"],
  joints: ["髋关节"],
    chains: [
    {
      chainId: "nerve_synergy_lumbar_plexus",
      position: "middle",
      upstream: ["quadriceps_femoris", "adductor-brevis"],
      downstream: ["adductor-longus", "adductor-magnus"],
    },
    {
      chainId: "nerve_synergy_sacral_plexus",
      position: "middle",
      upstream: ["biceps_femoris", "extensor-digitorum-brevis"],
      downstream: ["extensor-digitorum-longus", "extensor-hallucis-brevis"],
    },
    {
      chainId: "func_synergy_hip_external_rotation",
      position: "middle",
      upstream: ["adductor-brevis", "adductor-longus"],
      downstream: ["adductor-magnus", "adductor-minimus"],
    },
    {
      chainId: "segment_synergy_L2",
      position: "middle",
      upstream: ["quadriceps_femoris"],
      downstream: ["adductor-brevis"],
    },
  ],
  triggerPoints: [
    {
      id: "ad_tp1",
      location: "肌腹中部，大腿内侧",
      svgCoordinates: { x: 50, y: 50 },
      referralPattern: {
        description: "大腿内侧、腹股沟区、膝内侧",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["大腿内侧痛", "内收无力", "骑马/劈叉痛"],
      recommendedTechniques: ["ischemic_compression_ad"],
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
  relatedDiagnoses: ["hip_impingement", "groin_strain", "patellofemoral_pain"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
