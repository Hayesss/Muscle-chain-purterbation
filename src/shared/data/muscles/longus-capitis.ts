import type { MuscleEntry } from "../types";

export const longus_capitis: MuscleEntry = {
  id: "longus-capitis",
  name: { zh: "头长肌", latin: "Musculus longus capitis" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M188,48 Q200,42 212,48 L212,62 Q200,65 188,62 Z"
  },
  origin: "C3-C6横突前结节",
  insertion: "枕骨底咽结节",
  innervation: "颈神经前支C1-C3",
  bloodSupply: "咽升动脉",
  primaryActions: ["头前屈", "头侧屈"],
  secondaryActions: ["头颈部稳定", "辅助吞咽"],
  joints: ["寰枕关节"],
    chains: [
    {
      chainId: "nerve_synergy_cervical_plexus",
      position: "middle",
      upstream: ["geniohyoid", "obliquus-capitis-inferior"],
      downstream: ["obliquus-capitis-superior", "omohyoid-inferior-belly"],
    },
    {
      chainId: "nerve_synergy_cervical_anterior_rami",
      position: "middle",
      upstream: ["longus-coli", "rectus-capitis-anterior"],
      downstream: ["rectus-capitis-lateralis", "scalenes"],
    },
    {
      chainId: "func_synergy_deglutition",
      position: "middle",
      upstream: ["aryepiglotticus", "buccinator"],
      downstream: ["chondroglossus", "digastric-anterior-belly"],
    },
    {
      chainId: "segment_synergy_C1_C3",
      position: "middle",
      upstream: ["omohyoid-inferior-belly"],
      downstream: ["omohyoid-superior-belly"],
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
