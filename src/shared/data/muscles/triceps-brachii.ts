import type { MuscleEntry } from "../types";

export const triceps_brachii: MuscleEntry = {
  id: "triceps-brachii",
  name: { zh: "肱三头肌", latin: "Musculus triceps brachii" },
  category: "upper-limb",
  view: ["back"],
  svgPath: {
    "back": "M180,55 Q200,50 220,55 L220,85 Q200,90 180,85 Z"
  },
  origin: "长头：肩胛骨盂下结节；内侧头：肱骨后面桡神经沟以下；外侧头：肱骨后面桡神经沟以上",
  insertion: "尺骨鹰嘴",
  innervation: "桡神经 (C6-C8)",
  bloodSupply: "肱深动脉/尺侧上副动脉",
  primaryActions: ["肘关节伸展", "肩关节后伸/内收（长头）"],
  secondaryActions: ["推物功能"],
  joints: ["肘关节", "肩关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["abductor-digiti-minimi", "abductor-pollicis-brevis"],
      downstream: ["abductor-pollicis-longus", "adductor-pollicis"],
    },
    {
      chainId: "func_synergy_spinal_extension",
      position: "middle",
      upstream: ["adductor-magnus", "biceps_femoris"],
      downstream: ["erector_spinae", "gluteus-maximus"],
    },
    {
      chainId: "segment_synergy_C6_C8",
      position: "middle",
      upstream: ["extensor-digitorum"],
      downstream: ["wrist_extensors"],
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
