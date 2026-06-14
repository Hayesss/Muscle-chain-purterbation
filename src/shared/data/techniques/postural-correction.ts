import type { TreatmentTechnique } from "../types";

export const postural_correction: TreatmentTechnique = {
  id: "postural_correction",
  name: "姿势矫正训练",
  category: "neurodynamic",
  evidenceLevel: "C",
  indications: ["上交叉综合征", "颈前伸", "圆肩"],
  contraindications: ["急性脊柱骨折"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["upper_trapezius", "sternocleidomastoid", "rhomboids", "deep_neck_flexors"],
  targetTriggerPoints: [],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
