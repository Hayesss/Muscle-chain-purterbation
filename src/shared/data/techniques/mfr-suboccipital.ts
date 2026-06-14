import type { TreatmentTechnique } from "../types";

export const mfr_suboccipital: TreatmentTechnique = {
  id: "mfr_suboccipital",
  name: "肌筋膜释放 - 枕下肌群",
  category: "soft_tissue",
  evidenceLevel: "C",
  indications: ["枕下肌群紧张", "枕区头痛", "头晕"],
  contraindications: ["椎动脉供血不足", "局部感染"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["suboccipitals"],
  targetTriggerPoints: [],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
