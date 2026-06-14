import type { MuscleEntry } from "../types";

export const pyramidalis: MuscleEntry = {
  id: "pyramidalis",
  name: { zh: "锥状肌", latin: "Musculus pyramidalis" },
  category: "trunk",
  view: ["front"],
  svgPath: {
    "front": "M185,80 Q200,75 215,80 L215,120 Q200,125 185,120 Z"
  },
  origin: "耻骨联合前面",
  insertion: "腹白线（脐以下）",
  innervation: "肋下神经 (T12)",
  bloodSupply: "腹壁下动脉",
  primaryActions: ["腹白线紧张"],
  secondaryActions: ["功能有限/变异肌"],
  joints: ["无特定关节"],
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
      chainId: "segment_synergy_T12",
      position: "middle",
      upstream: ["iliocostalis-thoracis"],
      downstream: ["obliquus_externus"],
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
