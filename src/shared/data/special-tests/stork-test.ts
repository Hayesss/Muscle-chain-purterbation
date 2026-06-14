import type { SpecialTest } from "../types";

export const stork_test: SpecialTest = {
  id: "stork_test",
  name: "Stork试验",
  nameEn: "Stork Test (Gillette Test)",
  description: "评估骶髂关节功能",
  procedure: ["患者单腿站立，检查者观察PSIS运动"],
  positiveCriteria: "PSIS下降或延迟（骶髂功能障碍）",
  indicatedPathology: ["骶髂关节功能障碍"],
  relatedDiagnoses: ["sacroiliac_dysfunction"],
};
