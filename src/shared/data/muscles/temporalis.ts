import type { MuscleEntry } from "../types";

export const temporalis: MuscleEntry = {
  id: "temporalis",
  name: { zh: "颞肌", latin: "Musculus temporalis" },
  category: "head-neck",
  view: ["side"],
  svgPath: {
    side: "M205,15 Q215,12 225,15 L228,35 Q218,38 208,35 Z"
  },
  origin: "颞窝（颞骨、顶骨、蝶骨、额骨）",
  insertion: "下颌骨冠突及下颌支前缘",
  innervation: "三叉神经下颌支 (V3)",
  bloodSupply: "颞深动脉",
  primaryActions: ["上提下颌骨（闭口）", "后缩下颌骨"],
  secondaryActions: ["侧向研磨"],
  joints: ["颞下颌关节"],
    chains: [
    {
      chainId: "nerve_synergy_cranial_nerves",
      position: "middle",
      upstream: ["anterior-auricular", "antitragicus"],
      downstream: ["aryepiglotticus", "buccinator"],
    },
    {
      chainId: "func_synergy_oral_closure",
      position: "middle",
      upstream: ["depressor-anguli-oris", "depressor-labii-inferioris"],
      downstream: ["levator-anguli-oris", "levator-labii-superioris-alaeque-nasi"],
    },
  ],
  triggerPoints: [
    {
      id: "tp_tp1",
      location: "肌腹前部，颞窝前区",
      svgCoordinates: { x: 50, y: 50 },
      referralPattern: {
        description: "颞区、眶上区、上颌前牙区",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["颞区头痛", "牙痛", "咀嚼痛"],
      recommendedTechniques: ["ischemic_compression_tp"],
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
  relatedDiagnoses: ["tension_headache", "temporomandibular_joint_disorder"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
