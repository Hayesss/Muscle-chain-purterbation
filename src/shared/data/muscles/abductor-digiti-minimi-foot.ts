import type { MuscleEntry } from "../types";

export const abductor_digiti_minimi_foot: MuscleEntry = {
  id: "abductor-digiti-minimi-foot",
  name: { zh: "小趾展肌", latin: "Musculus abductor digiti minimi (pedis)" },
  category: "lower-limb",
  view: ["front"],
  svgPath: {
    "front": "M170,175 Q200,170 230,175 L230,195 Q200,200 170,195 Z"
  },
  origin: "跟骨结节/足底腱膜/腓骨长肌腱鞘",
  insertion: "小趾近节趾骨底外侧",
  innervation: "足底外侧神经浅支 (S1-S2)",
  bloodSupply: "足底外侧动脉",
  primaryActions: ["小趾外展", "小趾跖趾关节屈曲（辅助）", "足纵弓外侧支撑"],
  secondaryActions: ["足弓外侧支撑"],
  joints: ["跖趾关节"],
    chains: [
    {
      chainId: "func_synergy_digit_flexion",
      position: "middle",
      upstream: ["abductor-hallucis", "adductor-hallucis"],
      downstream: ["dorsal-interossei-foot", "flexor-digiti-minimi-brevis-foot"],
    },
    {
      chainId: "segment_synergy_S1_S2",
      position: "middle",
      upstream: ["abductor-hallucis"],
      downstream: ["adductor-hallucis"],
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
