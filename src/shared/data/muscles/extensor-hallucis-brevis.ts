import type { MuscleEntry } from "../types";

export const extensor_hallucis_brevis: MuscleEntry = {
  id: "extensor-hallucis-brevis",
  name: { zh: "拇短伸肌", latin: "Musculus extensor hallucis brevis" },
  category: "lower-limb",
  view: ["front"],
  svgPath: {
    "front": "M170,175 Q200,170 230,175 L230,195 Q200,200 170,195 Z"
  },
  origin: "跟骨前上面/距跟韧带",
  insertion: "拇趾近节趾骨底",
  innervation: "腓深神经 (L5-S1)",
  bloodSupply: "足背动脉",
  primaryActions: ["拇趾伸展（辅助拇长伸）"],
  secondaryActions: ["步态蹬离辅助"],
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
      downstream: ["extensor-digitorum-longus", "extensor-hallucis-longus"],
    },
    {
      chainId: "segment_synergy_L5_S1",
      position: "middle",
      upstream: ["extensor-digitorum-brevis"],
      downstream: ["extensor-hallucis-longus"],
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
