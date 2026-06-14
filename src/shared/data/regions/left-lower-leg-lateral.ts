import type { SymptomRegion } from "../types";

export const left_lower_leg_lateral: SymptomRegion = {
  id: "left_lower_leg_lateral",
  name: "左小腿外侧区",
  side: "left",
  bodyPart: "lower-limb",
  svgPath: {
    front: "M180,370 Q195,366 210,370 L214,420 Q200,424 186,420 Z",
    back: "M180,370 Q195,366 210,370 L214,420 Q200,424 186,420 Z",
    side: "M185,370 Q195,366 205,370 L209,420 Q200,424 190,420 Z"},
  relatedMuscles: ["fibularis", "tibialis_anterior"],
  relatedDiagnoses: ["ankle_sprain"],
  relatedChains: ["lateral_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
