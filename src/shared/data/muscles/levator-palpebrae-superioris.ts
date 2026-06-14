import type { MuscleEntry } from "../types";

export const levator_palpebrae_superioris: MuscleEntry = {
  id: "levator-palpebrae-superioris",
  name: { zh: "上睑提肌", latin: "Musculus levator palpebrae superioris" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M190,50 Q200,48 210,50 L210,60 Q200,62 190,60 Z"
  },
  origin: "蝶骨体视神经管上方",
  insertion: "上睑板及皮肤",
  innervation: "动眼神经 (III)",
  bloodSupply: "眼动脉睑支",
  primaryActions: ["提上睑（睁眼）"],
  secondaryActions: ["上睑皱褶形成"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_oculomotor_group",
      position: "middle",
      upstream: ["obliquus-inferior-bulbi", "obliquus-superior-bulbi"],
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
