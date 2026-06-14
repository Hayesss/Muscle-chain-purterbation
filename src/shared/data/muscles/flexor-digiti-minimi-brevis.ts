import type { MuscleEntry } from "../types";

export const flexor_digiti_minimi_brevis: MuscleEntry = {
  id: "flexor-digiti-minimi-brevis",
  name: { zh: "小指短屈肌", latin: "Musculus flexor digiti minimi brevis" },
  category: "upper-limb",
  view: ["front"],
  svgPath: {
    "front": "M170,105 Q200,100 230,105 L230,130 Q200,135 170,130 Z"
  },
  origin: "钩骨钩/屈肌支持带",
  insertion: "小指近节指骨底内侧",
  innervation: "尺神经深支 (C8-T1)",
  bloodSupply: "尺动脉",
  primaryActions: ["小指掌指关节屈曲"],
  secondaryActions: ["小指稳定"],
  joints: ["小指掌指关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["abductor-digiti-minimi", "abductor-pollicis-brevis"],
      downstream: ["abductor-pollicis-longus", "adductor-pollicis"],
    },
    {
      chainId: "func_synergy_digit_flexion",
      position: "middle",
      upstream: ["abductor-digiti-minimi", "abductor-pollicis-brevis"],
      downstream: ["adductor-pollicis", "dorsal-interossei-hand"],
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
