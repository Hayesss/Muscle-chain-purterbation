import type { MuscleEntry } from "../types";

export const rhomboids: MuscleEntry = {
  id: "rhomboids",
  name: { zh: "菱形肌", latin: "Musculus rhomboideus" },
  category: "shoulder",
  view: ["back"],
  svgPath: {
    back: "M195,85 Q205,82 215,85 L218,110 Q205,113 192,110 Z"},
  origin: "C7-T5棘突",
  insertion: "肩胛骨内侧缘（脊柱缘）",
  innervation: "肩胛背神经 (C4-C5)",
  bloodSupply: "颈横动脉深支、肩胛背动脉",
  primaryActions: ["肩胛骨后缩", "肩胛骨下回旋", "肩胛骨上提"],
  secondaryActions: ["稳定肩胛骨于胸壁"],
  joints: ["肩胛胸壁关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["coracobrachialis", "deltoid_anterior"],
      downstream: ["deltoid_middle", "deltoid_posterior"],
    },
    {
      chainId: "func_synergy_shoulder_elevation",
      position: "middle",
      upstream: ["rhomboid-major", "rhomboid-minor"],
      downstream: ["trapezius", "upper_trapezius"],
    },
    {
      chainId: "segment_synergy_C4",
      position: "middle",
      upstream: ["rhomboid-major"],
      downstream: ["rhomboid-minor"],
    },
  ],
  triggerPoints: [
    {
      id: "rb_tp1",
      location: "肌腹中部，肩胛骨内侧缘与脊柱之间",
      svgCoordinates: { x: 50, y: 50 },
      referralPattern: {
        description: "肩胛骨内侧缘、上背区",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["上背痛", "肩胛骨内侧缘痛", "挺胸受限"],
      recommendedTechniques: ["ischemic_compression_rb"],
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
  relatedDiagnoses: ["upper_crossed_syndrome", "cervical_spondylosis"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
