import type { SpecialTest } from "../types";

export const faber_test: SpecialTest = {
  id: "faber_test",
  name: "FABER试验",
  nameEn: "FABER Test (Flexion, Abduction, External Rotation)",
  description: "评估髋关节和骶髂关节",
  procedure: ["患者仰卧位，将患侧踝置于对侧膝上，检查者向下压膝部"],
  positiveCriteria: "腹股沟区痛（髋关节）或骶髂区痛（骶髂关节）",
  indicatedPathology: ["髋关节病变", "骶髂关节功能障碍"],
  relatedDiagnoses: ["hip_impingement", "sacroiliac_dysfunction"],
};
