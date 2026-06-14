import type { SymptomRegion } from "../types";

export const right_knee_medial: SymptomRegion = {
  id: "right_knee_medial",
  name: "右膝内侧区",
  side: "right",
  bodyPart: "knee",
  svgPath: {
    front: "M210,340 Q220,336 230,340 L234,370 Q224,374 214,370 Z",
    back: "M210,340 Q220,336 230,340 L234,370 Q224,374 214,370 Z",
    side: "M215,340 Q220,336 225,340 L229,370 Q224,374 219,370 Z"},
  relatedMuscles: ["adductors", "medial_collateral_ligament"],
  relatedDiagnoses: ["meniscus_injury"],
  relatedChains: [],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
