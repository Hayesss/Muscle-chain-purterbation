import type { TreatmentTechnique } from "../types";

export const iliopsoas_stretching: TreatmentTechnique = {
  id: "iliopsoas_stretching",
  name: "髂腰肌拉伸",
  category: "stretching",
  evidenceLevel: "B",
  indications: ["髂腰肌紧张", "腰椎前凸增加", "髋撞击"],
  contraindications: ["急性拉伤", "髋关节置换术后早期"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["iliopsoas"],
  targetTriggerPoints: [],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
