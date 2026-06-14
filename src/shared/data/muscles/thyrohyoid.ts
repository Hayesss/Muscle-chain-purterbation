import type { MuscleEntry } from "../types";

export const thyrohyoid: MuscleEntry = {
  id: "thyrohyoid",
  name: { zh: "甲状舌骨肌", latin: "Musculus thyrohyoideus" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M192,62 Q200,58 208,62 L208,75 Q200,78 192,75 Z"
  },
  origin: "甲状软骨板斜线",
  insertion: "舌骨体大角",
  innervation: "舌下神经 (XII)（C1纤维）",
  bloodSupply: "甲状腺上动脉",
  primaryActions: ["降舌骨/上提甲状软骨", "喉部位置微调"],
  secondaryActions: ["吞咽辅助", "发音辅助"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_cervical_plexus",
      position: "middle",
      upstream: ["geniohyoid", "longus-capitis"],
      downstream: ["obliquus-capitis-inferior", "obliquus-capitis-superior"],
    },
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
    {
      chainId: "segment_synergy_C1",
      position: "middle",
      upstream: ["geniohyoid"],
      downstream: ["longus-capitis"],
    },
  ],
  triggerPoints: [],
  interventions: {
    manualTherapy: ["触诊评估", "软组织松解"],
    dryNeedling: "临床评估后决定。",
    stretching: [{ position: "温和牵伸位", duration: "20-30秒", caution: "避免过度牵拉" }],
    strengthening: ["渐进抗阻训练"],
    prognosis: "预后良好，配合康复训练可恢复。",
    redFlags: ["进行性加重", "伴随神经症状", "不明原因体重下降"],
  },
  relatedDiagnoses: [],
  relatedTechniques: [],
  relatedSymptomRegions: [],
};
