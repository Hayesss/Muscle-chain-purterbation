import type { SymptomRegion } from "../types";

export const right_knee_posterior: SymptomRegion = {
  id: "right_knee_posterior",
  name: "右膝后区",
  side: "right",
  bodyPart: "knee",
  svgPath: {
    back: "M210,340 Q225,336 240,340 L244,370 Q230,374 216,370 Z",
    side: "M215,340 Q225,336 235,340 L239,370 Q230,374 220,370 Z"},
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
