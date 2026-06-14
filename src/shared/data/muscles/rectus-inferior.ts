import type { MuscleEntry } from "../types";

export const rectus_inferior: MuscleEntry = {
  id: "rectus-inferior",
  name: { zh: "下直肌", latin: "Musculus rectus inferior" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M180,60 Q200,55 220,60 Q220,70 200,75 Q180,70 180,60 Z"
  },
  origin: "视神经管周围总腱环",
  insertion: "眼球巩膜下部",
  innervation: "动眼神经 (III)",
  bloodSupply: "眼动脉肌支",
  primaryActions: ["眼球下转", "内收", "外旋"],
  secondaryActions: ["维持眼球前位"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_oculomotor_group",
      position: "middle",
      upstream: ["levator-palpebrae-superioris", "obliquus-inferior-bulbi"],
      downstream: ["obliquus-superior-bulbi", "rectus-lateralis"],
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
