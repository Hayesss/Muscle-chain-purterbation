import type { MuscleEntry } from "../types";

export const splenius_capitis: MuscleEntry = {
  id: "splenius_capitis",
  name: { zh: "头夹肌", latin: "Musculus splenius capitis" },
  category: "head-neck",
  view: ["back"],
  svgPath: {
    back: "M185,45 Q195,42 205,45 L208,60 Q198,63 188,60 Z"
  },
  origin: "项韧带下半部、C7-T3/4棘突",
  insertion: "颞骨乳突、枕骨上项线外侧",
  innervation: "C4-C6脊神经后支",
  bloodSupply: "枕动脉、颈深动脉",
  primaryActions: ["头后伸", "头同侧旋转", "头侧屈"],
  secondaryActions: ["协助对侧旋转"],
  joints: ["寰枕关节", "颈椎"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "levator_scapulae"],
      downstream: ["longus-coli", "scalenes"],
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
      chainId: "segment_synergy_C4_C6",
      position: "middle",
      upstream: ["scalenus-anterior"],
      downstream: ["splenius-cervicis"],
    },
  ],
  triggerPoints: [
    {
      id: "sc_tp1",
      location: "肌腹上部，C1-C2水平项区",
      svgCoordinates: { x: 50, y: 45 },
      referralPattern: {
        description: "枕区、颞区、头顶",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["枕区头痛", "转头受限", "头顶痛"],
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
  relatedDiagnoses: ["tension_headache", "cervical_spondylosis"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
