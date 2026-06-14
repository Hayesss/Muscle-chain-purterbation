import type { TreatmentTechnique } from "../types";

export const ischemic_compression_ip: TreatmentTechnique = {
  id: "ischemic_compression_ip",
  name: "缺血性压迫 - 髂腰肌扳机点",
  category: "soft_tissue",
  evidenceLevel: "C",
  indications: ["髂腰肌扳机点疼痛", "腹股沟区痛", "屈髋受限"],
  contraindications: ["腹主动脉瘤", "髂腰肌脓肿", "髋关节置换术后早期"],
  steps: [
    { order: 1, description: "定位目标区域/肌肉", keyPoints: ["触诊紧张带或扳机点"], cautionPoints: [] },
    { order: 2, description: "实施手法/训练", keyPoints: ["渐进压力/负荷", "控制速度"], cautionPoints: ["避免过度疼痛", "观察患者反应"] },
  ],
  visualization: {
    baseSvg: "back",
    animationSequence: [],
    cameraViews: ["back"],
  },
  targetMuscles: ["iliopsoas"],
  targetTriggerPoints: ["ip_tp1"],
  targetJoints: [],
  relatedDiagnoses: [],
  relatedResearch: [],
};
