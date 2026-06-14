import type { TreatmentTechnique } from "../types";

export const hip_strengthening: TreatmentTechnique = {
  id: "hip_strengthening",
  name: "髋部强化训练",
  category: "neurodynamic",
  evidenceLevel: "B",
  indications: ["臀中肌无力", "膝前痛", "步态异常"],
  contraindications: ["急性髋部损伤", "髋关节置换术后早期"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["gluteus_medius", "gluteus_maximus", "tensor_fasciae_latae"],
  targetTriggerPoints: [],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
