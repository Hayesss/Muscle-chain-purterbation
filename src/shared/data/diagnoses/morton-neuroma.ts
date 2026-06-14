import type { DiagnosisEntry } from "../types";

export const morton_neuroma: DiagnosisEntry = {
  id: "morton_neuroma",
  name: "Morton神经瘤",
  nameEn: "Morton's Neuroma",
  icd10: "G57.6",
  category: "ankle-foot",
  typicalSymptoms: ["足前掌痛", "烧灼感/麻木", "第三-四趾间隙", "Mulder征阳性"],
  redFlags: ["跗骨间关节病变", "神经鞘瘤"],
  relatedSymptomRegions: [],
  relatedMuscles: ["interossei", "lumbricals"],
  relatedChains: [],
  recommendedSpecialTests: ["mulder_sign"],
  recommendedTechniques: ["metatarsal_mobilization", "intrinsic_strengthening", "footwear_modification"],
  evidenceLevel: "C",
  references: [],
  decisionTreeNode: {
    question: "",
    positiveSigns: [],
    negativeSigns: [],
  },
};
