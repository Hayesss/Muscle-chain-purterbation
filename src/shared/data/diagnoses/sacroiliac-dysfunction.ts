import type { DiagnosisEntry } from "../types";

export const sacroiliac_dysfunction: DiagnosisEntry = {
  id: "sacroiliac_dysfunction",
  name: "骶髂关节功能障碍",
  nameEn: "Sacroiliac Joint Dysfunction",
  icd10: "M53.3",
  category: "hip-knee",
  typicalSymptoms: ["臀区/骶区痛", "单腿站立加重", "翻身困难", "Stork试验阳性"],
  redFlags: ["强直性脊柱炎", "感染", "骨折"],
  relatedSymptomRegions: [],
  relatedMuscles: ["gluteus_medius", "piriformis", "quadratus_lumborum", "iliopsoas"],
  relatedChains: ["superficial_back_line", "spiral_line", "lateral_line"],
  recommendedSpecialTests: ["stork_test", "gaenslen_test", "faber_test"],
  recommendedTechniques: ["sij_mobilization", "core_stabilization", "gluteus_medius_strengthening"],
  evidenceLevel: "B",
  references: [],
  decisionTreeNode: {
    question: "",
    positiveSigns: [],
    negativeSigns: [],
  },
};
