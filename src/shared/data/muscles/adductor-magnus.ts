import type { MuscleEntry } from "../types";

export const adductor_magnus: MuscleEntry = {
  id: "adductor-magnus",
  name: { zh: "大收肌", latin: "Musculus adductor magnus" },
  category: "hip",
  view: ["front", "back"],
  svgPath: {
    "front": "M185,105 Q200,98 215,105 L215,140 Q200,145 185,140 Z",
    "back": "M190,50 Q200,48 210,50 L210,60 Q200,62 190,60 Z"
  },
  origin: "耻骨下支/坐骨支/坐骨结节（前/后头）",
  insertion: "股骨粗线全段/内上髁收肌结节",
  innervation: "闭孔神经后支（前部）/坐骨神经（后部） (L2-L4)",
  bloodSupply: "闭孔动脉/臀下动脉/股深动脉",
  primaryActions: ["髋关节内收（核心）", "髋关节伸展（后部坐骨结节头）", "髋关节外旋"],
  secondaryActions: ["骨盆额状面稳定", "下肢内收核心"],
  joints: ["髋关节"],
    chains: [
    {
      chainId: "nerve_synergy_lumbar_plexus",
      position: "middle",
      upstream: ["adductor-brevis", "adductor-longus"],
      downstream: ["adductor-minimus", "articularis-genu"],
    },
    {
      chainId: "nerve_synergy_sacral_plexus",
      position: "middle",
      upstream: ["biceps-femoris-long-head", "biceps-femoris-short-head"],
      downstream: ["gemellus-inferior", "gemellus-superior"],
    },
    {
      chainId: "func_synergy_spinal_extension",
      position: "middle",
      upstream: ["gluteus-maximus", "biceps_femoris"],
      downstream: ["erector_spinae", "iliocostalis-cervicis"],
    },
    {
      chainId: "segment_synergy_L2",
      position: "middle",
      upstream: ["adductor-brevis"],
      downstream: ["adductor-longus"],
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
