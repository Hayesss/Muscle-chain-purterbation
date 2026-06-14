import type { MuscleEntry } from "../types";

export const external_anal_sphincter: MuscleEntry = {
  id: "external-anal-sphincter",
  name: { zh: "肛门外括约肌", latin: "Musculus sphincter ani externus" },
  category: "trunk",
  view: ["back"],
  svgPath: {
    "back": "M185,105 Q200,100 215,105 L215,125 Q200,130 185,125 Z"
  },
  origin: "肛尾韧带/会阴中心腱/肛管皮肤",
  insertion: "肛管皮肤/会阴中心腱",
  innervation: "阴部神经 (S2-S4)",
  bloodSupply: "肛动脉/会阴动脉",
  primaryActions: ["肛门闭合（随意控制）"],
  secondaryActions: ["协助排便控制", "性感觉"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_sacral_plexus",
      position: "middle",
      upstream: ["bulbospongiosus", "coccygeus"],
      downstream: ["compressor-urethrae", "external-urethral-sphincter"],
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
