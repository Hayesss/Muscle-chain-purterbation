import type { SymptomRegion } from "../types";

export const left_knee_posterior: SymptomRegion = {
  id: "left_knee_posterior",
  name: "左膝后区",
  side: "left",
  bodyPart: "knee",
  svgPath: {
    back: "M150,340 Q165,336 180,340 L184,370 Q170,374 156,370 Z",
    side: "M155,340 Q165,336 175,340 L179,370 Q169,374 159,370 Z"},
  relatedMuscles: ["hamstrings", "gastrocnemius"],
  relatedDiagnoses: ["hamstring_strain", "meniscus_injury"],
  relatedChains: ["superficial_back_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
