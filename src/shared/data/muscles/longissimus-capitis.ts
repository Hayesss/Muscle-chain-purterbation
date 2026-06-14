import type { MuscleEntry } from "../types";

export const longissimus_capitis: MuscleEntry = {
  id: "longissimus-capitis",
  name: { zh: "头最长肌", latin: "Musculus longissimus capitis" },
  category: "head-neck",
  view: ["back"],
  svgPath: {
    "back": "M185,45 Q200,40 215,45 L215,110 Q200,115 185,110 Z"
  },
  origin: "T1-T5/C4-C7横突/关节突",
  insertion: "乳突后缘",
  innervation: "脊神经后支 (C4-T5)",
  bloodSupply: "颈深动脉/枕动脉",
  primaryActions: ["头后伸", "头同侧屈/旋转"],
  secondaryActions: ["头颈稳定"],
  joints: ["寰枕关节", "颈椎"],
    chains: [
    {
      chainId: "nerve_synergy_dorsal_rami",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "interspinales-cervicis"],
      downstream: ["intertransversarii-cervicis", "longissimus-cervicis"],
    },
    {
      chainId: "func_synergy_spinal_extension",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "interspinales-cervicis"],
      downstream: ["levator_scapulae", "longissimus-cervicis"],
    },
    {
      chainId: "segment_synergy_T5",
      position: "middle",
      upstream: ["longissimus-cervicis"],
      downstream: ["serratus-posterior-superior"],
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
