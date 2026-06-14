import type { MuscleEntry } from "../types";

export const soleus: MuscleEntry = {
  id: "soleus",
  name: { zh: "比目鱼肌", latin: "Musculus soleus" },
  category: "lower-limb",
  view: ["back"],
  svgPath: {
    "back": "M175,145 Q200,138 225,145 L225,190 Q200,198 175,190 Z"
  },
  origin: "腓骨后面上1/3/胫骨比目鱼肌线/胫骨后面中1/3",
  insertion: "跟骨结节（与腓肠肌腱共成跟腱）",
  innervation: "胫神经 (S1-S2)",
  bloodSupply: "腘动脉/腓动脉/胫后动脉",
  primaryActions: ["足跖屈（站立/行走核心）"],
  secondaryActions: ["抗重力站立", "静脉泵（肌泵）"],
  joints: ["踝关节"],
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
