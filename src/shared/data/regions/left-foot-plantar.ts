import type { SymptomRegion } from "../types";

export const left_foot_plantar: SymptomRegion = {
  id: "left_foot_plantar",
  name: "左足底区",
  side: "left",
  bodyPart: "foot",
  svgPath: {
    front: "M150,450 Q165,446 180,450 L184,470 Q170,474 156,470 Z",
    back: "M150,450 Q165,446 180,450 L184,470 Q170,474 156,470 Z",
    side: "M155,450 Q165,446 175,450 L179,470 Q169,474 159,470 Z"},
  relatedMuscles: ["plantar_fascia", "intrinsic_foot"],
  relatedDiagnoses: ["plantar_fasciitis", "morton_neuroma"],
  relatedChains: ["superficial_back_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
