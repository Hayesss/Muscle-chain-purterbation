import type { MuscleEntry } from "../types";

export const spinalis_capitis: MuscleEntry = {
  id: "spinalis-capitis",
  name: { zh: "头棘肌", latin: "Musculus spinalis capitis" },
  category: "head-neck",
  view: ["back"],
  svgPath: {
    "back": "M185,45 Q200,40 215,45 L215,110 Q200,115 185,110 Z"
  },
  origin: "C7-T1/C4-C6关节突",
  insertion: "枕骨下项线内侧",
  innervation: "脊神经后支 (C4-C8)",
  bloodSupply: "枕动脉",
  primaryActions: ["头后伸", "寰枕关节稳定"],
  secondaryActions: ["常与头半棘肌融合"],
  joints: ["寰枕关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "levator_scapulae"],
      downstream: ["longus-coli", "scalenes"],
    },
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
      chainId: "segment_synergy_C4_C8",
      position: "middle",
      upstream: ["iliocostalis-cervicis"],
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
