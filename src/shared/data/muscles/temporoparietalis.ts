import type { MuscleEntry } from "../types";

export const temporoparietalis: MuscleEntry = {
  id: "temporoparietalis",
  name: { zh: "颞顶肌", latin: "Musculus temporoparietalis" },
  category: "head-neck",
  view: ["side"],
  svgPath: {
    "side": "M218,42 Q228,38 235,45 Q228,55 218,50 Z"
  },
  origin: "耳廓上方颞筋膜",
  insertion: "帽状腱膜侧缘",
  innervation: "面神经颞支 (VII)",
  bloodSupply: "颞浅动脉",
  primaryActions: ["提紧颞部头皮"],
  secondaryActions: ["辅助耳廓微动"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_cranial_nerves",
      position: "middle",
      upstream: ["anterior-auricular", "antitragicus"],
      downstream: ["aryepiglotticus", "buccinator"],
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
