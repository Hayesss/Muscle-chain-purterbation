import type { DiagnosisEntry } from "../types";

export const plantar_fasciitis: DiagnosisEntry = {
  id: "plantar_fasciitis",
  name: "足底筋膜炎",
  nameEn: "Plantar Fasciitis",
  icd10: "M77.5",
  category: "ankle-foot",
  typicalSymptoms: ["足跟底痛", "晨起第一步剧痛", "长时间站立加重", "Windlass试验阳性"],
  redFlags: ["脂肪垫萎缩", "跟骨应力骨折", "神经卡压"],
  relatedSymptomRegions: [],
  relatedMuscles: ["gastrocnemius", "soleus", "tibialis_anterior", "plantar_intrinsics"],
  relatedChains: ["superficial_back_line", "superficial_front_line"],
  recommendedSpecialTests: ["windlass_test", "navicular_drop_test"],
  recommendedTechniques: ["plantar_fascia_stretching", "gastrocnemius_stretching", "intrinsic_strengthening"],
  evidenceLevel: "A",
  references: [],
  decisionTreeNode: {
    question: "",
    positiveSigns: [],
    negativeSigns: [],
  },
};
