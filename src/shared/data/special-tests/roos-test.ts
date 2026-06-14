import type { SpecialTest } from "../types";

export const roos_test: SpecialTest = {
  id: "roos_test",
  name: "Roos试验",
  nameEn: "Roos Test (Elevated Arm Stress Test)",
  description: "评估胸廓出口综合征",
  procedure: ["患者坐位，双上肢外展外旋过头，快速开握拳3分钟"],
  positiveCriteria: "症状重现（麻木、无力、疼痛）",
  indicatedPathology: ["胸廓出口综合征"],
  relatedDiagnoses: ["thoracic_outlet_syndrome"],
};
