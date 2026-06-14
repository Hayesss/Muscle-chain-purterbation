import type { TreatmentTechnique } from "../types";

export const mfr_gm: TreatmentTechnique = {
  id: "mfr_gm",
  name: "肌筋膜释放 - 臀中肌",
  category: "soft_tissue",
  evidenceLevel: "B",
  indications: ["臀中肌筋膜紧张", "臀区痛", "步态异常"],
  contraindications: ["髋关节置换术后早期", "局部感染"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["gluteus_medius"],
  targetTriggerPoints: [],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
