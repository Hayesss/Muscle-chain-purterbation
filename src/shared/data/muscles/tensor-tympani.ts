import type { MuscleEntry } from "../types";

export const tensor_tympani: MuscleEntry = {
  id: "tensor-tympani",
  name: { zh: "鼓膜张肌", latin: "Musculus tensor tympani" },
  category: "head-neck",
  view: ["side"],
  svgPath: {
    "side": "M215,50 Q225,48 230,55 Q225,62 215,58 Z"
  },
  origin: "咽鼓管软骨部上方（蝶骨大翼）",
  insertion: "锤骨柄上部",
  innervation: "三叉神经下颌支 (V3)",
  bloodSupply: "鼓室丛",
  primaryActions: ["牵锤骨向内（鼓膜张力）"],
  secondaryActions: ["咀嚼时阻尼骨导声", "保护内耳"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_cranial_nerves",
      position: "middle",
      upstream: ["anterior-auricular", "antitragicus"],
      downstream: ["aryepiglotticus", "buccinator"],
    },
    {
      chainId: "func_synergy_mastication",
      position: "middle",
      upstream: ["buccinator", "lateral-pterygoid"],
      downstream: ["medial-pterygoid", "mentalis"],
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
