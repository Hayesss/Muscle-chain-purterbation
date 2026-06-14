import type { SpecialTest } from "../types";

export const valsalva_test: SpecialTest = {
  id: "valsalva_test",
  name: "Valsalva试验",
  nameEn: "Valsalva Test",
  description: "评估椎管内病变",
  procedure: ["患者坐位或站立位，屏气并增加腹压（如咳嗽）"],
  positiveCriteria: "下肢放射痛或腰痛加重",
  indicatedPathology: ["椎间盘突出", "椎管狭窄"],
  relatedDiagnoses: ["lumbar_disc_herniation"],
};
