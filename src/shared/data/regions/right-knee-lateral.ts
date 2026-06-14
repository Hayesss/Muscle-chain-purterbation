import type { SymptomRegion } from "../types";

export const right_knee_lateral: SymptomRegion = {
  id: "right_knee_lateral",
  name: "右膝外侧区",
  side: "right",
  bodyPart: "knee",
  svgPath: {
    front: "M240,340 Q255,336 270,340 L274,370 Q260,374 246,370 Z",
    back: "M240,340 Q255,336 270,340 L274,370 Q260,374 246,370 Z",
    side: "M245,340 Q255,336 265,340 L269,370 Q260,374 250,370 Z"},
  relatedMuscles: ["iliotibial_band", "tensor_fasciae_latae", "gluteus_medius"],
  relatedDiagnoses: ["iliotibial_band_syndrome", "meniscus_injury"],
  relatedChains: ["lateral_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
