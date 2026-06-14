import type { MuscleEntry } from "../types";

export const biceps_femoris: MuscleEntry = {
  id: "biceps_femoris",
  name: { zh: "股二头肌", latin: "Musculus biceps femoris" },
  category: "lower-limb",
  view: ["back"],
  svgPath: {
    back: "M215,280 Q225,276 235,280 L238,340 Q225,344 212,340 Z"
  },
  origin: "长头：坐骨结节；短头：股骨粗线外侧唇",
  insertion: "腓骨头、胫骨外侧髁",
  innervation: "坐骨神经 (L5-S2)",
  bloodSupply: "股深动脉穿支、腘动脉",
  primaryActions: ["膝关节屈曲", "髋关节伸展（长头）", "膝关节外旋（小腿外旋）"],
  secondaryActions: ["骨盆后倾", "躯干前屈控制"],
  joints: ["膝关节", "髋关节"],
    chains: [
    {
      chainId: "nerve_synergy_sacral_plexus",
      position: "middle",
      upstream: ["adductors", "extensor-digitorum-brevis"],
      downstream: ["extensor-digitorum-longus", "extensor-hallucis-brevis"],
    },
    {
      chainId: "func_synergy_spinal_extension",
      position: "middle",
      upstream: ["adductor-magnus", "erector_spinae"],
      downstream: ["gluteus-maximus", "iliocostalis-cervicis"],
    },
    {
      chainId: "segment_synergy_S2",
      position: "middle",
      upstream: ["abductor-digiti-minimi-foot"],
      downstream: ["abductor-hallucis"],
    },
  ],
  triggerPoints: [
    {
      id: "bf_tp1",
      location: "肌腹上部，坐骨结节下方大腿后外侧",
      svgCoordinates: { x: 50, y: 50 },
      referralPattern: {
        description: "大腿后外侧、膝后外侧、小腿外侧",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["大腿后外侧痛", "腘窝外侧痛", "前屈受限"],
      recommendedTechniques: ["ischemic_compression_bf"],
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
  relatedDiagnoses: ["hamstring_strain", "lumbar_strain", "iliotibial_band_syndrome"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
