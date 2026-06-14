import type { MuscleEntry } from "../types";

export const flexor_digitorum_brevis: MuscleEntry = {
  id: "flexor-digitorum-brevis",
  name: { zh: "趾短屈肌", latin: "Musculus flexor digitorum brevis" },
  category: "lower-limb",
  view: ["front"],
  svgPath: {
    "front": "M170,175 Q200,170 230,175 L230,195 Q200,200 170,195 Z"
  },
  origin: "跟骨结节内侧/足底腱膜",
  insertion: "第2-5趾中节趾骨底",
  innervation: "足底内侧神经 (S1-S2)",
  bloodSupply: "足底内侧动脉",
  primaryActions: ["第2-5趾近侧趾间关节屈曲", "跖趾关节屈曲（辅助）"],
  secondaryActions: ["足底抓地核心"],
  joints: ["跖趾关节", "近侧趾间关节"],
    chains: [
    {
      chainId: "func_synergy_digit_flexion",
      position: "middle",
      upstream: ["abductor-digiti-minimi-foot", "abductor-hallucis"],
      downstream: ["adductor-hallucis", "dorsal-interossei-foot"],
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
