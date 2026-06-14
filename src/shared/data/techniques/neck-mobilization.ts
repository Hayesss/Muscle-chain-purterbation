import type { TreatmentTechnique } from "../types";

export const neck_mobilization: TreatmentTechnique = {
  id: "neck_mobilization",
  name: "颈椎松动术",
  category: "joint_mobilization",
  evidenceLevel: "B",
  indications: ["颈椎活动受限", "颈型颈椎病", "颈痛"],
  contraindications: ["椎动脉供血不足", "颈椎不稳", "骨折"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: [],
  targetTriggerPoints: [],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
