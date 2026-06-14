import type { MuscleEntry } from "../types";

export const serratus_anterior: MuscleEntry = {
  id: "serratus_anterior",
  name: { zh: "前锯肌", latin: "Musculus serratus anterior" },
  category: "trunk",
  view: ["front", "side"],
  svgPath: {
    front: "M175,100 Q185,95 195,100 L198,130 Q185,135 172,130 Z",
    side: "M185,100 Q195,95 205,100 L208,130 Q195,135 182,130 Z"
  },
  origin: "第1-8/9肋骨外侧面",
  insertion: "肩胛骨内侧缘（脊柱缘）前面",
  innervation: "胸长神经 (C5-C7)",
  bloodSupply: "胸外侧动脉、胸肩峰动脉",
  primaryActions: ["肩胛骨前伸（外展）", "肩胛骨上回旋", "肩胛骨上提"],
  secondaryActions: ["协助深呼吸", "俯卧撑等推动作"],
  joints: ["肩胛胸壁关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["diaphragm", "external-intercostals"],
      downstream: ["iliocostalis-thoracis", "innermost-intercostals"],
    },
    {
      chainId: "func_synergy_shoulder_elevation",
      position: "middle",
      upstream: ["gluteus-maximus", "levator_scapulae"],
      downstream: ["rhomboid-major", "rhomboid-minor"],
    },
    {
      chainId: "segment_synergy_C5",
      position: "middle",
      upstream: ["diaphragm"],
      downstream: ["biceps-brachii"],
    },
  ],
  triggerPoints: [
    {
      id: "sa_tp1",
      location: "肌腹外侧部，第5-6肋骨外侧",
      svgCoordinates: { x: 50, y: 50 },
      referralPattern: {
        description: "胸侧壁、肩胛骨内侧缘、上臂尺侧",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["胸侧痛", "深呼吸痛", "肩胛骨内侧缘痛", "举手受限"],
      recommendedTechniques: ["ischemic_compression_sa"],
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
  relatedDiagnoses: ["upper_crossed_syndrome", "winged_scapula", "thoracic_outlet_syndrome"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
