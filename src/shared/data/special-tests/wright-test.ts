import type { SpecialTest } from "../types";

export const wright_test: SpecialTest = {
  id: "wright_test",
  name: "Wright试验",
  nameEn: "Wright Test",
  description: "评估胸廓出口综合征",
  procedure: ["患者坐位，检查者触诊桡动脉，患者肩外展外旋过头"],
  positiveCriteria: "桡动脉搏动减弱或消失",
  indicatedPathology: ["胸廓出口综合征"],
  relatedDiagnoses: ["thoracic_outlet_syndrome"],
};
