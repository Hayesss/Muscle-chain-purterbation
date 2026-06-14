import type { SpecialTest } from "../types";

export const ober_test: SpecialTest = {
  id: "ober_test",
  name: "Ober试验",
  nameEn: "Ober Test",
  description: "评估髂胫束紧张度",
  procedure: ["患者侧卧位，患侧在上，检查者保持髋外展，然后使膝屈曲并放下大腿"],
  positiveCriteria: "大腿不能内收至水平以下（髂胫束紧张）",
  indicatedPathology: ["髂胫束紧张"],
  relatedDiagnoses: ["iliotibial_band_syndrome"],
};
