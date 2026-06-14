import type { SymptomRegion } from "../types";

export const right_thigh_medial: SymptomRegion = {
  id: "right_thigh_medial",
  name: "右大腿内侧区",
  side: "right",
  bodyPart: "lower-limb",
  svgPath: {
    front: "M210,280 Q220,276 230,280 L234,340 Q224,344 214,340 Z",
    side: "M215,280 Q220,276 225,280 L229,340 Q224,344 219,340 Z"},
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
