import type { MuscleEntry } from "../types";

export const orbicularis_oculi: MuscleEntry = {
  id: "orbicularis-oculi",
  name: { zh: "眼轮匝肌", latin: "Musculus orbicularis oculi" },
  category: "head-neck",
  view: ["front"],
  svgPath: {
    "front": "M180,60 Q200,55 220,60 Q220,70 200,75 Q180,70 180,60 Z"
  },
  origin: "内眦韧带、额骨鼻部、眶缘",
  insertion: "睑外侧缝、眉部皮肤",
  innervation: "面神经颞支/颧支 (VII)",
  bloodSupply: "内眦动脉、眶上动脉",
  primaryActions: ["闭眼（瞬目/用力闭眼）", "泪液引流（泪泵）"],
  secondaryActions: ["眉内侧下压（皱眉）"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_cranial_nerves",
      position: "middle",
      upstream: ["anterior-auricular", "antitragicus"],
      downstream: ["aryepiglotticus", "buccinator"],
    },
    {
      chainId: "func_synergy_eye_closure",
      position: "middle",
      upstream: ["zygomaticus-major"],
      downstream: [],
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
