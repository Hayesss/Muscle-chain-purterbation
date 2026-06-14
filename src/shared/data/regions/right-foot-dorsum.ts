import type { SymptomRegion } from "../types";

export const right_foot_dorsum: SymptomRegion = {
  id: "right_foot_dorsum",
  name: "右足背区",
  side: "right",
  bodyPart: "foot",
  svgPath: {
    front: "M210,450 Q225,446 240,450 L244,470 Q230,474 216,470 Z",
    side: "M215,450 Q225,446 235,450 L239,470 Q230,474 220,470 Z"},
  relatedMuscles: ["tibialis_anterior", "extensor_digitorum_longus"],
  relatedDiagnoses: ["ankle_sprain"],
  relatedChains: ["superficial_front_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
