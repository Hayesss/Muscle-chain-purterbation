import type { TreatmentTechnique } from "../types";

export const eccentric_strengthening_rc: TreatmentTechnique = {
  id: "eccentric_strengthening_rc",
  name: "肩袖离心强化训练",
  category: "neurodynamic",
  evidenceLevel: "A",
  indications: ["肩袖肌腱病", "肩峰下撞击"],
  contraindications: ["急性肩袖撕裂", "急性炎症"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["supraspinatus", "infraspinatus", "subscapularis"],
  targetTriggerPoints: [],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
