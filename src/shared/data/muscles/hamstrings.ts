import type { MuscleEntry } from "../types";

export const hamstrings: MuscleEntry = {
  id: "hamstrings",
  name: { zh: "腘绳肌", latin: "Musculi ischiocrurales" },
  category: "lower-limb",
  view: ["back"],
  svgPath: {
    back: "M185,280 Q200,276 215,280 L218,340 Q200,344 182,340 Z"},
  origin: "坐骨结节（股二头肌长头、半腱肌、半膜肌）",
  insertion: "股二头肌：腓骨头；半腱肌/半膜肌：胫骨内侧髁",
  innervation: "坐骨神经 (L5-S2)",
  bloodSupply: "股深动脉穿支、腘动脉",
  primaryActions: ["膝关节屈曲", "髋关节伸展"],
  secondaryActions: ["骨盆后倾", "躯干前屈控制"],
  joints: ["膝关节", "髋关节"],
    chains: [
    {
      chainId: "nerve_synergy_sacral_plexus",
      position: "middle",
      upstream: ["adductors", "biceps_femoris"],
      downstream: ["extensor-digitorum-brevis", "extensor-digitorum-longus"],
    },
    {
      chainId: "func_synergy_knee_flexion",
      position: "middle",
      upstream: ["biceps_femoris", "gastrocnemius"],
      downstream: ["plantaris", "popliteus"],
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
      id: "hs_tp1",
      location: "肌腹中上部，坐骨结节下方大腿后侧",
      svgCoordinates: { x: 50, y: 50 },
      referralPattern: {
        description: "大腿后侧、膝后区、臀区",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["大腿后侧拉伤感", "前屈受限", "坐位痛"],
      recommendedTechniques: ["ischemic_compression_hs"],
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
  relatedDiagnoses: ["hamstring_strain", "lumbar_strain", "patellofemoral_pain"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
