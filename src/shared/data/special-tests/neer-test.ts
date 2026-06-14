import type { SpecialTest } from "../types";

export const neer_test: SpecialTest = {
  id: "neer_test",
  name: "Neer试验",
  nameEn: "Neer Impingement Test",
  description: "评估肩峰下撞击",
  procedure: ["患者坐位，检查者一手固定肩胛骨，另一手将患肩被动前屈至最大范围"],
  positiveCriteria: "肩峰下出现疼痛",
  indicatedPathology: ["肩峰下撞击", "肩袖肌腱病"],
  relatedDiagnoses: ["subacromial_impingement", "rotator_cuff_tendinopathy"],
};
