import type { MuscleEntry } from "../types";

export const pronator_teres: MuscleEntry = {
  id: "pronator-teres",
  name: { zh: "旋前圆肌", latin: "Musculus pronator teres" },
  category: "upper-limb",
  view: ["front"],
  svgPath: {
    "front": "M175,80 Q200,75 225,80 L225,110 Q200,115 175,110 Z"
  },
  origin: "肱骨内上髁/屈肌总腱/尺骨冠突",
  insertion: "桡骨中段外侧面",
  innervation: "正中神经 (C6-C7)",
  bloodSupply: "桡动脉/尺动脉",
  primaryActions: ["前臂旋前", "肘关节屈曲（辅助）"],
  secondaryActions: ["前臂稳定"],
  joints: ["桡尺近侧关节", "肘关节"],
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
      downstream: ["brachioradialis", "flexor-carpi-radialis"],
    },
    {
      chainId: "segment_synergy_C6",
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
