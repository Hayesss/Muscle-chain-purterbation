import type { MuscleEntry } from "../types";

export const levatores_costarum_longi: MuscleEntry = {
  id: "levatores-costarum-longi",
  name: { zh: "提肋肌长肌", latin: "Musculi levatores costarum longi" },
  category: "trunk",
  view: ["back"],
  svgPath: {
    "back": "M190,50 Q200,48 210,50 L210,60 Q200,62 190,60 Z"
  },
  origin: "C7-T11横突尖",
  insertion: "下位第2肋结节与肋角",
  innervation: "肋间神经/脊神经后支",
  bloodSupply: "颈横动脉/肋间动脉",
  primaryActions: ["上提肋骨（辅助吸气）", "脊柱侧屈/旋转"],
  secondaryActions: ["维持胸壁稳定"],
  joints: ["肋椎关节/肋横突关节"],
    chains: [
    {
      chainId: "nerve_synergy_dorsal_rami",
      position: "middle",
      upstream: ["erector_spinae", "iliocostalis-lumborum"],
      downstream: ["iliocostalis-thoracis", "interspinales-lumborum"],
    },
    {
      chainId: "nerve_synergy_intercostal_nerves",
      position: "middle",
      upstream: ["external-intercostals", "innermost-intercostals"],
      downstream: ["internal-intercostals", "levatores-costarum-breves"],
    },
    {
      chainId: "func_synergy_spinal_lateral_flexion",
      position: "middle",
      upstream: ["erector_spinae", "iliocostalis-lumborum"],
      downstream: ["iliocostalis-thoracis", "levatores-costarum-breves"],
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
