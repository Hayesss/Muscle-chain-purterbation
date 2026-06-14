import type { MuscleEntry } from "../types";

export const stapedius: MuscleEntry = {
  id: "stapedius",
  name: { zh: "镫骨肌", latin: "Musculus stapedius" },
  category: "head-neck",
  view: ["side"],
  svgPath: {
    "side": "M215,50 Q225,48 230,55 Q225,62 215,58 Z"
  },
  origin: "鼓室后壁锥隆起内",
  insertion: "镫骨颈",
  innervation: "面神经镫骨肌支 (VII)",
  bloodSupply: "鼓室丛",
  primaryActions: ["牵镫骨向后（阻尼声强）"],
  secondaryActions: ["保护内耳免受过强刺激"],
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
