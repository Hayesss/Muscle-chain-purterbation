import type { MuscleEntry } from "../types";

export const iliocostalis_thoracis: MuscleEntry = {
  id: "iliocostalis-thoracis",
  name: { zh: "胸髂肋肌", latin: "Musculus iliocostalis thoracis" },
  category: "trunk",
  view: ["back"],
  svgPath: {
    "back": "M185,45 Q200,40 215,45 L215,110 Q200,115 185,110 Z"
  },
  origin: "下6肋角",
  insertion: "上6肋角/C7横突",
  innervation: "脊神经后支 (T1-T12)",
  bloodSupply: "肋间动脉/颈深动脉",
  primaryActions: ["脊柱后伸", "脊柱同侧屈", "肋运动辅助"],
  secondaryActions: ["胸椎稳定"],
  joints: ["胸椎"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["diaphragm", "external-intercostals"],
      downstream: ["innermost-intercostals", "internal-intercostals"],
    },
    {
      chainId: "nerve_synergy_dorsal_rami",
      position: "middle",
      upstream: ["erector_spinae", "iliocostalis-lumborum"],
      downstream: ["interspinales-lumborum", "interspinales-thoracis"],
    },
    {
      chainId: "func_synergy_spinal_extension",
      position: "middle",
      upstream: ["erector_spinae", "iliocostalis-lumborum"],
      downstream: ["longissimus-thoracis", "multifidus"],
    },
    {
      chainId: "segment_synergy_T1_T12",
      position: "middle",
      upstream: ["semispinalis-thoracis"],
      downstream: ["spinalis-thoracis"],
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
