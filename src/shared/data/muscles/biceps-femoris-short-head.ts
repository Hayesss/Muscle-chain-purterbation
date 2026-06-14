import type { MuscleEntry } from "../types";

export const biceps_femoris_short_head: MuscleEntry = {
  id: "biceps-femoris-short-head",
  name: { zh: "股二头肌短头", latin: "Musculus biceps femoris, caput breve" },
  category: "hip",
  view: ["back"],
  svgPath: {
    "back": "M175,100 Q200,92 225,100 L225,150 Q200,158 175,150 Z"
  },
  origin: "股骨粗线外侧唇/外侧肌间隔",
  insertion: "腓骨头/胫骨外侧髁/小腿筋膜",
  innervation: "坐骨神经腓总支 (L5-S2)",
  bloodSupply: "股深动脉穿支/膝动脉",
  primaryActions: ["膝关节屈曲", "膝关节外旋（屈膝时）"],
  secondaryActions: ["腘绳肌短头", "单关节肌"],
  joints: ["膝关节"],
    chains: [
    {
      chainId: "nerve_synergy_sacral_plexus",
      position: "middle",
      upstream: ["adductor-magnus", "biceps-femoris-long-head"],
      downstream: ["gemellus-inferior", "gemellus-superior"],
    },
    {
      chainId: "func_synergy_knee_flexion",
      position: "middle",
      upstream: ["biceps-femoris-long-head", "gracilis"],
      downstream: ["sartorius", "semimembranosus"],
    },
    {
      chainId: "segment_synergy_S2",
      position: "middle",
      upstream: ["biceps-femoris-long-head"],
      downstream: ["obturator-internus"],
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
