import type { TreatmentTechnique } from "../types";

export const ischemic_compression_fb: TreatmentTechnique = {
  id: "ischemic_compression_fb",
  name: "缺血性压迫 - 腓骨肌群扳机点",
  category: "soft_tissue",
  evidenceLevel: "C",
  indications: ["腓骨肌群扳机点疼痛", "小腿外侧痛", "踝关节不稳"],
  contraindications: ["腓骨骨折", "局部感染"],
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
  targetTriggerPoints: ["fb_tp1"],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
