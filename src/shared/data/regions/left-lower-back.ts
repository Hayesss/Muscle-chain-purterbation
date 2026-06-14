import type { SymptomRegion } from "../types";

export const left_lower_back: SymptomRegion = {
  id: "left_lower_back",
  name: "左下背区",
  side: "left",
  bodyPart: "trunk",
  svgPath: {
    back: "M150,160 Q165,156 180,160 L184,210 Q170,214 156,210 Z",
    side: "M155,160 Q165,156 175,160 L179,210 Q169,214 159,210 Z"},
  relatedMuscles: ["erector_spinae", "quadratus_lumborum", "multifidus"],
  relatedDiagnoses: ["lumbar_strain", "lumbar_disc_herniation"],
  relatedChains: ["superficial_back_line", "spiral_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
