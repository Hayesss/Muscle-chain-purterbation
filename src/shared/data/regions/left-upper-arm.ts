import type { SymptomRegion } from "../types";

export const left_upper_arm: SymptomRegion = {
  id: "left_upper_arm",
  name: "左上臂区",
  side: "left",
  bodyPart: "upper-limb",
  svgPath: {
    front: "M150,140 Q165,136 180,140 L184,200 Q170,204 156,200 Z",
    back: "M150,140 Q165,136 180,140 L184,200 Q170,204 156,200 Z",
    side: "M155,140 Q165,136 175,140 L179,200 Q169,204 159,200 Z"},
  relatedMuscles: ["biceps_brachii", "triceps_brachii", "brachialis"],
  relatedDiagnoses: ["biceps_tendinitis"],
  relatedChains: ["superficial_front_line", "superficial_back_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
