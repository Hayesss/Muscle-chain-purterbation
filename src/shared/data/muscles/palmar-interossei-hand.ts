import type { MuscleEntry } from "../types";

export const palmar_interossei_hand: MuscleEntry = {
  id: "palmar-interossei-hand",
  name: { zh: "手掌侧骨间肌", latin: "Musculi interossei palmares (manus)" },
  category: "upper-limb",
  view: ["front"],
  svgPath: {
    "front": "M190,50 Q200,48 210,50 L210,60 Q200,62 190,60 Z"
  },
  origin: "第2/4/5掌骨掌侧面（3块）",
  insertion: "指背腱膜/近节指骨底",
  innervation: "尺神经深支 (C8-T1)",
  bloodSupply: "掌深弓/指动脉",
  primaryActions: ["第2/4/5指内收（向中指）", "掌指关节屈曲", "指间关节伸展（辅助）"],
  secondaryActions: ["手闭合", "捏握稳定"],
  joints: ["掌指关节"],
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
