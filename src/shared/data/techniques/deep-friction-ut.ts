import type { TreatmentTechnique } from "../types";

export const deep_friction_ut: TreatmentTechnique = {
  id: "deep_friction_ut",
  name: "深层摩擦按摩 - 上斜方肌",
  category: "soft_tissue",
  evidenceLevel: "B",
  indications: ["上斜方肌肌腱病", "慢性颈肩痛"],
  contraindications: ["急性炎症", "局部感染"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["upper_trapezius"],
  targetTriggerPoints: [],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
