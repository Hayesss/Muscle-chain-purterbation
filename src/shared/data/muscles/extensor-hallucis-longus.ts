import type { MuscleEntry } from "../types";

export const extensor_hallucis_longus: MuscleEntry = {
  id: "extensor-hallucis-longus",
  name: { zh: "拇长伸肌", latin: "Musculus extensor hallucis longus" },
  category: "lower-limb",
  view: ["front"],
  svgPath: {
    "front": "M175,140 Q200,135 225,140 L225,180 Q200,185 175,180 Z"
  },
  origin: "腓骨内侧面/骨间膜前面",
  insertion: "拇趾远节趾骨底",
  innervation: "腓深神经 (L5-S1)",
  bloodSupply: "胫前动脉",
  primaryActions: ["拇趾伸展", "足背屈（辅助）", "足内翻（辅助）"],
  secondaryActions: ["步态蹬离期辅助"],
  joints: ["踝关节", "拇趾关节"],
    chains: [
    {
      chainId: "nerve_synergy_sacral_plexus",
      position: "middle",
      upstream: ["adductors", "biceps_femoris"],
      downstream: ["extensor-digitorum-brevis", "extensor-digitorum-longus"],
    },
    {
      chainId: "func_synergy_digit_extension",
      position: "middle",
      upstream: ["dorsal-interossei-foot", "extensor-digitorum-brevis"],
      downstream: ["extensor-digitorum-longus", "extensor-hallucis-brevis"],
    },
    {
      chainId: "segment_synergy_L5_S1",
      position: "middle",
      upstream: ["extensor-digitorum-brevis"],
      downstream: ["extensor-hallucis-brevis"],
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
