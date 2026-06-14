import type { MuscleEntry } from "../types";

export const intertransversarii_cervicis: MuscleEntry = {
  id: "intertransversarii-cervicis",
  name: { zh: "颈横突间肌", latin: "Musculi intertransversarii cervicis" },
  category: "head-neck",
  view: ["back"],
  svgPath: {
    "back": "M185,45 Q200,40 215,45 L215,110 Q200,115 185,110 Z"
  },
  origin: "C2-C7横突",
  insertion: "相邻上位横突",
  innervation: "脊神经后支/前支",
  bloodSupply: "颈深动脉",
  primaryActions: ["颈侧屈", "颈椎节段稳定"],
  secondaryActions: ["本体感觉"],
  joints: ["颈椎"],
    chains: [
    {
      chainId: "nerve_synergy_dorsal_rami",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "interspinales-cervicis"],
      downstream: ["longissimus-capitis", "longissimus-cervicis"],
    },
    {
      chainId: "func_synergy_spinal_lateral_flexion",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "levator_scapulae"],
      downstream: ["longissimus-capitis", "longissimus-cervicis"],
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
