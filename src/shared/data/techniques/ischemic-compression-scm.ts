import type { TreatmentTechnique } from "../types";

export const ischemic_compression_scm: TreatmentTechnique = {
  id: "ischemic_compression_scm",
  name: "缺血性压迫 - 胸锁乳突肌扳机点",
  category: "soft_tissue",
  evidenceLevel: "B",
  indications: ["胸锁乳突肌扳机点疼痛", "颈侧痛", "头晕", "耳鸣"],
  contraindications: ["颈动脉狭窄", "椎动脉供血不足", "局部感染"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["sternocleidomastoid"],
  targetTriggerPoints: ["scm_tp1"],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
