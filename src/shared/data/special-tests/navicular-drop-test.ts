import type { SpecialTest } from "../types";

export const navicular_drop_test: SpecialTest = {
  id: "navicular_drop_test",
  name: "舟骨下降试验",
  nameEn: "Navicular Drop Test",
  description: "评估足弓塌陷",
  procedure: ["患者站立位，测量非负重和负重时舟骨高度差"],
  positiveCriteria: "舟骨下降超过10mm",
  indicatedPathology: ["扁平足", "过度旋前"],
  relatedDiagnoses: ["plantar_fasciitis", "patellofemoral_pain"],
};
