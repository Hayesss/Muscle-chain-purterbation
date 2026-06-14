import type { SpecialTest } from "../types";

export const talar_tilt_test: SpecialTest = {
  id: "talar_tilt_test",
  name: "距骨倾斜试验",
  nameEn: "Talar Tilt Test",
  description: "评估踝关节外侧不稳",
  procedure: ["患者坐位或仰卧位，踝中立位，检查者一手固定胫骨，一手内翻跟骨"],
  positiveCriteria: "内翻角度过大（与健侧对比）",
  indicatedPathology: ["跟腓韧带断裂"],
  relatedDiagnoses: ["ankle_sprain"],
};
