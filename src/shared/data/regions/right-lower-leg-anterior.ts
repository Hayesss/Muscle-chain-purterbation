import type { SymptomRegion } from "../types";

export const right_lower_leg_anterior: SymptomRegion = {
  id: "right_lower_leg_anterior",
  name: "右小腿前区",
  side: "right",
  bodyPart: "lower-limb",
  svgPath: {
    front: "M210,370 Q225,366 240,370 L244,420 Q230,424 216,420 Z",
    side: "M215,370 Q225,366 235,370 L239,420 Q230,424 220,420 Z"},
  relatedMuscles: ["tibialis_anterior", "extensor_digitorum_longus"],
  relatedDiagnoses: ["shin_splints", "anterior_ankle_impingement"],
  relatedChains: ["superficial_front_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
