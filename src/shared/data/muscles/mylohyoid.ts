import type { MuscleEntry } from "../types";

export const mylohyoid: MuscleEntry = {
  id: "mylohyoid",
  name: { zh: "下颌舌骨肌", latin: "Musculus mylohyoideus" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M195,72 Q200,68 205,72 L205,80 Q200,82 195,80 Z"
  },
  origin: "下颌骨下颌舌骨线",
  insertion: "舌骨体/正中纤维缝（下颌舌骨缝）",
  innervation: "三叉神经下颌支 (V3)",
  bloodSupply: "颌下动脉",
  primaryActions: ["上提舌骨", "口腔底上抬（吞咽）", "降下颌骨"],
  secondaryActions: ["辅助发音", "维持口腔底"],
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
