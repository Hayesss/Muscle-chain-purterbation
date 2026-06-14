import type { MuscleEntry } from "../types";

export const flexor_pollicis_brevis: MuscleEntry = {
  id: "flexor-pollicis-brevis",
  name: { zh: "拇短屈肌", latin: "Musculus flexor pollicis brevis" },
  category: "upper-limb",
  view: ["front"],
  svgPath: {
    "front": "M170,105 Q200,100 230,105 L230,130 Q200,135 170,130 Z"
  },
  origin: "屈肌支持带/大多角骨/小多角骨",
  insertion: "拇指近节指骨底外侧",
  innervation: "正中神经浅头/尺神经深头",
  bloodSupply: "桡动脉浅支/掌浅弓",
  primaryActions: ["拇指掌指关节屈曲"],
  secondaryActions: ["对掌辅助"],
  joints: ["拇指掌指关节"],
    chains: [
    {
      chainId: "func_synergy_digit_flexion",
      position: "middle",
      upstream: ["abductor-digiti-minimi", "abductor-pollicis-brevis"],
      downstream: ["adductor-pollicis", "dorsal-interossei-hand"],
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
