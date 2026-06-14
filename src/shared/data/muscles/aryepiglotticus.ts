import type { MuscleEntry } from "../types";

export const aryepiglotticus: MuscleEntry = {
  id: "aryepiglotticus",
  name: { zh: "杓会厌肌", latin: "Musculus aryepiglotticus" },
  category: "head-neck",
  view: ["back"],
  svgPath: {
    "back": "M190,50 Q200,48 210,50 L210,60 Q200,62 190,60 Z"
  },
  origin: "杓状软骨尖",
  insertion: "会厌软骨侧缘",
  innervation: "喉返神经 (X)",
  bloodSupply: "甲状腺下动脉",
  primaryActions: ["会厌下压（关闭喉口）"],
  secondaryActions: ["吞咽保护气道"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_cranial_nerves",
      position: "middle",
      upstream: ["anterior-auricular", "antitragicus"],
      downstream: ["buccinator", "chondroglossus"],
    },
    {
      chainId: "func_synergy_deglutition",
      position: "middle",
      upstream: ["buccinator", "chondroglossus"],
      downstream: ["digastric-anterior-belly", "digastric-posterior-belly"],
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
