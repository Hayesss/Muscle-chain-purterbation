import type { MuscleEntry } from "../types";

export const pubococcygeus: MuscleEntry = {
  id: "pubococcygeus",
  name: { zh: "耻尾肌", latin: "Musculus pubococcygeus" },
  category: "trunk",
  view: ["back"],
  svgPath: {
    "back": "M185,105 Q200,100 215,105 L215,125 Q200,130 185,125 Z"
  },
  origin: "耻骨联合后面/耻骨下支",
  insertion: "尾骨/骶骨/对侧肌",
  innervation: "阴部神经 (S2-S4)",
  bloodSupply: "髂内动脉",
  primaryActions: ["盆底支撑", "提肛", "协助排尿/排便控制"],
  secondaryActions: ["性功能核心", "分娩辅助"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_sacral_plexus",
      position: "middle",
      upstream: ["bulbospongiosus", "coccygeus"],
      downstream: ["compressor-urethrae", "external-anal-sphincter"],
    },
    {
      chainId: "segment_synergy_S2",
      position: "middle",
      upstream: ["bulbospongiosus"],
      downstream: ["compressor-urethrae"],
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
