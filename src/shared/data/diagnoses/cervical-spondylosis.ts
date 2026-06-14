import type { DiagnosisEntry } from "../types";

export const cervical_spondylosis: DiagnosisEntry = {
  id: "cervical_spondylosis",
  name: "颈型颈椎病",
  nameEn: "Cervical Spondylosis",
  icd10: "M47.8",
  category: "neck-back",
  typicalSymptoms: ["颈痛僵硬", "活动受限", "上肢放射痛", "头晕"],
  redFlags: ["进行性肌无力", "大小便障碍", "步态不稳"],
  relatedSymptomRegions: [],
  relatedMuscles: ["upper_trapezius", "sternocleidomastoid", "suboccipitals", "levator_scapulae"],
  relatedChains: ["superficial_back_line", "superficial_front_line", "lateral_line"],
  recommendedSpecialTests: ["spurling_test", "distraction_test"],
  recommendedTechniques: ["ischemic_compression_ut", "mfr_suboccipital", "cervical_mobilization"],
  evidenceLevel: "B",
  references: [],
  decisionTreeNode: {
    question: "",
    positiveSigns: [],
    negativeSigns: [],
  },
};
