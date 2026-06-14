import type { MuscleEntry } from "../types";

export const abductor_digiti_minimi: MuscleEntry = {
  id: "abductor-digiti-minimi",
  name: { zh: "小指展肌", latin: "Musculus abductor digiti minimi" },
  category: "upper-limb",
  view: ["front"],
  svgPath: {
    "front": "M170,105 Q200,100 230,105 L230,130 Q200,135 170,130 Z"
  },
  origin: "豌豆骨/钩骨/屈肌支持带",
  insertion: "小指近节指骨底内侧",
  innervation: "尺神经深支 (C8-T1)",
  bloodSupply: "尺动脉",
  primaryActions: ["小指外展", "小指掌指关节屈曲（辅助）"],
  secondaryActions: ["小指稳定"],
  joints: ["小指掌指关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["abductor-pollicis-brevis", "abductor-pollicis-longus"],
      downstream: ["adductor-pollicis", "anconeus"],
    },
    {
      chainId: "func_synergy_digit_flexion",
      position: "middle",
      upstream: ["abductor-pollicis-brevis", "adductor-pollicis"],
      downstream: ["dorsal-interossei-hand", "flexor-digiti-minimi-brevis"],
    },
    {
      chainId: "segment_synergy_C8_T1",
      position: "middle",
      upstream: ["abductor-pollicis-brevis"],
      downstream: ["adductor-pollicis"],
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
