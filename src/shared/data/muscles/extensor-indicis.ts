import type { MuscleEntry } from "../types";

export const extensor_indicis: MuscleEntry = {
  id: "extensor-indicis",
  name: { zh: "示指伸肌", latin: "Musculus extensor indicis" },
  category: "upper-limb",
  view: ["back"],
  svgPath: {
    "back": "M175,80 Q200,75 225,80 L225,110 Q200,115 175,110 Z"
  },
  origin: "尺骨后面/骨间膜后面",
  insertion: "示指指背腱膜（示指伸肌）",
  innervation: "桡神经深支 (C7-C8)",
  bloodSupply: "骨间后动脉",
  primaryActions: ["示指独立伸展", "腕关节伸展（辅助）"],
  secondaryActions: ["示指精细伸展控制"],
  joints: ["腕关节", "示指关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["abductor-digiti-minimi", "abductor-pollicis-brevis"],
      downstream: ["abductor-pollicis-longus", "adductor-pollicis"],
    },
    {
      chainId: "func_synergy_digit_extension",
      position: "middle",
      upstream: ["dorsal-interossei-hand", "extensor-digiti-minimi"],
      downstream: ["extensor-digitorum", "extensor-pollicis-brevis"],
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
