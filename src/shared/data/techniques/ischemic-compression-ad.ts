import type { TreatmentTechnique } from "../types";

export const ischemic_compression_ad: TreatmentTechnique = {
  id: "ischemic_compression_ad",
  name: "缺血性压迫 - 内收肌群扳机点",
  category: "soft_tissue",
  evidenceLevel: "C",
  indications: ["内收肌群扳机点疼痛", "大腿内侧痛", "内收无力"],
  contraindications: ["内收肌急性拉伤", "局部感染"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["adductors"],
  targetTriggerPoints: ["ad_tp1"],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
