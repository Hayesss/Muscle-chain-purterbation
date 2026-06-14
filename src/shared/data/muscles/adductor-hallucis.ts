import type { MuscleEntry } from "../types";

export const adductor_hallucis: MuscleEntry = {
  id: "adductor-hallucis",
  name: { zh: "拇收肌", latin: "Musculus adductor hallucis" },
  category: "lower-limb",
  view: ["front"],
  svgPath: {
    "front": "M170,175 Q200,170 230,175 L230,195 Q200,200 170,195 Z"
  },
  origin: "斜头：第2-4跖骨底/腓骨长肌腱/足底腱膜；横头：第3-5趾跖趾关节韧带/足底腱膜",
  insertion: "拇趾近节趾骨底外侧",
  innervation: "足底外侧神经深支 (S1-S2)",
  bloodSupply: "足底动脉弓/跖足底动脉",
  primaryActions: ["拇趾内收", "拇趾跖趾关节屈曲（辅助）", "足横弓支撑"],
  secondaryActions: ["足横弓核心支撑", "步态蹬离"],
  joints: ["跖趾关节"],
    chains: [
    {
      chainId: "func_synergy_digit_flexion",
      position: "middle",
      upstream: ["abductor-digiti-minimi-foot", "abductor-hallucis"],
      downstream: ["dorsal-interossei-foot", "flexor-digiti-minimi-brevis-foot"],
    },
    {
      chainId: "segment_synergy_S1_S2",
      position: "middle",
      upstream: ["abductor-digiti-minimi-foot"],
      downstream: ["abductor-hallucis"],
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
