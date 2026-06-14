import type { MuscleEntry } from "../types";

export const suboccipitals: MuscleEntry = {
  id: "suboccipitals",
  name: { zh: "枕下肌群", latin: "Suboccipital muscles" },
  category: "head-neck",
  view: ["back"],
  svgPath: {
    back: "M195,35 Q200,32 205,35 L208,48 Q200,50 192,48 Z"},
  origin: "C1-C2椎骨",
  insertion: "枕骨下项线",
  innervation: "枕下神经 (C1)",
  bloodSupply: "椎动脉",
  primaryActions: ["头后伸", "头旋转"],
  secondaryActions: ["眼球运动协同"],
  joints: ["寰枕关节", "寰枢关节"],
    chains: [
    {
      chainId: "nerve_synergy_cervical_plexus",
      position: "middle",
      upstream: ["geniohyoid", "longus-capitis"],
      downstream: ["obliquus-capitis-inferior", "obliquus-capitis-superior"],
    },
    {
      chainId: "nerve_synergy_dorsal_rami",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "interspinales-cervicis"],
      downstream: ["intertransversarii-cervicis", "longissimus-capitis"],
    },
    {
      chainId: "func_synergy_spinal_extension",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "interspinales-cervicis"],
      downstream: ["levator_scapulae", "longissimus-capitis"],
    },
    {
      chainId: "segment_synergy_C1",
      position: "middle",
      upstream: ["geniohyoid"],
      downstream: ["longus-capitis"],
    },
  ],
  triggerPoints: [
    {
      id: "so_tp1",
      location: "枕骨下项线深部",
      svgCoordinates: { x: 50, y: 40 },
      referralPattern: {
        description: "枕区、眼眶、前额",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["枕区头痛", "视物模糊"],
      recommendedTechniques: ["mfr_suboccipital"],
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
  relatedDiagnoses: ["tension_headache", "cervical_spondylosis"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
