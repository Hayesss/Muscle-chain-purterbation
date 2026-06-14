import type { MuscleEntry } from "../types";

export const flexor_hallucis_longus: MuscleEntry = {
  id: "flexor-hallucis-longus",
  name: { zh: "拇长屈肌", latin: "Musculus flexor hallucis longus" },
  category: "lower-limb",
  view: ["back"],
  svgPath: {
    "back": "M175,145 Q200,138 225,145 L225,190 Q200,198 175,190 Z"
  },
  origin: "腓骨后面下2/3/骨间膜后面",
  insertion: "拇趾远节趾骨底",
  innervation: "胫神经 (S2-S3)",
  bloodSupply: "腓动脉/胫后动脉",
  primaryActions: ["拇趾屈曲", "足跖屈（辅助）", "足内翻（辅助）"],
  secondaryActions: ["步态推进期拇趾蹬地核心", "足纵弓支撑"],
  joints: ["踝关节", "拇趾关节"],
    chains: [
    {
      chainId: "nerve_synergy_sacral_plexus",
      position: "middle",
      upstream: ["adductors", "biceps_femoris"],
      downstream: ["extensor-digitorum-brevis", "extensor-digitorum-longus"],
    },
    {
      chainId: "func_synergy_digit_flexion",
      position: "middle",
      upstream: ["abductor-digiti-minimi-foot", "abductor-hallucis"],
      downstream: ["adductor-hallucis", "dorsal-interossei-foot"],
    },
    {
      chainId: "segment_synergy_S2",
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
