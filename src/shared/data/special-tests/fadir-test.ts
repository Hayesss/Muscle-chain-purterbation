import type { SpecialTest } from "../types";

export const fadir_test: SpecialTest = {
  id: "fadir_test",
  name: "FADIR试验",
  nameEn: "FADIR Test (Flexion, Adduction, Internal Rotation)",
  description: "评估髋撞击综合征",
  procedure: ["患者仰卧位，检查者将患髋屈曲90度，内收并内旋"],
  positiveCriteria: "腹股沟区或髋前区疼痛",
  indicatedPathology: ["髋撞击综合征", "髋臼唇撕裂"],
  relatedDiagnoses: ["hip_impingement"],
};
