import type { TreatmentTechnique } from "../types";

export const ischemic_compression_ra: TreatmentTechnique = {
  id: "ischemic_compression_ra",
  name: "缺血性压迫 - 腹直肌扳机点",
  category: "soft_tissue",
  evidenceLevel: "C",
  indications: ["腹直肌扳机点疼痛", "下背痛", "核心无力"],
  contraindications: ["腹直肌分离", "腹部疝", "妊娠"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["rectus_abdominis"],
  targetTriggerPoints: ["ra_tp1"],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
