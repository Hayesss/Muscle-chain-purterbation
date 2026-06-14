import type { SymptomRegion } from "../types";

export const left_upper_back: SymptomRegion = {
  id: "left_upper_back",
  name: "左上背区",
  side: "left",
  bodyPart: "trunk",
  svgPath: {
    back: "M150,120 Q165,116 180,120 L184,160 Q170,164 156,160 Z",
    side: "M155,120 Q165,116 175,120 L179,160 Q169,164 159,160 Z"},
  relatedMuscles: ["rhomboids", "upper_trapezius", "erector_spinae"],
  relatedDiagnoses: ["upper_crossed_syndrome", "cervical_spondylosis"],
  relatedChains: ["superficial_back_line", "spiral_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
