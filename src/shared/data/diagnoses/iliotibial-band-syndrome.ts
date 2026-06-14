import type { DiagnosisEntry } from "../types";

export const iliotibial_band_syndrome: DiagnosisEntry = {
  id: "iliotibial_band_syndrome",
  name: "髂胫束综合征",
  nameEn: "Iliotibial Band Syndrome",
  icd10: "M76.3",
  category: "hip-knee",
  typicalSymptoms: ["膝外侧痛", "跑步 downhill 加重", "Ober试验阳性", "Noble试验阳性"],
  redFlags: ["半月板损伤", "外侧副韧带损伤"],
  relatedSymptomRegions: [],
  relatedMuscles: ["tensor_fasciae_latae", "gluteus_maximus", "gluteus_medius"],
  relatedChains: ["lateral_line"],
  recommendedSpecialTests: ["ober_test", "noble_test"],
  recommendedTechniques: ["mfr_itb", "gluteus_medius_strengthening", "tfl_stretching"],
  evidenceLevel: "B",
  references: [],
  decisionTreeNode: {
    question: "",
    positiveSigns: [],
    negativeSigns: [],
  },
};
