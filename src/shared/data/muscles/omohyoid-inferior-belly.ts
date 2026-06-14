import type { MuscleEntry } from "../types";

export const omohyoid_inferior_belly: MuscleEntry = {
  id: "omohyoid-inferior-belly",
  name: { zh: "肩胛舌骨肌下腹", latin: "Venter inferior musculi omohyoidei" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M192,62 Q200,58 208,62 L208,75 Q200,78 192,75 Z"
  },
  origin: "肩胛骨上缘/肩胛横韧带",
  insertion: "中间腱（颈动脉鞘前方）",
  innervation: "颈袢C1-C3 (XII)",
  bloodSupply: "肩胛上动脉",
  primaryActions: ["下拉舌骨", "颈静脉张力调节"],
  secondaryActions: ["稳定舌骨"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_cervical_plexus",
      position: "middle",
      upstream: ["geniohyoid", "longus-capitis"],
      downstream: ["obliquus-capitis-inferior", "obliquus-capitis-superior"],
    },
    {
      chainId: "nerve_synergy_cranial_nerves",
      position: "middle",
      upstream: ["anterior-auricular", "antitragicus"],
      downstream: ["aryepiglotticus", "buccinator"],
    },
    {
      chainId: "segment_synergy_C1_C3",
      position: "middle",
      upstream: ["longus-capitis"],
      downstream: ["omohyoid-superior-belly"],
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
