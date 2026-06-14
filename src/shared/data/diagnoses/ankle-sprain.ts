import type { DiagnosisEntry } from "../types";

export const ankle_sprain: DiagnosisEntry = {
  id: "ankle_sprain",
  name: "踝关节扭伤",
  nameEn: "Ankle Sprain",
  icd10: "S93.4",
  category: "ankle-foot",
  typicalSymptoms: ["踝外侧痛/肿胀", "内翻受伤史", "前抽屉试验阳性", "距骨倾斜试验阳性"],
  redFlags: ["骨折（Ottawa标准）", "完全韧带断裂"],
  relatedSymptomRegions: [],
  relatedMuscles: ["fibularis", "tibialis_anterior", "gastrocnemius", "soleus"],
  relatedChains: ["lateral_line", "superficial_back_line"],
  recommendedSpecialTests: ["anterior_drawer_test", "talar_tilt_test"],
  recommendedTechniques: ["fibularis_strengthening", "proprioception_training", "mfr_lateral_compartment"],
  evidenceLevel: "A",
  references: [],
  decisionTreeNode: {
    question: "",
    positiveSigns: [],
    negativeSigns: [],
  },
};
