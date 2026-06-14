import type { MuscleEntry } from "../types";

export const iliocostalis_lumborum: MuscleEntry = {
  id: "iliocostalis-lumborum",
  name: { zh: "腰髂肋肌", latin: "Musculus iliocostalis lumborum" },
  category: "trunk",
  view: ["back"],
  svgPath: {
    "back": "M185,45 Q200,40 215,45 L215,110 Q200,115 185,110 Z"
  },
  origin: "骶骨/髂嵴/腰椎棘突",
  insertion: "下6-7肋角",
  innervation: "脊神经后支 (L1-L3)",
  bloodSupply: "腰动脉/骶外侧动脉",
  primaryActions: ["脊柱后伸", "脊柱同侧屈", "降肋（辅助呼气）"],
  secondaryActions: ["腰椎稳定"],
  joints: ["腰椎"],
    chains: [
    {
      chainId: "nerve_synergy_dorsal_rami",
      position: "middle",
      upstream: ["erector_spinae", "iliocostalis-thoracis"],
      downstream: ["interspinales-lumborum", "interspinales-thoracis"],
    },
    {
      chainId: "func_synergy_spinal_extension",
      position: "middle",
      upstream: ["erector_spinae", "iliocostalis-thoracis"],
      downstream: ["longissimus-thoracis", "multifidus"],
    },
    {
      chainId: "segment_synergy_L1_L3",
      position: "middle",
      upstream: ["iliopsoas"],
      downstream: ["psoas-major"],
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
