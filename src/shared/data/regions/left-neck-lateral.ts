import type { SymptomRegion } from "../types";

export const left_neck_lateral: SymptomRegion = {
  id: "left_neck_lateral",
  name: "左颈侧区",
  side: "left",
  bodyPart: "neck",
  svgPath: {
    front: "M150,40 Q165,36 180,40 L184,65 Q170,69 156,65 Z",
    back: "M150,40 Q165,36 180,40 L184,65 Q170,69 156,65 Z",
    side: "M155,40 Q165,36 175,40 L179,65 Q169,69 159,65 Z"},
  relatedMuscles: ["sternocleidomastoid", "upper_trapezius", "scalenes"],
  relatedDiagnoses: ["cervical_spondylosis", "tension_headache", "thoracic_outlet_syndrome"],
  relatedChains: ["superficial_front_line", "lateral_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
