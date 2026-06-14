import type { SpecialTest } from "../types";

export const apley_test: SpecialTest = {
  id: "apley_test",
  name: "Apley研磨试验",
  nameEn: "Apley Grind Test",
  description: "评估半月板损伤",
  procedure: ["患者俯卧位，屈膝90度，检查者向下压并旋转小腿"],
  positiveCriteria: "膝关节间隙疼痛",
  indicatedPathology: ["半月板损伤"],
  relatedDiagnoses: ["meniscus_injury"],
};
