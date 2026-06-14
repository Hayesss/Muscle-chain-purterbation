import type { MuscleEntry } from "../types";

export const popliteus: MuscleEntry = {
  id: "popliteus",
  name: { zh: "腘肌", latin: "Musculus popliteus" },
  category: "lower-limb",
  view: ["back"],
  svgPath: {
    "back": "M175,145 Q200,138 225,145 L225,190 Q200,198 175,190 Z"
  },
  origin: "股骨外侧髁（腘沟）/外侧半月板",
  insertion: "胫骨后面比目鱼肌线以上",
  innervation: "胫神经 (L4-S1)",
  bloodSupply: "腘动脉/膝动脉",
  primaryActions: ["膝关节屈曲（启动）", "膝关节内旋（屈膝时）", "膝关节外侧半月板后拉", "膝关节解锁"],
  secondaryActions: ["步态启动屈膝", "半月板保护"],
  joints: ["膝关节"],
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
      upstream: ["biceps_femoris", "gastrocnemius"],
      downstream: ["hamstrings", "plantaris"],
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
