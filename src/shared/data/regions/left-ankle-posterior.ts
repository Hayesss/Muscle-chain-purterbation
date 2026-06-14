import type { SymptomRegion } from "../types";

export const left_ankle_posterior: SymptomRegion = {
  id: "left_ankle_posterior",
  name: "左踝后区",
  side: "left",
  bodyPart: "ankle",
  svgPath: {
    back: "M150,420 Q165,416 180,420 L184,450 Q170,454 156,450 Z",
    side: "M155,420 Q165,416 175,420 L179,450 Q169,454 159,450 Z"},
  relatedMuscles: ["achilles_tendon", "gastrocnemius", "soleus"],
  relatedDiagnoses: ["achilles_tendinopathy"],
  relatedChains: ["superficial_back_line"],
  assessmentTemplate: {
    painQualities: ["酸痛", "刺痛", "钝痛", "灼痛", "牵涉痛"],
    typicalAggravatingMoves: ["活动加重", "负重", "久坐", "特定姿势"],
    typicalEasingMoves: ["休息", "热敷", "轻度活动"],
    specialTests: [],
  },
};
