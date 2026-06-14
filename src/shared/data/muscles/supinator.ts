import type { MuscleEntry } from "../types";

export const supinator: MuscleEntry = {
  id: "supinator",
  name: { zh: "旋后肌", latin: "Musculus supinator" },
  category: "upper-limb",
  view: ["back"],
  svgPath: {
    "back": "M175,80 Q200,75 225,80 L225,110 Q200,115 175,110 Z"
  },
  origin: "肱骨外上髁/桡侧副韧带/环状韧带/尺骨旋后嵴",
  insertion: "桡骨上1/3前面/外侧面/后面",
  innervation: "桡神经深支 (C5-C6)",
  bloodSupply: "骨间返动脉/桡返动脉",
  primaryActions: ["前臂旋后（核心）", "桡尺近侧关节稳定"],
  secondaryActions: ["旋后启动"],
  joints: ["桡尺近侧关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["abductor-digiti-minimi", "abductor-pollicis-brevis"],
      downstream: ["abductor-pollicis-longus", "adductor-pollicis"],
    },
    {
      chainId: "func_synergy_forearm_supination",
      position: "middle",
      upstream: ["biceps-brachii", "brachioradialis"],
      downstream: [],
    },
    {
      chainId: "segment_synergy_C5_C6",
      position: "middle",
      upstream: ["biceps-brachii"],
      downstream: ["brachialis"],
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
