import type { TreatmentTechnique } from "../types";

export const ischemic_compression_qf: TreatmentTechnique = {
  id: "ischemic_compression_qf",
  name: "缺血性压迫 - 股四头肌扳机点",
  category: "soft_tissue",
  evidenceLevel: "B",
  indications: ["股四头肌扳机点疼痛", "膝前痛", "蹲起痛"],
  contraindications: ["髌骨急性损伤", "局部感染"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["quadriceps_femoris"],
  targetTriggerPoints: ["qf_tp1"],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
