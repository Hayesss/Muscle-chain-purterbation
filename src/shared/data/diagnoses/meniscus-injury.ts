import type { DiagnosisEntry } from "../types";

export const meniscus_injury: DiagnosisEntry = {
  id: "meniscus_injury",
  name: "半月板损伤",
  nameEn: "Meniscus Injury",
  icd10: "S83.2",
  category: "hip-knee",
  typicalSymptoms: ["膝痛伴卡压感", "关节间隙压痛", "McMurray试验阳性", "Apley研磨试验阳性"],
  redFlags: ["交锁", "关节积液", "急性外伤"],
  relatedSymptomRegions: [],
  relatedMuscles: ["quadriceps_femoris", "hamstrings", "gastrocnemius"],
  relatedChains: ["superficial_back_line", "superficial_front_line"],
  recommendedSpecialTests: ["mcmurray_test", "apley_test", " Thessaly_test"],
  recommendedTechniques: ["joint_mobilization_knee", "quadriceps_strengthening"],
  evidenceLevel: "A",
  references: [],
  decisionTreeNode: {
    question: "",
    positiveSigns: [],
    negativeSigns: [],
  },
};
