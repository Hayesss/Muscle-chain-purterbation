import type { MuscleEntry } from "../types";

export const scalenus_anterior: MuscleEntry = {
  id: "scalenus-anterior",
  name: { zh: "前斜角肌", latin: "Musculus scalenus anterior" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M185,52 Q200,45 215,52 L215,68 Q200,72 185,68 Z"
  },
  origin: "C3-C6横突前结节",
  insertion: "第一肋斜角肌结节",
  innervation: "颈神经前支C4-C6",
  bloodSupply: "颈升动脉",
  primaryActions: ["颈侧屈", "颈前屈", "上提第一肋（辅助吸气）"],
  secondaryActions: ["胸廓出口边界", "头颈稳定"],
  joints: ["颈椎"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "levator_scapulae"],
      downstream: ["longus-coli", "scalenes"],
    },
    {
      chainId: "nerve_synergy_cervical_anterior_rami",
      position: "middle",
      upstream: ["longus-capitis", "longus-coli"],
      downstream: ["rectus-capitis-anterior", "rectus-capitis-lateralis"],
    },
    {
      chainId: "func_synergy_spinal_lateral_flexion",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "intertransversarii-cervicis"],
      downstream: ["levator_scapulae", "longissimus-capitis"],
    },
    {
      chainId: "segment_synergy_C4_C6",
      position: "middle",
      upstream: ["splenius_capitis"],
      downstream: ["splenius-cervicis"],
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
