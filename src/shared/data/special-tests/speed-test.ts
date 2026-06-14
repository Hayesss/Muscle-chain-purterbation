import type { SpecialTest } from "../types";

export const speed_test: SpecialTest = {
  id: "speed_test",
  name: "Speed试验",
  nameEn: "Speed's Test",
  description: "评估肱二头肌长头腱",
  procedure: ["患者肩前屈约60度，肘伸前臂旋后，检查者施加向下阻力，患者抗阻前屈"],
  positiveCriteria: "肱二头肌沟区疼痛",
  indicatedPathology: ["肱二头肌长头腱炎", "SLAP损伤"],
  relatedDiagnoses: ["biceps_tendinitis"],
};
