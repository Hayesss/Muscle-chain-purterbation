import type { MuscleEntry } from "../types";

export const masseter: MuscleEntry = {
  id: "masseter",
  name: { zh: "咬肌", latin: "Musculus masseter" },
  category: "head-neck",
  view: ["side"],
  svgPath: {
    side: "M215,25 Q225,22 235,25 L238,40 Q228,43 218,40 Z"
  },
  origin: "颧弓下缘及内面",
  insertion: "下颌骨冠突及下颌支外面",
  innervation: "三叉神经下颌支 (V3)",
  bloodSupply: "上颌动脉咬肌支",
  primaryActions: ["上提下颌骨（闭口）", "前伸下颌骨", "侧向研磨"],
  secondaryActions: ["言语辅助", "吞咽辅助"],
  joints: ["颞下颌关节"],
    chains: [
    {
      chainId: "nerve_synergy_cranial_nerves",
      position: "middle",
      upstream: ["anterior-auricular", "antitragicus"],
      downstream: ["aryepiglotticus", "buccinator"],
    },
    {
      chainId: "func_synergy_deglutition",
      position: "middle",
      upstream: ["aryepiglotticus", "buccinator"],
      downstream: ["chondroglossus", "digastric-anterior-belly"],
    },
  ],
  triggerPoints: [
    {
      id: "ms_tp1",
      location: "肌腹中下部，下颌角前上方",
      svgCoordinates: { x: 50, y: 60 },
      referralPattern: {
        description: "颞区、耳前、下颌角、上颌磨牙区",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["张口受限", "咀嚼痛", "颞下颌关节弹响", "牙痛"],
      recommendedTechniques: ["ischemic_compression_ms"],
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
