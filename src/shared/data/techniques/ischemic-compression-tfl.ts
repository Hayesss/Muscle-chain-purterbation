import type { TreatmentTechnique } from "../types";

export const ischemic_compression_tfl: TreatmentTechnique = {
  id: "ischemic_compression_tfl",
  name: "缺血性压迫 - 阔筋膜张肌扳机点",
  category: "soft_tissue",
  evidenceLevel: "B",
  indications: ["阔筋膜张肌扳机点疼痛", "大腿外侧痛", "膝外侧痛"],
  contraindications: ["髂前上棘撕脱骨折", "局部感染"],
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
  targetTriggerPoints: ["tfl_tp1"],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
