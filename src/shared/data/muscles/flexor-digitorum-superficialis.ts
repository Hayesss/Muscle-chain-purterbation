import type { MuscleEntry } from "../types";

export const flexor_digitorum_superficialis: MuscleEntry = {
  id: "flexor-digitorum-superficialis",
  name: { zh: "指浅屈肌", latin: "Musculus flexor digitorum superficialis" },
  category: "upper-limb",
  view: ["front"],
  svgPath: {
    "front": "M175,80 Q200,75 225,80 L225,110 Q200,115 175,110 Z"
  },
  origin: "肱骨内上髁/尺骨冠突/桡骨前面",
  insertion: "第2-5指中节指骨底两侧",
  innervation: "正中神经 (C7-T1)",
  bloodSupply: "尺动脉/桡动脉",
  primaryActions: ["第2-5指近侧指间关节屈曲", "腕关节屈曲", "掌指关节屈曲"],
  secondaryActions: ["握物核心"],
  joints: ["腕关节", "掌指关节", "近侧指间关节"],
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
      chainId: "segment_synergy_C7_T1",
      position: "middle",
      upstream: ["flexor-carpi-ulnaris"],
      downstream: ["pronator-quadratus"],
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
