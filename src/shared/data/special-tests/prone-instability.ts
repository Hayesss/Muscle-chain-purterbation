import type { SpecialTest } from "../types";

export const prone_instability: SpecialTest = {
  id: "prone_instability",
  name: "俯卧位不稳试验",
  nameEn: "Prone Instability Test",
  description: "评估腰椎节段不稳",
  procedure: ["患者俯卧位，检查者按压腰椎棘突，患者抬起下肢"],
  positiveCriteria: "抬起下肢时疼痛减轻",
  indicatedPathology: ["腰椎节段不稳"],
  relatedDiagnoses: ["lumbar_strain", "lumbar_disc_herniation"],
};
