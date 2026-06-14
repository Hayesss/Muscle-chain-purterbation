import type { SpecialTest } from "../types";

export const cervical_endurance_test: SpecialTest = {
  id: "cervical_endurance_test",
  name: "颈深屈肌耐力试验",
  nameEn: "Cervical Flexor Endurance Test",
  description: "评估颈深屈肌耐力",
  procedure: ["患者仰卧位，微收下巴，保持头抬离床面约2-3cm"],
  positiveCriteria: "不能维持或出现代偿",
  indicatedPathology: ["颈深屈肌无力"],
  relatedDiagnoses: ["upper_crossed_syndrome", "cervical_spondylosis"],
};
