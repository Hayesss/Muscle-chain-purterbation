import type { MuscleEntry } from "../types";

export const geniohyoid: MuscleEntry = {
  id: "geniohyoid",
  name: { zh: "颏舌骨肌", latin: "Musculus geniohyoideus" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M195,72 Q200,68 205,72 L205,80 Q200,82 195,80 Z"
  },
  origin: "下颌骨颏棘",
  insertion: "舌骨体前部",
  innervation: "颈袢C1 (XII)",
  bloodSupply: "舌动脉",
  primaryActions: ["上提舌骨（前上方向）", "降下颌骨", "舌骨前拉"],
  secondaryActions: ["辅助吞咽", "辅助发音"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_cervical_plexus",
      position: "middle",
      upstream: ["longus-capitis", "obliquus-capitis-inferior"],
      downstream: ["obliquus-capitis-superior", "omohyoid-inferior-belly"],
    },
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
    {
      chainId: "segment_synergy_C1",
      position: "middle",
      upstream: ["longus-capitis"],
      downstream: ["obliquus-capitis-inferior"],
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
