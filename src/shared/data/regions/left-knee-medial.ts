import type { SymptomRegion } from "../types";

export const left_knee_medial: SymptomRegion = {
  id: "left_knee_medial",
  name: "左膝内侧区",
  side: "left",
  bodyPart: "knee",
  svgPath: {
    front: "M150,340 Q160,336 170,340 L174,370 Q164,374 154,370 Z",
    back: "M150,340 Q160,336 170,340 L174,370 Q164,374 154,370 Z",
    side: "M155,340 Q160,336 165,340 L169,370 Q164,374 159,370 Z"},
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
