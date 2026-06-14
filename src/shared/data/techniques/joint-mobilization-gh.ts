import type { TreatmentTechnique } from "../types";

export const joint_mobilization_gh: TreatmentTechnique = {
  id: "joint_mobilization_gh",
  name: "盂肱关节松动术（Maitland III级）",
  category: "joint_mobilization",
  evidenceLevel: "A",
  indications: ["盂肱关节活动受限", "冻结肩", "肩峰下撞击"],
  contraindications: ["关节不稳定", "急性炎症", "骨折"],
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
