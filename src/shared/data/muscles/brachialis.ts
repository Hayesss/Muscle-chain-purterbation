import type { MuscleEntry } from "../types";

export const brachialis: MuscleEntry = {
  id: "brachialis",
  name: { zh: "肱肌", latin: "Musculus brachialis" },
  category: "upper-limb",
  view: ["front"],
  svgPath: {
    "front": "M180,55 Q200,50 220,55 L220,85 Q200,90 180,85 Z"
  },
  origin: "肱骨前面下半/内外侧肌间隔",
  insertion: "尺骨粗隆/冠突",
  innervation: "肌皮神经 (C5-C6)",
  bloodSupply: "肱动脉/桡返动脉",
  primaryActions: ["肘关节屈曲（核心屈肌）"],
  secondaryActions: ["前臂稳定"],
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
      upstream: ["biceps-brachii", "brachioradialis"],
      downstream: ["flexor-carpi-radialis", "flexor-carpi-ulnaris"],
    },
    {
      chainId: "segment_synergy_C5_C6",
      position: "middle",
      upstream: ["biceps-brachii"],
      downstream: ["brachioradialis"],
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
