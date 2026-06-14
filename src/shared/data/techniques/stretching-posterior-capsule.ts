import type { TreatmentTechnique } from "../types";

export const stretching_posterior_capsule: TreatmentTechnique = {
  id: "stretching_posterior_capsule",
  name: "肩关节后囊拉伸",
  category: "stretching",
  evidenceLevel: "B",
  indications: ["肩关节后囊紧张", "内旋受限", "冻结肩"],
  contraindications: ["急性肩袖撕裂", "关节不稳定"],
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
