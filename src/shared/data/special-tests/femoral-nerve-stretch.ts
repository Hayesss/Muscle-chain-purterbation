import type { SpecialTest } from "../types";

export const femoral_nerve_stretch: SpecialTest = {
  id: "femoral_nerve_stretch",
  name: "股神经牵拉试验",
  nameEn: "Femoral Nerve Stretch Test",
  description: "评估腰椎L2-L4神经根",
  procedure: ["患者俯卧位，检查者被动屈膝并将髋关节后伸"],
  positiveCriteria: "大腿前侧放射痛",
  indicatedPathology: ["L2-L4神经根病变", "高位椎间盘突出"],
  relatedDiagnoses: ["lumbar_disc_herniation"],
};
