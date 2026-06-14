import type { MuscleEntry } from "../types";

export const deltoid: MuscleEntry = {
  id: "deltoid",
  name: { zh: "三角肌", latin: "Musculus deltoideus" },
  category: "shoulder",
  view: ["front", "back", "side"],
  svgPath: {
    "front": "M180,55 Q200,50 220,55 L220,85 Q200,90 180,85 Z",
    "back": "M180,55 Q200,50 220,55 L220,85 Q200,90 180,85 Z",
    "side": "M210,50 Q228,45 235,65 Q228,85 210,80 Z"
  },
  origin: "锁骨外侧1/3/肩峰/肩胛冈",
  insertion: "肱骨三角肌粗隆",
  innervation: "腋神经 (C5-C6)",
  bloodSupply: "旋肱前/后动脉",
  primaryActions: ["肩关节外展（中部）", "肩关节前屈/内旋（前部）", "肩关节后伸/外旋（后部）"],
  secondaryActions: ["肩带稳定"],
  joints: ["肩关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["coracobrachialis", "deltoid_anterior"],
      downstream: ["deltoid_middle", "deltoid_posterior"],
    },
    {
      chainId: "func_synergy_shoulder_internal_rotation",
      position: "middle",
      upstream: ["deltoid_anterior", "latissimus-dorsi"],
      downstream: ["pectoralis-major", "subscapularis"],
    },
    {
      chainId: "segment_synergy_C5_C6",
      position: "middle",
      upstream: ["deltoid_anterior"],
      downstream: ["deltoid_middle"],
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
