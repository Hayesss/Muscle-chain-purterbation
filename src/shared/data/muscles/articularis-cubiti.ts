import type { MuscleEntry } from "../types";

export const articularis_cubiti: MuscleEntry = {
  id: "articularis-cubiti",
  name: { zh: "肘关节肌", latin: "Musculus articularis cubiti" },
  category: "upper-limb",
  view: ["back"],
  svgPath: {
    "back": "M180,55 Q200,50 220,55 L220,85 Q200,90 180,85 Z"
  },
  origin: "肱骨后面下1/3",
  insertion: "肘关节囊/尺骨鹰嘴近端",
  innervation: "桡神经 (C7-C8)",
  bloodSupply: "肱深动脉",
  primaryActions: ["肘关节囊牵拉（伸展时）"],
  secondaryActions: ["肘关节稳定"],
  joints: ["肘关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["abductor-digiti-minimi", "abductor-pollicis-brevis"],
      downstream: ["abductor-pollicis-longus", "adductor-pollicis"],
    },
    {
      chainId: "func_synergy_elbow_extension",
      position: "middle",
      upstream: ["anconeus", "extensor-carpi-radialis-longus"],
      downstream: ["triceps-brachii"],
    },
    {
      chainId: "segment_synergy_C7_C8",
      position: "middle",
      upstream: ["abductor-pollicis-longus"],
      downstream: ["anconeus"],
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
