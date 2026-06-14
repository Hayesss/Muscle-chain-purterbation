import type { TreatmentTechnique } from "../types";

export const ischemic_compression_ta: TreatmentTechnique = {
  id: "ischemic_compression_ta",
  name: "缺血性压迫 - 胫骨前肌扳机点",
  category: "soft_tissue",
  evidenceLevel: "C",
  indications: ["胫骨前肌扳机点疼痛", "小腿前侧酸痛", "足背麻木"],
  contraindications: ["胫前筋膜室综合征", "局部感染"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["tibialis_anterior"],
  targetTriggerPoints: ["ta_tp1"],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
