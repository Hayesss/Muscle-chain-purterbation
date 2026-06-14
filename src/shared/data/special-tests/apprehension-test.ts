import type { SpecialTest } from "../types";

export const apprehension_test: SpecialTest = {
  id: "apprehension_test",
  name: "Apprehension试验",
  nameEn: "Apprehension Test",
  description: "评估肩前方不稳",
  procedure: ["患者仰卧位，肩外展90度，肘屈90度，检查者被动外旋肩关节"],
  positiveCriteria: "患者感到恐惧或即将脱位",
  indicatedPathology: ["肩前方不稳", "Bankart损伤"],
  relatedDiagnoses: ["shoulder_instability"],
};
