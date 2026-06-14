import type { SymptomRegion } from "../types";

export const chest: SymptomRegion = {
  id: "chest",
  name: "胸区",
  side: "midline",
  bodyPart: "trunk",
  svgPath: {
    front: "M180,120 Q200,116 220,120 L224,180 Q200,184 176,180 Z",
    side: "M190,120 Q200,116 210,120 L214,180 Q200,184 186,180 Z"},
  relatedMuscles: ["pectoralis_major", "rectus_abdominis"],
  relatedDiagnoses: ["thoracic_outlet_syndrome"],
  relatedChains: ["superficial_front_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
