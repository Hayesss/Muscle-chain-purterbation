import type { MuscleEntry } from "../types";

export const plantar_interossei_foot: MuscleEntry = {
  id: "plantar-interossei-foot",
  name: { zh: "足底侧骨间肌", latin: "Musculi interossei plantares (pedis)" },
  category: "lower-limb",
  view: ["front"],
  svgPath: {
    "front": "M170,175 Q200,170 230,175 L230,195 Q200,200 170,195 Z"
  },
  origin: "第3-5跖骨底及内侧面（3块）",
  insertion: "近节趾骨底内侧/趾背腱膜",
  innervation: "足底外侧神经深支 (S1-S2)",
  bloodSupply: "足底动脉弓/跖足底动脉",
  primaryActions: ["第3-5趾内收（向中趾）", "跖趾关节屈曲", "趾间关节伸展（辅助）"],
  secondaryActions: ["足底闭合", "足弓支撑"],
  joints: ["跖趾关节"],
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
