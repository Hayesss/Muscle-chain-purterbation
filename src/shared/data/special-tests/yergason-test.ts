import type { SpecialTest } from "../types";

export const yergason_test: SpecialTest = {
  id: "yergason_test",
  name: "Yergason试验",
  nameEn: "Yergason's Test",
  description: "评估肱二头肌长头腱",
  procedure: ["患者肘屈90度前臂旋前，检查者固定肘部，患者抗阻旋后"],
  positiveCriteria: "肱二头肌沟区疼痛或弹响",
  indicatedPathology: ["肱二头肌长头腱炎", "SLAP损伤"],
  relatedDiagnoses: ["biceps_tendinitis"],
};
