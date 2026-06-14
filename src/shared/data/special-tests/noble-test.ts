import type { SpecialTest } from "../types";

export const noble_test: SpecialTest = {
  id: "noble_test",
  name: "Noble试验",
  nameEn: "Noble Compression Test",
  description: "评估髂胫束综合征",
  procedure: ["患者仰卧位，检查者按压股骨外上髁上方，患者被动伸屈膝"],
  positiveCriteria: "约30度屈曲时疼痛最剧",
  indicatedPathology: ["髂胫束综合征"],
  relatedDiagnoses: ["iliotibial_band_syndrome"],
};
