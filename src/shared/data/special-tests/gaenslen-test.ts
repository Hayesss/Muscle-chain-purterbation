import type { SpecialTest } from "../types";

export const gaenslen_test: SpecialTest = {
  id: "gaenslen_test",
  name: "Gaenslen试验",
  nameEn: "Gaenslen Test",
  description: "评估骶髂关节",
  procedure: ["患者仰卧位，一侧髋膝屈曲抱胸，对侧腿下垂过床沿"],
  positiveCriteria: "骶髂区疼痛",
  indicatedPathology: ["骶髂关节功能障碍"],
  relatedDiagnoses: ["sacroiliac_dysfunction"],
};
