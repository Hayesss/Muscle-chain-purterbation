import type { MuscleEntry } from "../types";

export const obturator_internus: MuscleEntry = {
  id: "obturator-internus",
  name: { zh: "闭孔内肌", latin: "Musculus obturator internus" },
  category: "hip",
  view: ["back"],
  svgPath: {
    "back": "M170,80 Q200,72 230,80 L230,120 Q200,128 170,120 Z"
  },
  origin: "闭孔膜内面及周围骨面",
  insertion: "股骨大转子内侧面（坐骨小切迹折转）",
  innervation: "骶丛分支 (L5-S2)",
  bloodSupply: "臀下动脉",
  primaryActions: ["髋关节外旋", "髋关节内收（辅助）"],
  secondaryActions: ["骨盆底支撑"],
  joints: ["髋关节"],
    chains: [
    {
      chainId: "nerve_synergy_sacral_plexus",
      position: "middle",
      upstream: ["adductor-magnus", "biceps-femoris-long-head"],
      downstream: ["biceps-femoris-short-head", "gemellus-inferior"],
    },
    {
      chainId: "func_synergy_hip_external_rotation",
      position: "middle",
      upstream: ["adductor-brevis", "adductor-longus"],
      downstream: ["adductor-magnus", "adductor-minimus"],
    },
    {
      chainId: "segment_synergy_S2",
      position: "middle",
      upstream: ["biceps-femoris-long-head"],
      downstream: ["biceps-femoris-short-head"],
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
