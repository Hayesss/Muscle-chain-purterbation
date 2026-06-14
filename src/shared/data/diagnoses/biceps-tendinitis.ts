import type { DiagnosisEntry } from "../types";

export const biceps_tendinitis: DiagnosisEntry = {
  id: "biceps_tendinitis",
  name: "肱二头肌长头腱炎",
  nameEn: "Biceps Tendinitis",
  icd10: "M75.2",
  category: "shoulder",
  typicalSymptoms: ["肩前区痛", "Speed试验阳性", "Yergason试验阳性", "过头活动加重"],
  redFlags: ["腱断裂（Popeye征）", "肩峰下撞击伴发"],
  relatedSymptomRegions: [],
  relatedMuscles: ["biceps_brachii", "supraspinatus", "deltoid_anterior"],
  relatedChains: ["superficial_front_line", "spiral_line"],
  recommendedSpecialTests: ["speed_test", "yergason_test"],
  recommendedTechniques: ["ischemic_compression_bb", "eccentric_strengthening_biceps"],
  evidenceLevel: "C",
  references: [],
  decisionTreeNode: {
    question: "",
    positiveSigns: [],
    negativeSigns: [],
  },
};
