import type { MuscleEntry } from "../types";

export const interspinales_cervicis: MuscleEntry = {
  id: "interspinales-cervicis",
  name: { zh: "颈棘间肌", latin: "Musculi interspinales cervicis" },
  category: "head-neck",
  view: ["back"],
  svgPath: {
    "back": "M185,45 Q200,40 215,45 L215,110 Q200,115 185,110 Z"
  },
  origin: "C2-C7棘突",
  insertion: "相邻上位棘突",
  innervation: "脊神经后支",
  bloodSupply: "颈深动脉",
  primaryActions: ["颈后伸", "颈椎节段稳定"],
  secondaryActions: ["功能有限"],
  joints: ["颈椎"],
    chains: [
    {
      chainId: "nerve_synergy_dorsal_rami",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "intertransversarii-cervicis"],
      downstream: ["longissimus-capitis", "longissimus-cervicis"],
    },
    {
      chainId: "func_synergy_spinal_extension",
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
