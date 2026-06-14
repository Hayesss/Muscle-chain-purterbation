import type { SymptomRegion } from "../types";

export const left_wrist_hand: SymptomRegion = {
  id: "left_wrist_hand",
  name: "左腕手区",
  side: "left",
  bodyPart: "upper-limb",
  svgPath: {
    front: "M150,260 Q165,256 180,260 L184,280 Q170,284 156,280 Z",
    back: "M150,260 Q165,256 180,260 L184,280 Q170,284 156,280 Z",
    side: "M155,260 Q165,256 175,260 L179,280 Q169,284 159,280 Z"},
  relatedMuscles: ["wrist_flexors", "wrist_extensors"],
  relatedDiagnoses: [],
  relatedChains: [],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
