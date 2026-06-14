import type { SymptomRegion } from "../types";

export const left_gluteal: SymptomRegion = {
  id: "left_gluteal",
  name: "左臀区",
  side: "left",
  bodyPart: "hip",
  svgPath: {
    back: "M150,200 Q170,194 190,200 L194,250 Q175,256 155,250 Z",
    side: "M155,200 Q170,194 185,200 L189,250 Q175,256 160,250 Z"},
  relatedMuscles: ["gluteus_maximus", "gluteus_medius", "piriformis"],
  relatedDiagnoses: ["piriformis_syndrome", "sacroiliac_dysfunction", "hip_impingement"],
  relatedChains: ["superficial_back_line", "spiral_line", "lateral_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
