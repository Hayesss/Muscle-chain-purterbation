import type { MuscleEntry } from "../types";

export const semimembranosus: MuscleEntry = {
  id: "semimembranosus",
  name: { zh: "半膜肌", latin: "Musculus semimembranosus" },
  category: "hip",
  view: ["back"],
  svgPath: {
    "back": "M175,100 Q200,92 225,100 L225,150 Q200,158 175,150 Z"
  },
  origin: "坐骨结节",
  insertion: "胫骨内侧髁后面（形成腘斜韧带）",
  innervation: "坐骨神经胫支 (L5-S2)",
  bloodSupply: "臀下动脉/股深动脉穿支",
  primaryActions: ["髋关节伸展", "髋关节内旋", "膝关节屈曲", "膝关节内旋（屈膝时）"],
  secondaryActions: ["腘绳肌内侧核心", "膝关节后内侧稳定"],
  joints: ["髋关节", "膝关节"],
    chains: [
    {
      chainId: "nerve_synergy_sacral_plexus",
      position: "middle",
      upstream: ["adductor-magnus", "biceps-femoris-long-head"],
      downstream: ["biceps-femoris-short-head", "gemellus-inferior"],
    },
    {
      chainId: "func_synergy_knee_flexion",
      position: "middle",
      upstream: ["biceps-femoris-long-head", "biceps-femoris-short-head"],
      downstream: ["gracilis", "sartorius"],
    },
    {
      chainId: "segment_synergy_S2",
      position: "middle",
      upstream: ["biceps-femoris-long-head"],
      downstream: ["biceps-femoris-short-head"],
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
