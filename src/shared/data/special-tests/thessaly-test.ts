import type { SpecialTest } from "../types";

export const thessaly_test: SpecialTest = {
  id: "thessaly_test",
  name: "Thessaly试验",
  nameEn: "Thessaly Test",
  description: "评估半月板损伤",
  procedure: ["患者单腿站立，检查者扶持，患者屈膝约20度并旋转身体"],
  positiveCriteria: "膝关节间隙疼痛或卡顿感",
  indicatedPathology: ["半月板损伤"],
  relatedDiagnoses: ["meniscus_injury"],
};
