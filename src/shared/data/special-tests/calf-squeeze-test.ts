import type { SpecialTest } from "../types";

export const calf_squeeze_test: SpecialTest = {
  id: "calf_squeeze_test",
  name: "小腿挤压试验",
  nameEn: "Calf Squeeze Test",
  description: "评估跟腱完整性",
  procedure: ["患者俯卧位或坐位，检查者挤压腓肠肌"],
  positiveCriteria: "足无跖屈动作（跟腱断裂）",
  indicatedPathology: ["跟腱断裂"],
  relatedDiagnoses: ["achilles_tendinopathy"],
};
