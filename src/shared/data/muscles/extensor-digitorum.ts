import type { MuscleEntry } from "../types";

export const extensor_digitorum: MuscleEntry = {
  id: "extensor-digitorum",
  name: { zh: "指伸肌", latin: "Musculus extensor digitorum" },
  category: "upper-limb",
  view: ["back"],
  svgPath: {
    "back": "M175,80 Q200,75 225,80 L225,110 Q200,115 175,110 Z"
  },
  origin: "肱骨外上髁伸肌总腱",
  insertion: "第2-5指中节/远节指骨底（指背腱膜）",
  innervation: "桡神经 (C6-C8)",
  bloodSupply: "骨间后动脉/桡动脉",
  primaryActions: ["第2-5指伸展", "腕关节伸展"],
  secondaryActions: ["手指精细分离伸展弱"],
  joints: ["腕关节", "掌指关节", "近侧指间关节", "远侧指间关节"],
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
      downstream: ["extensor-indicis", "extensor-pollicis-brevis"],
    },
    {
      chainId: "segment_synergy_C6_C8",
      position: "middle",
      upstream: ["triceps-brachii"],
      downstream: ["wrist_extensors"],
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
