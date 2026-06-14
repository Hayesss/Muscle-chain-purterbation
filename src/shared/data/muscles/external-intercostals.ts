import type { MuscleEntry } from "../types";

export const external_intercostals: MuscleEntry = {
  id: "external-intercostals",
  name: { zh: "肋间外肌", latin: "Musculi intercostales externi" },
  category: "trunk",
  view: ["front", "back"],
  svgPath: {
    "front": "M170,55 Q200,50 230,55 L230,75 Q200,80 170,75 Z",
    "back": "M190,50 Q200,48 210,50 L210,60 Q200,62 190,60 Z"
  },
  origin: "上位肋骨下缘（自肋结节至肋软骨部）",
  insertion: "下位肋骨上缘",
  innervation: "肋间神经 (T1-T11)",
  bloodSupply: "肋间动脉/胸廓内动脉",
  primaryActions: ["上提肋骨（辅助吸气）"],
  secondaryActions: ["维持胸壁稳定", "肋间隙保护"],
  joints: ["肋椎关节/胸肋关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["diaphragm", "iliocostalis-thoracis"],
      downstream: ["innermost-intercostals", "internal-intercostals"],
    },
    {
      chainId: "nerve_synergy_intercostal_nerves",
      position: "middle",
      upstream: ["innermost-intercostals", "internal-intercostals"],
      downstream: ["levatores-costarum-breves", "levatores-costarum-longi"],
    },
    {
      chainId: "func_synergy_inspiration",
      position: "middle",
      upstream: ["diaphragm", "levatores-costarum-breves"],
      downstream: ["levatores-costarum-longi", "quadratus_lumborum"],
    },
    {
      chainId: "segment_synergy_T11",
      position: "middle",
      upstream: ["innermost-intercostals"],
      downstream: ["internal-intercostals"],
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
