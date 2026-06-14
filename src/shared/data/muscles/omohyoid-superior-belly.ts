import type { MuscleEntry } from "../types";

export const omohyoid_superior_belly: MuscleEntry = {
  id: "omohyoid-superior-belly",
  name: { zh: "肩胛舌骨肌上腹", latin: "Venter superior musculi omohyoidei" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M192,62 Q200,58 208,62 L208,75 Q200,78 192,75 Z"
  },
  origin: "中间腱（颈动脉鞘前方）",
  insertion: "舌骨体下缘",
  innervation: "颈袢C1-C3 (XII)",
  bloodSupply: "甲状腺上动脉",
  primaryActions: ["降舌骨", "下拉舌骨"],
  secondaryActions: ["稳定舌骨", "辅助深呼吸"],
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
      downstream: ["omohyoid-inferior-belly"],
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
