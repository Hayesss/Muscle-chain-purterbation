import type { SymptomRegion } from "../types";

export const right_thigh_lateral: SymptomRegion = {
  id: "right_thigh_lateral",
  name: "右大腿外侧区",
  side: "right",
  bodyPart: "lower-limb",
  svgPath: {
    front: "M240,280 Q255,276 270,280 L274,340 Q260,344 246,340 Z",
    back: "M240,280 Q255,276 270,280 L274,340 Q260,344 246,340 Z",
    side: "M245,280 Q255,276 265,280 L269,340 Q260,344 250,340 Z"},
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
