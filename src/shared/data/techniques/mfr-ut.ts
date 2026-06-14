import type { TreatmentTechnique } from "../types";

export const mfr_ut: TreatmentTechnique = {
  id: "mfr_ut",
  name: "肌筋膜释放 - 上斜方肌",
  category: "soft_tissue",
  evidenceLevel: "C",
  indications: ["上斜方肌筋膜紧张", "颈肩活动受限"],
  contraindications: ["急性损伤", "局部感染"],
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
