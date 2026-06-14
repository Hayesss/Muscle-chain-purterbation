import type { SpecialTest } from "../types";

export const distraction_test: SpecialTest = {
  id: "distraction_test",
  name: "颈椎牵引试验",
  nameEn: "Distraction Test",
  description: "评估颈椎神经根病变",
  procedure: ["患者坐位，检查者双手托住患者枕部和下颌，向上牵引"],
  positiveCriteria: "上肢放射痛或麻木减轻",
  indicatedPathology: ["颈椎神经根病变"],
  relatedDiagnoses: ["cervical_spondylosis"],
};
