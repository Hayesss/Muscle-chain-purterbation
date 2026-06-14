import type { MuscleEntry } from "../types";

export const bulbospongiosus: MuscleEntry = {
  id: "bulbospongiosus",
  name: { zh: "球海绵体肌", latin: "Musculus bulbospongiosus" },
  category: "trunk",
  view: ["back"],
  svgPath: {
    "back": "M185,105 Q200,100 215,105 L215,125 Q200,130 185,125 Z"
  },
  origin: "会阴中心腱/尿道球部中线隔",
  insertion: "阴茎筋膜/阴蒂脚/对侧肌",
  innervation: "阴部神经 (S2-S4)",
  bloodSupply: "阴部内动脉",
  primaryActions: ["尿道排空（排尿/射精辅助）", "阴道口压迫", "勃起辅助"],
  secondaryActions: ["性功能核心"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_sacral_plexus",
      position: "middle",
      upstream: ["coccygeus", "compressor-urethrae"],
      downstream: ["external-anal-sphincter", "external-urethral-sphincter"],
    },
    {
      chainId: "segment_synergy_S2",
      position: "middle",
      upstream: ["compressor-urethrae"],
      downstream: ["external-anal-sphincter"],
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
