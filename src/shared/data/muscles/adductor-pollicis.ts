import type { MuscleEntry } from "../types";

export const adductor_pollicis: MuscleEntry = {
  id: "adductor-pollicis",
  name: { zh: "拇收肌", latin: "Musculus adductor pollicis" },
  category: "upper-limb",
  view: ["front"],
  svgPath: {
    "front": "M170,105 Q200,100 230,105 L230,130 Q200,135 170,130 Z"
  },
  origin: "斜头：头状骨/第2-3掌骨底；横头：第3掌骨掌侧面",
  insertion: "拇指近节指骨底内侧",
  innervation: "尺神经深支 (C8-T1)",
  bloodSupply: "掌深弓/拇主要动脉",
  primaryActions: ["拇指内收", "拇指掌指关节屈曲（辅助）"],
  secondaryActions: ["强力握持核心"],
  joints: ["拇指掌指关节", "腕掌关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["abductor-digiti-minimi", "abductor-pollicis-brevis"],
      downstream: ["abductor-pollicis-longus", "anconeus"],
    },
    {
      chainId: "func_synergy_digit_flexion",
      position: "middle",
      upstream: ["abductor-digiti-minimi", "abductor-pollicis-brevis"],
      downstream: ["dorsal-interossei-hand", "flexor-digiti-minimi-brevis"],
    },
    {
      chainId: "segment_synergy_C8_T1",
      position: "middle",
      upstream: ["abductor-digiti-minimi"],
      downstream: ["abductor-pollicis-brevis"],
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
