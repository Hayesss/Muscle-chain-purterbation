import type { MuscleEntry } from "../types";

export const gracilis: MuscleEntry = {
  id: "gracilis",
  name: { zh: "股薄肌", latin: "Musculus gracilis" },
  category: "hip",
  view: ["front"],
  svgPath: {
    "front": "M185,105 Q200,98 215,105 L215,140 Q200,145 185,140 Z"
  },
  origin: "耻骨联合下缘/耻骨下支",
  insertion: "胫骨粗隆内侧面（鹅足最前）",
  innervation: "闭孔神经前支 (L2-L3)",
  bloodSupply: "闭孔动脉/膝动脉",
  primaryActions: ["髋关节内收", "髋关节屈曲（辅助）", "膝关节屈曲", "膝关节内旋（屈膝时）"],
  secondaryActions: ["鹅足三肌之一"],
  joints: ["髋关节", "膝关节"],
    chains: [
    {
      chainId: "nerve_synergy_lumbar_plexus",
      position: "middle",
      upstream: ["adductor-brevis", "adductor-longus"],
      downstream: ["adductor-magnus", "adductor-minimus"],
    },
    {
      chainId: "func_synergy_hip_flexion",
      position: "middle",
      upstream: ["adductor-brevis", "adductor-longus"],
      downstream: ["iliacus", "pectineus"],
    },
    {
      chainId: "segment_synergy_L2_L3",
      position: "middle",
      upstream: ["sartorius"],
      downstream: [],
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
