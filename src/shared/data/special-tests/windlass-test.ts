import type { SpecialTest } from "../types";

export const windlass_test: SpecialTest = {
  id: "windlass_test",
  name: "Windlass试验",
  nameEn: "Windlass Test",
  description: "评估足底筋膜",
  procedure: ["患者坐位或站立位，检查者背屈大趾"],
  positiveCriteria: "足跟底或足弓疼痛",
  indicatedPathology: ["足底筋膜炎"],
  relatedDiagnoses: ["plantar_fasciitis"],
};
