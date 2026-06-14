import type { DiagnosisEntry } from "../types";

export const upper_crossed_syndrome: DiagnosisEntry = {
  id: "upper_crossed_syndrome",
  name: "上交叉综合征",
  nameEn: "Upper Crossed Syndrome",
  icd10: "M79.6",
  category: "neck-back",
  typicalSymptoms: ["圆肩", "头前伸", "颈后痛", "肩胛区酸痛"],
  redFlags: ["神经根症状", "胸廓出口症状"],
  relatedSymptomRegions: [],
  relatedMuscles: ["upper_trapezius", "sternocleidomastoid", "pectoralis_major", "rhomboids", "deep_neck_flexors"],
  relatedChains: ["superficial_back_line", "superficial_front_line"],
  recommendedSpecialTests: ["cervical_endurance_test"],
  recommendedTechniques: ["postural_correction", "deep_neck_flexor_strengthening", "scapular_stabilization"],
  evidenceLevel: "C",
  references: [],
  decisionTreeNode: {
    question: "",
    positiveSigns: [],
    negativeSigns: [],
  },
};
