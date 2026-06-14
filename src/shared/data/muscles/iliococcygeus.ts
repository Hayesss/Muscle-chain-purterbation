import type { MuscleEntry } from "../types";

export const iliococcygeus: MuscleEntry = {
  id: "iliococcygeus",
  name: { zh: "髂尾肌", latin: "Musculus iliococcygeus" },
  category: "trunk",
  view: ["back"],
  svgPath: {
    "back": "M185,105 Q200,100 215,105 L215,125 Q200,130 185,125 Z"
  },
  origin: "坐骨棘/肛提肌腱弓（闭孔内筋膜）",
  insertion: "尾骨尖/肛尾韧带/对侧肌",
  innervation: "阴部神经 (S2-S4)",
  bloodSupply: "髂内动脉/臀下动脉",
  primaryActions: ["盆底支撑", "提肛", "协助排便控制"],
  secondaryActions: ["性功能辅助", "分娩辅助"],
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
