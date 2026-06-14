import type { TreatmentTechnique } from "../types";

export const proprioception_training: TreatmentTechnique = {
  id: "proprioception_training",
  name: "本体感觉训练",
  category: "neurodynamic",
  evidenceLevel: "B",
  indications: ["肩不稳", "踝关节反复扭伤", "平衡障碍"],
  contraindications: ["急性损伤"],
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
