import type { DiagnosisEntry } from "../types";

export const thoracic_outlet_syndrome: DiagnosisEntry = {
  id: "thoracic_outlet_syndrome",
  name: "胸廓出口综合征",
  nameEn: "Thoracic Outlet Syndrome",
  icd10: "G54.0",
  category: "neck-back",
  typicalSymptoms: ["上肢麻木刺痛", "高举过头加重", "Adson试验阳性", "Wright试验阳性"],
  redFlags: ["血管症状（苍白、发凉）", "进行性肌萎缩"],
  relatedSymptomRegions: [],
  relatedMuscles: ["sternocleidomastoid", "upper_trapezius", "scalenes", "pectoralis_minor"],
  relatedChains: ["superficial_front_line", "lateral_line"],
  recommendedSpecialTests: ["adson_test", "wright_test", "roos_test"],
  recommendedTechniques: ["first_rib_mobilization", "scalene_stretching"],
  evidenceLevel: "C",
  references: [],
  decisionTreeNode: {
    question: "",
    positiveSigns: [],
    negativeSigns: [],
  },
};
