import type { TreatmentTechnique } from "../types";

export const eccentric_calf_training: TreatmentTechnique = {
  id: "eccentric_calf_training",
  name: "小腿离心强化训练",
  category: "neurodynamic",
  evidenceLevel: "A",
  indications: ["跟腱病", "腓肠肌无力"],
  contraindications: ["急性跟腱断裂", "急性腓肠肌拉伤"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["gastrocnemius", "soleus"],
  targetTriggerPoints: [],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
