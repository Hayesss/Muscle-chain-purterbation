import type { SymptomRegion } from "../types";

export const left_forearm: SymptomRegion = {
  id: "left_forearm",
  name: "左前臂区",
  side: "left",
  bodyPart: "upper-limb",
  svgPath: {
    front: "M150,220 Q165,216 180,220 L184,260 Q170,264 156,260 Z",
    back: "M150,220 Q165,216 180,220 L184,260 Q170,264 156,260 Z",
    side: "M155,220 Q165,216 175,220 L179,260 Q169,264 159,260 Z"},
  relatedMuscles: ["brachioradialis", "wrist_flexors", "wrist_extensors"],
  relatedDiagnoses: [],
  relatedChains: [],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
