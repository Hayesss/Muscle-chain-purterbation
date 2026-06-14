import type { SymptomRegion } from "../types";

export const right_shoulder_lateral: SymptomRegion = {
  id: "right_shoulder_lateral",
  name: "右肩外侧区",
  side: "right",
  bodyPart: "shoulder",
  svgPath: {
    front: "M240,80 Q260,76 280,80 L284,110 Q267,114 247,110 Z",
    back: "M240,80 Q260,76 280,80 L284,110 Q267,114 247,110 Z",
    side: "M248,80 Q258,76 268,80 L272,110 Q262,114 252,110 Z"},
  relatedMuscles: ["deltoid_middle", "supraspinatus"],
  relatedDiagnoses: ["subacromial_impingement", "rotator_cuff_tendinopathy"],
  relatedChains: ["superficial_back_line", "lateral_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
