import type { MuscleEntry } from "../types";

export const palmaris_longus: MuscleEntry = {
  id: "palmaris-longus",
  name: { zh: "掌长肌", latin: "Musculus palmaris longus" },
  category: "upper-limb",
  view: ["front"],
  svgPath: {
    "front": "M175,80 Q200,75 225,80 L225,110 Q200,115 175,110 Z"
  },
  origin: "肱骨内上髁屈肌总腱",
  insertion: "掌腱膜/屈肌支持带",
  innervation: "正中神经 (C7-C8)",
  bloodSupply: "尺动脉/桡动脉",
  primaryActions: ["掌腱膜紧张", "腕关节屈曲（辅助）", "屈肌支持带加固"],
  secondaryActions: ["功能有限/变异肌（约14%缺如）"],
  joints: ["腕关节"],
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
      upstream: ["flexor-carpi-radialis", "flexor-carpi-ulnaris"],
      downstream: ["flexor-digitorum-profundus", "flexor-digitorum-superficialis"],
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
