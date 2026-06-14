import type { SymptomRegion } from "../types";

export const left_thigh_medial: SymptomRegion = {
  id: "left_thigh_medial",
  name: "左大腿内侧区",
  side: "left",
  bodyPart: "lower-limb",
  svgPath: {
    front: "M150,280 Q160,276 170,280 L174,340 Q164,344 154,340 Z",
    side: "M155,280 Q160,276 165,280 L169,340 Q164,344 159,340 Z"},
  relatedMuscles: ["adductors", "sartorius", "gracilis"],
  relatedDiagnoses: ["groin_strain", "hip_impingement"],
  relatedChains: ["spiral_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
