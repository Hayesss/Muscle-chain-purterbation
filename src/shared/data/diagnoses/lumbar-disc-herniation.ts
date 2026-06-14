import type { DiagnosisEntry } from "../types";

export const lumbar_disc_herniation: DiagnosisEntry = {
  id: "lumbar_disc_herniation",
  name: "腰椎间盘突出",
  nameEn: "Lumbar Disc Herniation",
  icd10: "M51.2",
  category: "neck-back",
  typicalSymptoms: ["腰痛伴下肢放射痛", "咳嗽/打喷嚏加重", "感觉减退", "肌力下降"],
  redFlags: ["鞍区麻木", "大小便障碍", "进行性肌无力"],
  relatedSymptomRegions: [],
  relatedMuscles: ["erector_spinae", "multifidus", "quadratus_lumborum", "piriformis"],
  relatedChains: ["superficial_back_line", "spiral_line"],
  recommendedSpecialTests: ["slr_test", "femoral_nerve_stretch", "valsalva_test"],
  recommendedTechniques: ["mckenzie_extension", "core_stabilization", "neurodynamic_mobilization"],
  evidenceLevel: "A",
  references: [],
  decisionTreeNode: {
    question: "",
    positiveSigns: [],
    negativeSigns: [],
  },
};
