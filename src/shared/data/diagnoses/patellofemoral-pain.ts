import type { DiagnosisEntry } from "../types";

export const patellofemoral_pain: DiagnosisEntry = {
  id: "patellofemoral_pain",
  name: "髌股疼痛综合征",
  nameEn: "Patellofemoral Pain Syndrome",
  icd10: "M22.2",
  category: "hip-knee",
  typicalSymptoms: ["膝前痛", "上下楼梯加重", "久坐后站起痛", "蹲下跪痛", "Clarke试验阳性"],
  redFlags: ["髌骨脱位", "软骨缺损", "力线异常"],
  relatedSymptomRegions: [],
  relatedMuscles: ["quadriceps_femoris", "gluteus_medius", "tensor_fasciae_latae", "hamstrings"],
  relatedChains: ["superficial_front_line", "lateral_line", "spiral_line"],
  recommendedSpecialTests: ["clarke_test", "apprehension_test"],
  recommendedTechniques: ["quadriceps_stretching", "vastus_medialis_strengthening", "patellar_mobilization"],
  evidenceLevel: "A",
  references: [],
  decisionTreeNode: {
    question: "",
    positiveSigns: [],
    negativeSigns: [],
  },
};
