import type { DiagnosisEntry } from "../types";

export const frozen_shoulder: DiagnosisEntry = {
  id: "frozen_shoulder",
  name: "冻结肩",
  nameEn: "Frozen Shoulder (Adhesive Capsulitis)",
  icd10: "M75.0",
  category: "shoulder",
  typicalSymptoms: ["肩痛渐加重", "主动+被动活动受限", "外旋明显受限", "夜间痛"],
  redFlags: ["创伤后急性", "多方向不稳", "全身症状"],
  relatedSymptomRegions: [],
  relatedMuscles: ["supraspinatus", "infraspinatus", "subscapularis", "deltoid_anterior", "deltoid_middle", "deltoid_posterior"],
  relatedChains: ["superficial_back_line", "spiral_line"],
  recommendedSpecialTests: ["empty_can_test", "hawkins_test"],
  recommendedTechniques: ["joint_mobilization_gh", "stretching_posterior_capsule"],
  evidenceLevel: "B",
  references: [],
  decisionTreeNode: {
    question: "",
    positiveSigns: [],
    negativeSigns: [],
  },
};
