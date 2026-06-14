import type { SymptomRegion } from "../types";

export const right_thigh_posterior: SymptomRegion = {
  id: "right_thigh_posterior",
  name: "右大腿后区",
  side: "right",
  bodyPart: "lower-limb",
  svgPath: {
    back: "M210,280 Q225,276 240,280 L244,340 Q230,344 216,340 Z",
    side: "M215,280 Q225,276 235,280 L239,340 Q230,344 220,340 Z"},
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
