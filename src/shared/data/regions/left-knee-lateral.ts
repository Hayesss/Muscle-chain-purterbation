import type { SymptomRegion } from "../types";

export const left_knee_lateral: SymptomRegion = {
  id: "left_knee_lateral",
  name: "左膝外侧区",
  side: "left",
  bodyPart: "knee",
  svgPath: {
    front: "M180,340 Q195,336 210,340 L214,370 Q200,374 186,370 Z",
    back: "M180,340 Q195,336 210,340 L214,370 Q200,374 186,370 Z",
    side: "M185,340 Q195,336 205,340 L209,370 Q200,374 190,370 Z"},
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
