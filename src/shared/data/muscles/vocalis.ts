import type { MuscleEntry } from "../types";

export const vocalis: MuscleEntry = {
  id: "vocalis",
  name: { zh: "声带肌", latin: "Musculus vocalis" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M188,68 Q200,62 212,68 L212,78 Q200,82 188,78 Z"
  },
  origin: "甲杓肌深面（甲状软骨前角后面）",
  insertion: "声带韧带/杓状软骨声带突",
  innervation: "喉返神经 (X)",
  bloodSupply: "甲状腺上动脉",
  primaryActions: ["声带紧张/厚度调节（音调精细调节）"],
  secondaryActions: ["发声核心"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_cranial_nerves",
      position: "middle",
      upstream: ["anterior-auricular", "antitragicus"],
      downstream: ["aryepiglotticus", "buccinator"],
    },
    {
      chainId: "func_synergy_phonation",
      position: "middle",
      upstream: ["genioglossus", "geniohyoid"],
      downstream: ["inferior-longitudinal-tongue", "inferior-pharyngeal-constrictor"],
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
