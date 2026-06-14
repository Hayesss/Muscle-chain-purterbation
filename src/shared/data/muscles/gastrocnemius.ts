import type { MuscleEntry } from "../types";

export const gastrocnemius: MuscleEntry = {
  id: "gastrocnemius",
  name: { zh: "腓肠肌", latin: "Musculus gastrocnemius" },
  category: "lower-limb",
  view: ["back"],
  svgPath: {
    "back": "M175,145 Q200,138 225,145 L225,190 Q200,198 175,190 Z"
  },
  origin: "内侧头：股骨内侧髁后面；外侧头：股骨外侧髁后面",
  insertion: "跟骨结节（与比目鱼肌腱共成跟腱）",
  innervation: "胫神经 (S1-S2)",
  bloodSupply: "腘动脉/腓动脉/胫后动脉",
  primaryActions: ["足跖屈（蹬地）", "膝关节屈曲（非负重时）", "行走/跑跳推进"],
  secondaryActions: ["跨双关节", "小腿三头肌核心"],
  joints: ["踝关节", "膝关节"],
    chains: [
    {
      chainId: "nerve_synergy_sacral_plexus",
      position: "middle",
      upstream: ["adductors", "biceps_femoris"],
      downstream: ["extensor-digitorum-brevis", "extensor-digitorum-longus"],
    },
    {
      chainId: "func_synergy_knee_flexion",
      position: "middle",
      upstream: ["biceps_femoris", "hamstrings"],
      downstream: ["plantaris", "popliteus"],
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
