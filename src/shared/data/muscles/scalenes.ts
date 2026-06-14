import type { MuscleEntry } from "../types";

export const scalenes: MuscleEntry = {
  id: "scalenes",
  name: { zh: "斜角肌", latin: "Musculi scaleni" },
  category: "head-neck",
  view: ["front", "side"],
  svgPath: {
    front: "M195,50 Q205,46 215,50 L218,80 Q208,83 198,80 Z",
    side: "M205,50 Q215,46 225,50 L228,80 Q218,83 208,80 Z"
  },
  origin: "C3-C6横突前结节",
  insertion: "第1肋斜角肌结节、第2肋前面",
  innervation: "C3-C8颈神经前支",
  bloodSupply: "颈升动脉、甲状腺下动脉",
  primaryActions: ["颈椎侧屈", "颈椎前屈（前斜角肌）", "颈椎后伸（后斜角肌）", "上提第1-2肋（辅助吸气）"],
  secondaryActions: ["稳定颈椎"],
  joints: ["颈椎", "肋骨"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "levator_scapulae"],
      downstream: ["longus-coli", "scalenus-anterior"],
    },
    {
      chainId: "nerve_synergy_cervical_anterior_rami",
      position: "middle",
      upstream: ["longus-capitis", "longus-coli"],
      downstream: ["rectus-capitis-anterior", "rectus-capitis-lateralis"],
    },
    {
      chainId: "func_synergy_spinal_extension",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "interspinales-cervicis"],
      downstream: ["levator_scapulae", "longissimus-capitis"],
    },
    {
      chainId: "segment_synergy_C8",
      position: "middle",
      upstream: ["iliocostalis-cervicis"],
      downstream: ["scalenus-medius"],
    },
  ],
  triggerPoints: [
    {
      id: "sc_tp1",
      location: "前斜角肌肌腹，胸锁乳突肌深部",
      svgCoordinates: { x: 50, y: 50 },
      referralPattern: {
        description: "颈前外侧、胸壁前侧、肩前区、前臂桡侧",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["胸廓出口综合征症状", "手麻", "臂丛牵拉痛"],
      recommendedTechniques: ["ischemic_compression_sc"],
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
  relatedDiagnoses: ["thoracic_outlet_syndrome", "cervical_spondylosis"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
