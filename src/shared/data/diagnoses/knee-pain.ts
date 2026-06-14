import type { DiagnosisEntry } from "../types";

export const knee_pain: DiagnosisEntry = {
  id: "knee_pain",
  name: "膝前痛",
  nameEn: "Anterior Knee Pain",
  icd10: "M25.5",
  category: "hip-knee",
  typicalSymptoms: ["膝前区弥漫痛", "活动后加重", "定位不清", "多因素叠加"],
  redFlags: ["感染", "肿瘤", "炎症性关节炎"],
  relatedSymptomRegions: [],
  relatedMuscles: ["quadriceps_femoris", "patellar_tendon", "tensor_fasciae_latae"],
  relatedChains: ["superficial_front_line", "lateral_line"],
  recommendedSpecialTests: ["clarke_test", "singlesquat_test"],
  recommendedTechniques: ["quadriceps_stretching", "hip_strengthening"],
  evidenceLevel: "B",
  references: [],
  decisionTreeNode: {
    question: "",
    positiveSigns: [],
    negativeSigns: [],
  },
};
