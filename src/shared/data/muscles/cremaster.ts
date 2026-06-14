import type { MuscleEntry } from "../types";

export const cremaster: MuscleEntry = {
  id: "cremaster",
  name: { zh: "提睾肌", latin: "Musculus cremaster" },
  category: "trunk",
  view: ["front"],
  svgPath: {
    "front": "M185,80 Q200,75 215,80 L215,120 Q200,125 185,120 Z"
  },
  origin: "腹内斜肌/腹横肌腱膜（腹股沟管）",
  insertion: "精索/睾丸被膜",
  innervation: "生殖股神经生殖支 (L1-L2)",
  bloodSupply: "腹壁下动脉/精索动脉",
  primaryActions: ["提睾（温度/应激反应）"],
  secondaryActions: ["保护睾丸", "辅助射精"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_lumbar_plexus",
      position: "middle",
      upstream: ["iliopsoas", "quadratus_lumborum"],
      downstream: ["adductor-brevis", "adductor-longus"],
    },
    {
      chainId: "segment_synergy_L2",
      position: "middle",
      upstream: ["adductor-brevis"],
      downstream: ["adductor-longus"],
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
