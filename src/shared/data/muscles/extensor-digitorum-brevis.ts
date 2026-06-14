import type { MuscleEntry } from "../types";

export const extensor_digitorum_brevis: MuscleEntry = {
  id: "extensor-digitorum-brevis",
  name: { zh: "趾短伸肌", latin: "Musculus extensor digitorum brevis" },
  category: "lower-limb",
  view: ["front"],
  svgPath: {
    "front": "M170,175 Q200,170 230,175 L230,195 Q200,200 170,195 Z"
  },
  origin: "跟骨前上面/距跟韧带/伸肌下支持带",
  insertion: "拇趾近节趾骨底（拇短伸）/第2-4趾趾长伸肌腱",
  innervation: "腓深神经 (L5-S1)",
  bloodSupply: "足背动脉/弓状动脉",
  primaryActions: ["第2-4趾伸展（辅助趾长伸）", "足背屈（辅助）"],
  secondaryActions: ["足背精细伸展控制"],
  joints: ["踝关节", "跖趾关节"],
    chains: [
    {
      chainId: "nerve_synergy_sacral_plexus",
      position: "middle",
      upstream: ["adductors", "biceps_femoris"],
      downstream: ["extensor-digitorum-longus", "extensor-hallucis-brevis"],
    },
    {
      chainId: "func_synergy_digit_extension",
      position: "middle",
      upstream: ["dorsal-interossei-foot", "extensor-digitorum-longus"],
      downstream: ["extensor-hallucis-brevis", "extensor-hallucis-longus"],
    },
    {
      chainId: "segment_synergy_L5_S1",
      position: "middle",
      upstream: ["extensor-hallucis-brevis"],
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
