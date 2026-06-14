import type { SymptomRegion } from "../types";

export const left_groin: SymptomRegion = {
  id: "left_groin",
  name: "左腹股沟区",
  side: "left",
  bodyPart: "hip",
  svgPath: {
    front: "M170,210 Q185,206 200,210 L204,250 Q190,254 175,250 Z",
    side: "M180,210 Q190,206 200,210 L204,250 Q190,254 180,250 Z"},
  relatedMuscles: ["iliopsoas", "adductors", "sartorius"],
  relatedDiagnoses: ["hip_impingement", "groin_strain"],
  relatedChains: ["superficial_front_line", "spiral_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
