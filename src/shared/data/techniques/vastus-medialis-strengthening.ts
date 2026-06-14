import type { TreatmentTechnique } from "../types";

export const vastus_medialis_strengthening: TreatmentTechnique = {
  id: "vastus_medialis_strengthening",
  name: "股内侧肌强化训练",
  category: "neurodynamic",
  evidenceLevel: "B",
  indications: ["髌股疼痛", "髌骨轨迹异常", "膝前痛"],
  contraindications: ["急性髌腱断裂"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["vastus_medialis"],
  targetTriggerPoints: [],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
