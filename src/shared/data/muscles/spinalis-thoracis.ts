import type { MuscleEntry } from "../types";

export const spinalis_thoracis: MuscleEntry = {
  id: "spinalis-thoracis",
  name: { zh: "胸棘肌", latin: "Musculus spinalis thoracis" },
  category: "trunk",
  view: ["back"],
  svgPath: {
    "back": "M185,45 Q200,40 215,45 L215,110 Q200,115 185,110 Z"
  },
  origin: "T10-L2棘突",
  insertion: "上位胸椎棘突",
  innervation: "脊神经后支 (T1-T12)",
  bloodSupply: "肋间动脉/腰动脉",
  primaryActions: ["脊柱后伸", "胸椎稳定"],
  secondaryActions: ["辅助脊柱微调"],
  joints: ["胸椎"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["diaphragm", "external-intercostals"],
      downstream: ["iliocostalis-thoracis", "innermost-intercostals"],
    },
    {
      chainId: "nerve_synergy_dorsal_rami",
      position: "middle",
      upstream: ["erector_spinae", "iliocostalis-lumborum"],
      downstream: ["iliocostalis-thoracis", "interspinales-lumborum"],
    },
    {
      chainId: "func_synergy_spinal_extension",
      position: "middle",
      upstream: ["erector_spinae", "iliocostalis-lumborum"],
      downstream: ["iliocostalis-thoracis", "longissimus-thoracis"],
    },
    {
      chainId: "segment_synergy_T1_T12",
      position: "middle",
      upstream: ["iliocostalis-thoracis"],
      downstream: ["semispinalis-thoracis"],
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
