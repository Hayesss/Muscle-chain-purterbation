import type { MuscleEntry } from "../types";

export const levator_scapulae: MuscleEntry = {
  id: "levator_scapulae",
  name: { zh: "肩胛提肌", latin: "Musculus levator scapulae" },
  category: "head-neck",
  view: ["back", "side"],
  svgPath: {
    back: "M190,40 Q200,36 210,40 L215,65 Q205,68 195,65 Z",
    side: "M200,40 Q210,36 220,40 L225,65 Q215,68 205,65 Z"
  },
  origin: "C1-C4横突后结节",
  insertion: "肩胛骨上角和内侧缘上部",
  innervation: "C3-C4脊神经前支，肩胛背神经（C5）",
  bloodSupply: "颈横动脉",
  primaryActions: ["肩胛骨上提", "肩胛骨下回旋", "头颈部侧屈", "头颈部后伸"],
  secondaryActions: ["协助头颈部旋转"],
  joints: ["肩胛胸壁关节", "颈椎"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "longus-coli"],
      downstream: ["scalenes", "scalenus-anterior"],
    },
    {
      chainId: "func_synergy_spinal_extension",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "interspinales-cervicis"],
      downstream: ["longissimus-capitis", "longissimus-cervicis"],
    },
    {
      chainId: "segment_synergy_C3",
      position: "middle",
      upstream: ["longus-capitis"],
      downstream: ["omohyoid-inferior-belly"],
    },
  ],
  triggerPoints: [
    {
      id: "ls_tp1",
      location: "肌腹上部，C1-C2横突至肩胛骨上角连线中点",
      svgCoordinates: { x: 50, y: 40 },
      referralPattern: {
        description: "颈后外侧、肩胛骨上角、枕区",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["颈后僵硬", "转头受限", "肩胛骨上角痛"],
      recommendedTechniques: ["ischemic_compression_ls"],
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
  relatedDiagnoses: ["cervical_spondylosis", "tension_headache", "upper_crossed_syndrome"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
