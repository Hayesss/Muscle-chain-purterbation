import type { TreatmentTechnique } from "../types";

export const core_stabilization: TreatmentTechnique = {
  id: "core_stabilization",
  name: "核心稳定训练",
  category: "neurodynamic",
  evidenceLevel: "A",
  indications: ["下背痛", "核心不稳", "骶髂功能障碍"],
  contraindications: ["急性腰椎骨折"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["rectus_abdominis", "obliquus_externus", "multifidus", "transversus_abdominis"],
  targetTriggerPoints: [],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
