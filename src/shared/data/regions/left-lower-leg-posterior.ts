import type { SymptomRegion } from "../types";

export const left_lower_leg_posterior: SymptomRegion = {
  id: "left_lower_leg_posterior",
  name: "左小腿后区",
  side: "left",
  bodyPart: "lower-limb",
  svgPath: {
    back: "M150,370 Q165,366 180,370 L184,420 Q170,424 156,420 Z",
    side: "M155,370 Q165,366 175,370 L179,420 Q169,424 159,420 Z"},
  relatedMuscles: ["gastrocnemius", "soleus", "tibialis_posterior"],
  relatedDiagnoses: ["achilles_tendinopathy", "plantar_fasciitis"],
  relatedChains: ["superficial_back_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
