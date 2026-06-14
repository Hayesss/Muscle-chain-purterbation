import type { TreatmentTechnique } from "../types";

export const quadriceps_stretching: TreatmentTechnique = {
  id: "quadriceps_stretching",
  name: "股四头肌拉伸",
  category: "stretching",
  evidenceLevel: "A",
  indications: ["股四头肌紧张", "髌股疼痛", "膝前痛"],
  contraindications: ["急性髌腱断裂", "急性股四头肌拉伤"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["quadriceps_femoris"],
  targetTriggerPoints: [],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
