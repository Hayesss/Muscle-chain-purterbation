import type { MuscleEntry } from "../types";

export const palmaris_brevis: MuscleEntry = {
  id: "palmaris-brevis",
  name: { zh: "掌短肌", latin: "Musculus palmaris brevis" },
  category: "upper-limb",
  view: ["front"],
  svgPath: {
    "front": "M170,105 Q200,100 230,105 L230,130 Q200,135 170,130 Z"
  },
  origin: "掌腱膜内侧缘",
  insertion: "手掌内侧皮肤",
  innervation: "尺神经浅支 (C8-T1)",
  bloodSupply: "尺动脉掌浅支",
  primaryActions: ["手掌内侧皮肤皱褶", "保护尺神经血管"],
  secondaryActions: ["功能有限"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["abductor-digiti-minimi", "abductor-pollicis-brevis"],
      downstream: ["abductor-pollicis-longus", "adductor-pollicis"],
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
