import type { TreatmentTechnique } from "../types";

export const ischemic_compression_hs: TreatmentTechnique = {
  id: "ischemic_compression_hs",
  name: "缺血性压迫 - 腘绳肌扳机点",
  category: "soft_tissue",
  evidenceLevel: "B",
  indications: ["腘绳肌扳机点疼痛", "大腿后侧拉伤感", "前屈受限"],
  contraindications: ["腘绳肌急性拉伤", "坐骨结节撕脱骨折"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["hamstrings"],
  targetTriggerPoints: ["hs_tp1"],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
