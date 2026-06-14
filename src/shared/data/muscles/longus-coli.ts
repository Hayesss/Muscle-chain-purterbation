import type { MuscleEntry } from "../types";

export const longus_coli: MuscleEntry = {
  id: "longus-coli",
  name: { zh: "颈长肌", latin: "Musculus longus colli" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M188,48 Q200,42 212,48 L212,62 Q200,65 188,62 Z"
  },
  origin: "T1-T3椎体/T4-C7横突前结节/C2-C4椎体",
  insertion: "寰椎前弓/枕骨底/颈椎横突",
  innervation: "颈神经前支C2-C7",
  bloodSupply: "颈升动脉",
  primaryActions: ["颈前屈", "颈侧屈", "颈旋转"],
  secondaryActions: ["颈前柱稳定", "辅助头颈部微调"],
  joints: ["颈椎"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "levator_scapulae"],
      downstream: ["scalenes", "scalenus-anterior"],
    },
    {
      chainId: "nerve_synergy_cervical_anterior_rami",
      position: "middle",
      upstream: ["longus-capitis", "rectus-capitis-anterior"],
      downstream: ["rectus-capitis-lateralis", "scalenes"],
    },
    {
      chainId: "func_synergy_spinal_lateral_flexion",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "intertransversarii-cervicis"],
      downstream: ["levator_scapulae", "longissimus-capitis"],
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
