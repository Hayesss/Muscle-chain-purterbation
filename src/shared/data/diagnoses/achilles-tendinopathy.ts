import type { DiagnosisEntry } from "../types";

export const achilles_tendinopathy: DiagnosisEntry = {
  id: "achilles_tendinopathy",
  name: "跟腱病",
  nameEn: "Achilles Tendinopathy",
  icd10: "M77.6",
  category: "ankle-foot",
  typicalSymptoms: ["跟腱区疼痛僵硬", "晨起第一步痛", "提踵加重", "跟腱增厚"],
  redFlags: ["跟腱断裂（Thompson试验）", "急性外伤", "全身炎症"],
  relatedSymptomRegions: [],
  relatedMuscles: ["gastrocnemius", "soleus", "hamstrings"],
  relatedChains: ["superficial_back_line"],
  recommendedSpecialTests: ["thompson_test", "calf_squeeze_test"],
  recommendedTechniques: ["eccentric_calf_training", "gastrocnemius_stretching", "heel_raise_progression"],
  evidenceLevel: "A",
  references: [],
  decisionTreeNode: {
    question: "",
    positiveSigns: [],
    negativeSigns: [],
  },
};
