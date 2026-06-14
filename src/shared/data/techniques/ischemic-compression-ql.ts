import type { TreatmentTechnique } from "../types";

export const ischemic_compression_ql: TreatmentTechnique = {
  id: "ischemic_compression_ql",
  name: "缺血性压迫 - 腰方肌扳机点",
  category: "soft_tissue",
  evidenceLevel: "B",
  indications: ["腰方肌扳机点疼痛", "单侧腰痛", "深呼吸痛"],
  contraindications: ["腰椎骨折", "肾结石", "腹主动脉瘤"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["quadratus_lumborum"],
  targetTriggerPoints: ["ql_tp1"],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
