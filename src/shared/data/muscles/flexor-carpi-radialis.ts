import type { MuscleEntry } from "../types";

export const flexor_carpi_radialis: MuscleEntry = {
  id: "flexor-carpi-radialis",
  name: { zh: "桡侧腕屈肌", latin: "Musculus flexor carpi radialis" },
  category: "upper-limb",
  view: ["front"],
  svgPath: {
    "front": "M175,80 Q200,75 225,80 L225,110 Q200,115 175,110 Z"
  },
  origin: "肱骨内上髁屈肌总腱",
  insertion: "第二掌骨底/第三掌骨底",
  innervation: "正中神经 (C6-C7)",
  bloodSupply: "桡动脉/尺动脉",
  primaryActions: ["腕关节屈曲", "腕关节外展（桡偏）", "肘关节屈曲（辅助）"],
  secondaryActions: ["握物辅助"],
  joints: ["腕关节", "肘关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["abductor-digiti-minimi", "abductor-pollicis-brevis"],
      downstream: ["abductor-pollicis-longus", "adductor-pollicis"],
    },
    {
      chainId: "func_synergy_wrist_flexion",
      position: "middle",
      upstream: ["flexor-carpi-ulnaris", "flexor-digitorum-profundus"],
      downstream: ["flexor-digitorum-superficialis", "flexor-pollicis-longus"],
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
