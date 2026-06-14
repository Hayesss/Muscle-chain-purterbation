import type { SymptomRegion } from "../types";

export const right_ankle_posterior: SymptomRegion = {
  id: "right_ankle_posterior",
  name: "右踝后区",
  side: "right",
  bodyPart: "ankle",
  svgPath: {
    back: "M210,420 Q225,416 240,420 L244,450 Q230,454 216,450 Z",
    side: "M215,420 Q225,416 235,420 L239,450 Q230,454 220,450 Z"},
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
