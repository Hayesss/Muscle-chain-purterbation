import type { SymptomRegion } from "../types";

export const left_elbow: SymptomRegion = {
  id: "left_elbow",
  name: "左肘区",
  side: "left",
  bodyPart: "upper-limb",
  svgPath: {
    front: "M150,200 Q165,196 180,200 L184,220 Q170,224 156,220 Z",
    back: "M150,200 Q165,196 180,200 L184,220 Q170,224 156,220 Z",
    side: "M155,200 Q165,196 175,200 L179,220 Q169,224 159,220 Z"},
  relatedMuscles: ["biceps_brachii", "brachialis", "triceps_brachii"],
  relatedDiagnoses: ["biceps_tendinitis"],
  relatedChains: [],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
