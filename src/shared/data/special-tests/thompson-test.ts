import type { SpecialTest } from "../types";

export const thompson_test: SpecialTest = {
  id: "thompson_test",
  name: "Thompson试验",
  nameEn: "Thompson Test (Simmonds Test)",
  description: "评估跟腱完整性",
  procedure: ["患者俯卧位，双足伸出床沿，检查者挤压腓肠肌"],
  positiveCriteria: "足无跖屈动作（跟腱断裂）",
  indicatedPathology: ["跟腱断裂"],
  relatedDiagnoses: ["achilles_tendinopathy"],
};
