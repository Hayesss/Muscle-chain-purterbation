import type { MuscleEntry } from "../types";

export const longissimus_cervicis: MuscleEntry = {
  id: "longissimus-cervicis",
  name: { zh: "颈最长肌", latin: "Musculus longissimus cervicis" },
  category: "head-neck",
  view: ["back"],
  svgPath: {
    "back": "M185,45 Q200,40 215,45 L215,110 Q200,115 185,110 Z"
  },
  origin: "T1-T5横突",
  insertion: "C2-C6横突后结节",
  innervation: "脊神经后支 (C4-T5)",
  bloodSupply: "颈深动脉/枕动脉",
  primaryActions: ["颈后伸", "颈同侧屈/旋转"],
  secondaryActions: ["颈椎稳定"],
  joints: ["颈椎"],
    chains: [
    {
      chainId: "nerve_synergy_dorsal_rami",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "interspinales-cervicis"],
      downstream: ["intertransversarii-cervicis", "longissimus-capitis"],
    },
    {
      chainId: "func_synergy_spinal_extension",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "interspinales-cervicis"],
      downstream: ["levator_scapulae", "longissimus-capitis"],
    },
    {
      chainId: "segment_synergy_T5",
      position: "middle",
      upstream: ["longissimus-capitis"],
      downstream: ["serratus-posterior-superior"],
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
