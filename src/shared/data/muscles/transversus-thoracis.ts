import type { MuscleEntry } from "../types";

export const transversus_thoracis: MuscleEntry = {
  id: "transversus-thoracis",
  name: { zh: "胸横肌", latin: "Musculus transversus thoracis" },
  category: "trunk",
  view: ["front"],
  svgPath: {
    "front": "M170,55 Q200,50 230,55 L230,75 Q200,80 170,75 Z"
  },
  origin: "胸骨体下部/剑突",
  insertion: "第2-6肋软骨内面",
  innervation: "肋间神经 (T2-T6)",
  bloodSupply: "胸廓内动脉",
  primaryActions: ["降肋软骨（辅助呼气）"],
  secondaryActions: ["稳定胸骨-肋软骨"],
  joints: ["胸肋关节"],
    chains: [
    {
      chainId: "nerve_synergy_intercostal_nerves",
      position: "middle",
      upstream: ["external-intercostals", "innermost-intercostals"],
      downstream: ["internal-intercostals", "levatores-costarum-breves"],
    },
    {
      chainId: "func_synergy_expiration",
      position: "middle",
      upstream: ["iliocostalis-lumborum", "innermost-intercostals"],
      downstream: ["internal-intercostals", "obliquus_externus"],
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
