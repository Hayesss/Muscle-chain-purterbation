import type { DiagnosisEntry } from "../types";

export const hip_impingement: DiagnosisEntry = {
  id: "hip_impingement",
  name: "髋撞击综合征",
  nameEn: "Femoroacetabular Impingement (FAI)",
  icd10: "M25.8",
  category: "hip-knee",
  typicalSymptoms: ["髋前/腹股沟区痛", "屈曲内旋痛", "久坐后痛", "FADIR试验阳性"],
  redFlags: ["髋臼撕裂", "进行性关节退变"],
  relatedSymptomRegions: [],
  relatedMuscles: ["iliopsoas", "rectus_femoris", "adductors", "gluteus_medius"],
  relatedChains: ["superficial_front_line", "spiral_line"],
  recommendedSpecialTests: ["fadir_test", "faber_test", "impingement_test"],
  recommendedTechniques: ["hip_mobilization", "iliopsoas_stretching", "hip_strengthening"],
  evidenceLevel: "B",
  references: [],
  decisionTreeNode: {
    question: "",
    positiveSigns: [],
    negativeSigns: [],
  },
};
