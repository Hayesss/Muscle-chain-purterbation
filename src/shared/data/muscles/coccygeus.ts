import type { MuscleEntry } from "../types";

export const coccygeus: MuscleEntry = {
  id: "coccygeus",
  name: { zh: "尾骨肌", latin: "Musculus coccygeus" },
  category: "trunk",
  view: ["back"],
  svgPath: {
    "back": "M185,105 Q200,100 215,105 L215,125 Q200,130 185,125 Z"
  },
  origin: "坐骨棘/骶棘韧带",
  insertion: "尾骨侧缘/骶骨下端",
  innervation: "阴部神经 (S4-S5)",
  bloodSupply: "髂内动脉",
  primaryActions: ["盆底后部支撑", "尾骨稳定"],
  secondaryActions: ["协助排便控制"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_sacral_plexus",
      position: "middle",
      upstream: ["bulbospongiosus", "compressor-urethrae"],
      downstream: ["external-anal-sphincter", "external-urethral-sphincter"],
    },
    {
      chainId: "segment_synergy_S4",
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
