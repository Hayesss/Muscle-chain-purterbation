import type { MuscleEntry } from "../types";

export const peroneus_tertius: MuscleEntry = {
  id: "peroneus-tertius",
  name: { zh: "腓骨第三肌", latin: "Musculus peroneus tertius" },
  category: "lower-limb",
  view: ["front"],
  svgPath: {
    "front": "M175,140 Q200,135 225,140 L225,180 Q200,185 175,180 Z"
  },
  origin: "腓骨下1/3前面/骨间膜",
  insertion: "第五跖骨底背侧",
  innervation: "腓深神经 (L4-L5)",
  bloodSupply: "胫前动脉",
  primaryActions: ["足背屈", "足外翻（外展）"],
  secondaryActions: ["步态摆动期足廓清", "功能有限/变异肌"],
  joints: ["踝关节", "距下关节"],
    chains: [
    {
      chainId: "nerve_synergy_sacral_plexus",
      position: "middle",
      upstream: ["adductors", "biceps_femoris"],
      downstream: ["extensor-digitorum-brevis", "extensor-digitorum-longus"],
    },
    {
      chainId: "func_synergy_ankle_eversion",
      position: "middle",
      upstream: ["extensor-digitorum-longus", "fibularis"],
      downstream: ["peroneus-brevis", "peroneus-longus"],
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
