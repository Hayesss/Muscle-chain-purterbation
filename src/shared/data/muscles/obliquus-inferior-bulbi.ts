import type { MuscleEntry } from "../types";

export const obliquus_inferior_bulbi: MuscleEntry = {
  id: "obliquus-inferior-bulbi",
  name: { zh: "下斜肌", latin: "Musculus obliquus inferior" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M180,60 Q200,55 220,60 Q220,70 200,75 Q180,70 180,60 Z"
  },
  origin: "眶底壁内侧（泪骨/上颌骨）",
  insertion: "眼球后外方巩膜",
  innervation: "动眼神经 (III)",
  bloodSupply: "眼动脉肌支",
  primaryActions: ["眼球上转", "外展", "外旋"],
  secondaryActions: ["维持眼球前位"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_oculomotor_group",
      position: "middle",
      upstream: ["levator-palpebrae-superioris", "obliquus-superior-bulbi"],
      downstream: ["rectus-inferior", "rectus-lateralis"],
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
