import type { MuscleEntry } from "../types";

export const innermost_intercostals: MuscleEntry = {
  id: "innermost-intercostals",
  name: { zh: "最内肋间肌", latin: "Musculi intercostales intimi" },
  category: "trunk",
  view: ["front", "back"],
  svgPath: {
    "front": "M170,55 Q200,50 230,55 L230,75 Q200,80 170,75 Z",
    "back": "M190,50 Q200,48 210,50 L210,60 Q200,62 190,60 Z"
  },
  origin: "肋间隙深层（与肋间内肌纤维交叉）",
  insertion: "邻近肋骨",
  innervation: "肋间神经 (T1-T11)",
  bloodSupply: "肋间动脉",
  primaryActions: ["降肋骨（辅助呼气）"],
  secondaryActions: ["维持胸壁稳定"],
  joints: ["肋椎关节/胸肋关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["diaphragm", "external-intercostals"],
      downstream: ["iliocostalis-thoracis", "internal-intercostals"],
    },
    {
      chainId: "nerve_synergy_intercostal_nerves",
      position: "middle",
      upstream: ["external-intercostals", "internal-intercostals"],
      downstream: ["levatores-costarum-breves", "levatores-costarum-longi"],
    },
    {
      chainId: "func_synergy_expiration",
      position: "middle",
      upstream: ["iliocostalis-lumborum", "internal-intercostals"],
      downstream: ["obliquus_externus", "rectus_abdominis"],
    },
    {
      chainId: "segment_synergy_T11",
      position: "middle",
      upstream: ["external-intercostals"],
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
