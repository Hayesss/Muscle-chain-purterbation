import type { MuscleEntry } from "../types";

export const tibialis_posterior: MuscleEntry = {
  id: "tibialis-posterior",
  name: { zh: "胫骨后肌", latin: "Musculus tibialis posterior" },
  category: "lower-limb",
  view: ["back"],
  svgPath: {
    "back": "M175,145 Q200,138 225,145 L225,190 Q200,198 175,190 Z"
  },
  origin: "胫骨后面/骨间膜后面/腓骨后面",
  insertion: "舟骨粗隆/内侧楔骨/中间楔骨/骰骨/第2-4跖骨底",
  innervation: "胫神经 (L4-L5)",
  bloodSupply: "胫后动脉/腓动脉",
  primaryActions: ["足跖屈", "足内翻（内收）", "足纵弓核心支撑"],
  secondaryActions: ["与腓骨长肌共成足横弓吊带", "抗重力站立关键"],
  joints: ["踝关节", "距下关节", "跗骨间关节"],
    chains: [
    {
      chainId: "nerve_synergy_sacral_plexus",
      position: "middle",
      upstream: ["adductors", "biceps_femoris"],
      downstream: ["extensor-digitorum-brevis", "extensor-digitorum-longus"],
    },
    {
      chainId: "func_synergy_ankle_plantarflexion",
      position: "middle",
      upstream: ["fibularis", "flexor-digitorum-longus"],
      downstream: ["flexor-hallucis-longus", "gastrocnemius"],
    },
    {
      chainId: "segment_synergy_L4",
      position: "middle",
      upstream: ["adductors"],
      downstream: ["extensor-digitorum-longus"],
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
