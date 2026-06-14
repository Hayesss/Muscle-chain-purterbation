import type { MuscleEntry } from "../types";

export const extensor_digitorum_longus: MuscleEntry = {
  id: "extensor-digitorum-longus",
  name: { zh: "趾长伸肌", latin: "Musculus extensor digitorum longus" },
  category: "lower-limb",
  view: ["front"],
  svgPath: {
    "front": "M175,140 Q200,135 225,140 L225,180 Q200,185 175,180 Z"
  },
  origin: "腓骨前面外侧面/胫骨外髁/骨间膜前面",
  insertion: "第2-5趾中节/远节趾骨底（趾背腱膜）",
  innervation: "腓深神经 (L4-L5)",
  bloodSupply: "胫前动脉",
  primaryActions: ["第2-5趾伸展", "足背屈（辅助）", "足外翻（辅助）"],
  secondaryActions: ["步态摆动期趾廓清"],
  joints: ["踝关节", "跖趾关节", "近侧趾间关节", "远侧趾间关节"],
    chains: [
    {
      chainId: "nerve_synergy_sacral_plexus",
      position: "middle",
      upstream: ["adductors", "biceps_femoris"],
      downstream: ["extensor-digitorum-brevis", "extensor-hallucis-brevis"],
    },
    {
      chainId: "func_synergy_digit_extension",
      position: "middle",
      upstream: ["dorsal-interossei-foot", "extensor-digitorum-brevis"],
      downstream: ["extensor-hallucis-brevis", "extensor-hallucis-longus"],
    },
    {
      chainId: "segment_synergy_L4",
      position: "middle",
      upstream: ["adductors"],
      downstream: ["fibularis"],
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
