import type { DiagnosisEntry } from "../types";

export const shoulder_instability: DiagnosisEntry = {
  id: "shoulder_instability",
  name: "肩不稳",
  nameEn: "Shoulder Instability",
  icd10: "M75.1",
  category: "shoulder",
  typicalSymptoms: ["肩脱位/半脱位感", "Apprehension", "多方向松弛", "投掷时失控"],
  redFlags: ["创伤性脱位", "习惯性脱位", "骨性缺损"],
  relatedSymptomRegions: [],
  relatedMuscles: ["subscapularis", "infraspinatus", "teres_minor", "deltoid_middle"],
  relatedChains: ["spiral_line"],
  recommendedSpecialTests: ["apprehension_test", "sulcus_sign"],
  recommendedTechniques: ["proprioception_training", "rotator_cuff_strengthening"],
  evidenceLevel: "B",
  references: [],
  decisionTreeNode: {
    question: "",
    positiveSigns: [],
    negativeSigns: [],
  },
};
