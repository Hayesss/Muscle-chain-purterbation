import type { SymptomRegion } from "../types";

export const left_neck_posterior: SymptomRegion = {
  id: "left_neck_posterior",
  name: "左颈后区",
  side: "left",
  bodyPart: "neck",
  svgPath: {
    back: "M150,40 Q165,36 180,40 L184,65 Q170,69 156,65 Z",
    side: "M155,40 Q165,36 175,40 L179,65 Q169,69 159,65 Z"},
  relatedMuscles: ["upper_trapezius", "suboccipitals", "levator_scapulae"],
  relatedDiagnoses: ["tension_headache", "cervical_spondylosis", "upper_crossed_syndrome"],
  relatedChains: ["superficial_back_line", "lateral_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
