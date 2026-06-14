import type { MuscleEntry } from "../types";

export const sternalis: MuscleEntry = {
  id: "sternalis",
  name: { zh: "胸骨肌", latin: "Musculus sternalis" },
  category: "trunk",
  view: ["front"],
  svgPath: {
    "front": "M170,50 Q200,45 230,50 L230,80 Q200,85 170,80 Z"
  },
  origin: "胸骨柄/胸骨体",
  insertion: "腹直肌鞘/肋软骨",
  innervation: "胸前神经 (T1-T6)",
  bloodSupply: "胸廓内动脉",
  primaryActions: ["胸壁皮肤紧张"],
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
      chainId: "segment_synergy_T6",
      position: "middle",
      upstream: ["rectus_abdominis"],
      downstream: ["transversus-thoracis"],
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
