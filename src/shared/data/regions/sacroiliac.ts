import type { SymptomRegion } from "../types";

export const sacroiliac: SymptomRegion = {
  id: "sacroiliac",
  name: "骶髂区",
  side: "midline",
  bodyPart: "trunk",
  svgPath: {
    back: "M185,195 Q200,191 215,195 L218,220 Q200,224 182,220 Z",
    side: "M192,195 Q200,191 208,195 L211,220 Q200,224 189,220 Z"},
  relatedMuscles: ["piriformis", "gluteus_maximus", "erector_spinae"],
  relatedDiagnoses: ["sacroiliac_dysfunction"],
  relatedChains: ["superficial_back_line", "spiral_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
