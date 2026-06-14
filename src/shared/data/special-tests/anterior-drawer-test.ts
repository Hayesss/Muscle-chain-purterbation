import type { SpecialTest } from "../types";

export const anterior_drawer_test: SpecialTest = {
  id: "anterior_drawer_test",
  name: "前抽屉试验",
  nameEn: "Anterior Drawer Test",
  description: "评估踝关节前外侧不稳",
  procedure: ["患者坐位或仰卧位，踝稍跖屈，检查者一手固定胫骨，一手向前拉跟骨"],
  positiveCriteria: "距骨前移过度（与健侧对比）",
  indicatedPathology: ["前距腓韧带断裂"],
  relatedDiagnoses: ["ankle_sprain"],
};
