import type { TreatmentTechnique } from "../types";

export const tfl_stretching: TreatmentTechnique = {
  id: "tfl_stretching",
  name: "阔筋膜张肌拉伸",
  category: "stretching",
  evidenceLevel: "B",
  indications: ["阔筋膜张肌紧张", "髂胫束综合征", "膝外侧痛"],
  contraindications: ["急性拉伤"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["tensor_fasciae_latae"],
  targetTriggerPoints: [],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
