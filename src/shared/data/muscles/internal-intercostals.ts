import type { MuscleEntry } from "../types";

export const internal_intercostals: MuscleEntry = {
  id: "internal-intercostals",
  name: { zh: "肋间内肌", latin: "Musculi intercostales interni" },
  category: "trunk",
  view: ["front", "back"],
  svgPath: {
    "front": "M170,55 Q200,50 230,55 L230,75 Q200,80 170,75 Z",
    "back": "M190,50 Q200,48 210,50 L210,60 Q200,62 190,60 Z"
  },
  origin: "下位肋骨上缘（自肋角至胸骨部）",
  insertion: "上位肋骨下缘",
  innervation: "肋间神经 (T1-T11)",
  bloodSupply: "肋间动脉/胸廓内动脉",
  primaryActions: ["降肋骨（辅助呼气）"],
  secondaryActions: ["维持胸壁稳定", "肋间隙保护"],
  joints: ["肋椎关节/胸肋关节"],
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
      downstream: ["levatores-costarum-breves", "levatores-costarum-longi"],
    },
    {
      chainId: "func_synergy_expiration",
      position: "middle",
      upstream: ["iliocostalis-lumborum", "innermost-intercostals"],
      downstream: ["obliquus_externus", "rectus_abdominis"],
    },
    {
      chainId: "segment_synergy_T11",
      position: "middle",
      upstream: ["external-intercostals"],
      downstream: ["innermost-intercostals"],
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
