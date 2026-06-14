import type { MuscleEntry } from "../types";

export const brachioradialis: MuscleEntry = {
  id: "brachioradialis",
  name: { zh: "肱桡肌", latin: "Musculus brachioradialis" },
  category: "upper-limb",
  view: ["front", "side"],
  svgPath: {
    "front": "M175,80 Q200,75 225,80 L225,110 Q200,115 175,110 Z",
    "side": "M215,72 Q232,68 235,95 Q232,115 215,110 Z"
  },
  origin: "肱骨外上髁嵴上2/3",
  insertion: "桡骨茎突基部",
  innervation: "桡神经 (C5-C6)",
  bloodSupply: "桡返动脉/桡动脉",
  primaryActions: ["肘关节屈曲（前臂中立位最强）", "前臂旋前/旋后回中立位"],
  secondaryActions: ["提物功能"],
  joints: ["肘关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["abductor-digiti-minimi", "abductor-pollicis-brevis"],
      downstream: ["abductor-pollicis-longus", "adductor-pollicis"],
    },
    {
      chainId: "func_synergy_elbow_flexion",
      position: "middle",
      upstream: ["biceps-brachii", "brachialis"],
      downstream: ["flexor-carpi-radialis", "flexor-carpi-ulnaris"],
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
