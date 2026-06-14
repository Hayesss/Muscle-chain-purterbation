import type { SpecialTest } from "../types";

export const adson_test: SpecialTest = {
  id: "adson_test",
  name: "Adson试验",
  nameEn: "Adson Test",
  description: "评估胸廓出口综合征（血管型）",
  procedure: ["患者坐位，检查者触诊桡动脉，患者头转向患侧并后伸，深吸气屏气"],
  positiveCriteria: "桡动脉搏动减弱或消失",
  indicatedPathology: ["胸廓出口综合征", "锁骨下动脉受压"],
  relatedDiagnoses: ["thoracic_outlet_syndrome"],
};
