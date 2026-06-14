import type { TreatmentTechnique } from "../types";

export const fibularis_strengthening: TreatmentTechnique = {
  id: "fibularis_strengthening",
  name: "腓骨肌群强化训练",
  category: "neurodynamic",
  evidenceLevel: "B",
  indications: ["踝关节反复扭伤", "腓骨肌无力", "足外翻不稳"],
  contraindications: ["急性腓骨骨折", "急性踝关节扭伤"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["fibularis"],
  targetTriggerPoints: [],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
