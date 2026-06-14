import type { SymptomRegion } from "../types";

export const left_shoulder_anterior: SymptomRegion = {
  id: "left_shoulder_anterior",
  name: "左肩前区",
  side: "left",
  bodyPart: "shoulder",
  svgPath: {
    front: "M150,80 Q170,76 190,80 L194,110 Q177,114 157,110 Z",
    side: "M158,80 Q168,76 178,80 L182,110 Q172,114 162,110 Z"},
  relatedMuscles: ["deltoid_anterior", "biceps_brachii", "subscapularis"],
  relatedDiagnoses: ["subacromial_impingement", "biceps_tendinitis"],
  relatedChains: ["superficial_front_line", "spiral_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
