import type { MuscleEntry } from "../types";

export const obliquus_capitis_superior: MuscleEntry = {
  id: "obliquus-capitis-superior",
  name: { zh: "头上斜肌", latin: "Musculus obliquus capitis superior" },
  category: "head-neck",
  view: ["back"],
  svgPath: {
    "back": "M185,35 Q200,30 215,35 L215,48 Q200,46 185,48 Z"
  },
  origin: "C1横突上面",
  insertion: "枕骨下项线与枕骨大孔之间",
  innervation: "枕下神经 (C1)后支",
  bloodSupply: "枕动脉/椎动脉",
  primaryActions: ["头后伸", "头侧屈"],
  secondaryActions: ["寰枕关节稳定"],
  joints: ["寰枕关节"],
    chains: [
    {
      chainId: "nerve_synergy_cervical_plexus",
      position: "middle",
      upstream: ["geniohyoid", "longus-capitis"],
      downstream: ["obliquus-capitis-inferior", "omohyoid-inferior-belly"],
    },
    {
      chainId: "nerve_synergy_dorsal_rami",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "interspinales-cervicis"],
      downstream: ["intertransversarii-cervicis", "longissimus-capitis"],
    },
    {
      chainId: "func_synergy_spinal_extension",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "interspinales-cervicis"],
      downstream: ["levator_scapulae", "longissimus-capitis"],
    },
    {
      chainId: "segment_synergy_C1",
      position: "middle",
      upstream: ["geniohyoid"],
      downstream: ["longus-capitis"],
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
