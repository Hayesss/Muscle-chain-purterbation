import type { MuscleEntry } from "../types";

export const serratus_posterior_inferior: MuscleEntry = {
  id: "serratus-posterior-inferior",
  name: { zh: "下后锯肌", latin: "Musculus serratus posterior inferior" },
  category: "trunk",
  view: ["back"],
  svgPath: {
    "back": "M170,40 Q200,35 230,40 L230,80 Q200,85 170,80 Z"
  },
  origin: "T11-L2棘突",
  insertion: "第9-12肋角外面",
  innervation: "肋间神经 (T9-T12)",
  bloodSupply: "肋间动脉/腰动脉",
  primaryActions: ["降肋骨（辅助呼气）"],
  secondaryActions: ["维持胸腰稳定"],
  joints: ["肋椎关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["diaphragm", "external-intercostals"],
      downstream: ["iliocostalis-thoracis", "innermost-intercostals"],
    },
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
