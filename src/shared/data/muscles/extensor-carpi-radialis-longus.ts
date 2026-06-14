import type { MuscleEntry } from "../types";

export const extensor_carpi_radialis_longus: MuscleEntry = {
  id: "extensor-carpi-radialis-longus",
  name: { zh: "桡侧腕长伸肌", latin: "Musculus extensor carpi radialis longus" },
  category: "upper-limb",
  view: ["back"],
  svgPath: {
    "back": "M175,80 Q200,75 225,80 L225,110 Q200,115 175,110 Z"
  },
  origin: "肱骨外上髁嵴下1/3",
  insertion: "第二掌骨底背面",
  innervation: "桡神经 (C6-C7)",
  bloodSupply: "桡返动脉/桡动脉",
  primaryActions: ["腕关节伸展", "腕关节外展（桡偏）", "肘关节伸展（辅助）"],
  secondaryActions: ["握物时腕稳定"],
  joints: ["腕关节", "肘关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["abductor-digiti-minimi", "abductor-pollicis-brevis"],
      downstream: ["abductor-pollicis-longus", "adductor-pollicis"],
    },
    {
      chainId: "func_synergy_wrist_extension",
      position: "middle",
      upstream: ["abductor-pollicis-longus", "extensor-carpi-radialis-brevis"],
      downstream: ["extensor-carpi-ulnaris", "extensor-digiti-minimi"],
    },
    {
      chainId: "segment_synergy_C6",
      position: "middle",
      upstream: ["biceps-brachii"],
      downstream: ["brachialis"],
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
