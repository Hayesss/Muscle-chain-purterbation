import type { MuscleEntry } from "../types";

export const splenius_cervicis: MuscleEntry = {
  id: "splenius-cervicis",
  name: { zh: "颈夹肌", latin: "Musculus splenius cervicis" },
  category: "head-neck",
  view: ["back"],
  svgPath: {
    "back": "M185,45 Q200,40 215,45 L215,110 Q200,115 185,110 Z"
  },
  origin: "T3-T6棘突",
  insertion: "C1-C3横突后结节",
  innervation: "颈神经后支 (C4-C6)",
  bloodSupply: "颈深动脉/枕动脉",
  primaryActions: ["头后伸", "头同侧旋转/侧屈", "颈后伸"],
  secondaryActions: ["头颈部稳定"],
  joints: ["颈椎"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "levator_scapulae"],
      downstream: ["longus-coli", "scalenes"],
    },
    {
      chainId: "func_synergy_spinal_extension",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "interspinales-cervicis"],
      downstream: ["levator_scapulae", "longissimus-capitis"],
    },
    {
      chainId: "segment_synergy_C4_C6",
      position: "middle",
      upstream: ["scalenus-anterior"],
      downstream: ["splenius_capitis"],
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
