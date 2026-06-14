import type { MuscleEntry } from "../types";

export const genioglossus: MuscleEntry = {
  id: "genioglossus",
  name: { zh: "颏舌肌", latin: "Musculus genioglossus" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M195,82 Q200,78 205,82 L205,90 Q200,92 195,90 Z"
  },
  origin: "下颌骨颏棘",
  insertion: "舌体及舌根（呈扇形展开）",
  innervation: "舌下神经 (XII)",
  bloodSupply: "舌动脉",
  primaryActions: ["舌前伸", "舌下降", "协助吞咽"],
  secondaryActions: ["发音辅助", "呼吸辅助"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_cranial_nerves",
      position: "middle",
      upstream: ["anterior-auricular", "antitragicus"],
      downstream: ["aryepiglotticus", "buccinator"],
    },
    {
      chainId: "func_synergy_deglutition",
      position: "middle",
      upstream: ["aryepiglotticus", "buccinator"],
      downstream: ["chondroglossus", "digastric-anterior-belly"],
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
