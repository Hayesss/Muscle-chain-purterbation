import type { TreatmentTechnique } from "../types";

export const ischemic_compression_gm: TreatmentTechnique = {
  id: "ischemic_compression_gm",
  name: "缺血性压迫 - 臀中肌扳机点",
  category: "soft_tissue",
  evidenceLevel: "B",
  indications: ["臀中肌扳机点疼痛", "臀区深部痛", "单腿站立不稳"],
  contraindications: ["髋关节置换术后早期", "局部感染"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["gluteus_medius"],
  targetTriggerPoints: ["gm_tp1"],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
