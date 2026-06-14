import type { SpecialTest } from "../types";

export const singlesquat_test: SpecialTest = {
  id: "singlesquat_test",
  name: "单腿下蹲试验",
  nameEn: "Single-leg Squat Test",
  description: "评估髌股关节功能",
  procedure: ["患者单腿站立，做下蹲动作"],
  positiveCriteria: "膝前痛、髌骨轨迹异常或动态膝外翻",
  indicatedPathology: ["髌股疼痛综合征"],
  relatedDiagnoses: ["patellofemoral_pain", "knee_pain"],
};
