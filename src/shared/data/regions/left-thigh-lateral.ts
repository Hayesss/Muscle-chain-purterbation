import type { SymptomRegion } from "../types";

export const left_thigh_lateral: SymptomRegion = {
  id: "left_thigh_lateral",
  name: "左大腿外侧区",
  side: "left",
  bodyPart: "lower-limb",
  svgPath: {
    front: "M180,280 Q195,276 210,280 L214,340 Q200,344 186,340 Z",
    back: "M180,280 Q195,276 210,280 L214,340 Q200,344 186,340 Z",
    side: "M185,280 Q195,276 205,280 L209,340 Q200,344 190,340 Z"},
  relatedMuscles: ["tensor_fasciae_latae", "gluteus_medius", "iliotibial_band"],
  relatedDiagnoses: ["iliotibial_band_syndrome", "patellofemoral_pain"],
  relatedChains: ["lateral_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
