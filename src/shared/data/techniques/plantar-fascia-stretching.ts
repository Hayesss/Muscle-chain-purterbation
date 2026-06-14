import type { TreatmentTechnique } from "../types";

export const plantar_fascia_stretching: TreatmentTechnique = {
  id: "plantar_fascia_stretching",
  name: "足底筋膜拉伸",
  category: "stretching",
  evidenceLevel: "A",
  indications: ["足底筋膜炎", "晨起足跟痛"],
  contraindications: ["急性足底筋膜撕裂", "应力骨折"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["plantar_fascia"],
  targetTriggerPoints: [],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
