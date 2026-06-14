import type { SymptomRegion } from "../types";

export const left_thigh_posterior: SymptomRegion = {
  id: "left_thigh_posterior",
  name: "左大腿后区",
  side: "left",
  bodyPart: "lower-limb",
  svgPath: {
    back: "M150,280 Q165,276 180,280 L184,340 Q170,344 156,340 Z",
    side: "M155,280 Q165,276 175,280 L179,340 Q169,344 159,340 Z"},
  relatedMuscles: ["hamstrings", "adductors"],
  relatedDiagnoses: ["hamstring_strain", "lumbar_strain"],
  relatedChains: ["superficial_back_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
