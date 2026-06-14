import type { MuscleEntry } from "../types";

export const rectus_capitis_lateralis: MuscleEntry = {
  id: "rectus-capitis-lateralis",
  name: { zh: "头外侧直肌", latin: "Musculus rectus capitis lateralis" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M188,48 Q200,42 212,48 L212,62 Q200,65 188,62 Z"
  },
  origin: "寰椎横突上面",
  insertion: "枕骨颈静脉突",
  innervation: "颈神经前支C1-C2",
  bloodSupply: "咽升动脉",
  primaryActions: ["头侧屈"],
  secondaryActions: ["寰枕关节稳定"],
  joints: ["寰枕关节"],
    chains: [
    {
      chainId: "nerve_synergy_cervical_plexus",
      position: "middle",
      upstream: ["geniohyoid", "longus-capitis"],
      downstream: ["obliquus-capitis-inferior", "obliquus-capitis-superior"],
    },
    {
      chainId: "nerve_synergy_cervical_anterior_rami",
      position: "middle",
      upstream: ["longus-capitis", "longus-coli"],
      downstream: ["rectus-capitis-anterior", "scalenes"],
    },
    {
      chainId: "func_synergy_spinal_lateral_flexion",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "intertransversarii-cervicis"],
      downstream: ["levator_scapulae", "longissimus-capitis"],
    },
    {
      chainId: "segment_synergy_C1_C2",
      position: "middle",
      upstream: ["rectus-capitis-anterior"],
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
