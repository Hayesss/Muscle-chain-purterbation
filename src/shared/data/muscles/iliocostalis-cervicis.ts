import type { MuscleEntry } from "../types";

export const iliocostalis_cervicis: MuscleEntry = {
  id: "iliocostalis-cervicis",
  name: { zh: "颈髂肋肌", latin: "Musculus iliocostalis cervicis" },
  category: "head-neck",
  view: ["back"],
  svgPath: {
    "back": "M185,45 Q200,40 215,45 L215,110 Q200,115 185,110 Z"
  },
  origin: "上3肋角",
  insertion: "C4-C6横突后结节",
  innervation: "脊神经后支 (C4-C8)",
  bloodSupply: "颈深动脉/枕动脉",
  primaryActions: ["颈后伸", "颈同侧屈", "头颈稳定"],
  secondaryActions: ["颈椎稳定"],
  joints: ["颈椎"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["levator_scapulae", "longus-coli"],
      downstream: ["scalenes", "scalenus-anterior"],
    },
    {
      chainId: "nerve_synergy_dorsal_rami",
      position: "middle",
      upstream: ["interspinales-cervicis", "intertransversarii-cervicis"],
      downstream: ["longissimus-capitis", "longissimus-cervicis"],
    },
    {
      chainId: "func_synergy_spinal_extension",
      position: "middle",
      upstream: ["interspinales-cervicis", "levator_scapulae"],
      downstream: ["longissimus-capitis", "longissimus-cervicis"],
    },
    {
      chainId: "segment_synergy_C4_C8",
      position: "middle",
      upstream: ["spinalis-capitis"],
      downstream: [],
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
