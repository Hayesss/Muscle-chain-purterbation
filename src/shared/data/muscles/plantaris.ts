import type { MuscleEntry } from "../types";

export const plantaris: MuscleEntry = {
  id: "plantaris",
  name: { zh: "跖肌", latin: "Musculus plantaris" },
  category: "lower-limb",
  view: ["back"],
  svgPath: {
    "back": "M175,145 Q200,138 225,145 L225,190 Q200,198 175,190 Z"
  },
  origin: "股骨外上髁嵴上方（膝关节囊）",
  insertion: "跟骨结节内侧（跟腱内侧）",
  innervation: "胫神经 (S1-S2)",
  bloodSupply: "腘动脉",
  primaryActions: ["膝关节屈曲（辅助）", "足跖屈（辅助）"],
  secondaryActions: ["功能有限/退化肌", "肌腹小腱长"],
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
      upstream: ["biceps_femoris", "gastrocnemius"],
      downstream: ["hamstrings", "popliteus"],
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
