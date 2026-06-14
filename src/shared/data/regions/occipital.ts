import type { SymptomRegion } from "../types";

export const occipital: SymptomRegion = {
  id: "occipital",
  name: "枕区",
  side: "midline",
  bodyPart: "head",
  svgPath: {
    back: "M185,15 Q200,11 215,15 L218,35 Q200,39 182,35 Z",
    side: "M192,15 Q200,11 208,15 L211,35 Q200,39 189,35 Z"},
  relatedMuscles: ["suboccipitals", "occipitalis"],
  relatedDiagnoses: ["tension_headache", "cervical_spondylosis"],
  relatedChains: ["superficial_back_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
