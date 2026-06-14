import type { SymptomRegion } from "../types";

export const right_lower_leg_lateral: SymptomRegion = {
  id: "right_lower_leg_lateral",
  name: "右小腿外侧区",
  side: "right",
  bodyPart: "lower-limb",
  svgPath: {
    front: "M240,370 Q255,366 270,370 L274,420 Q260,424 246,420 Z",
    back: "M240,370 Q255,366 270,370 L274,420 Q260,424 246,420 Z",
    side: "M245,370 Q255,366 265,370 L269,420 Q260,424 250,420 Z"},
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
