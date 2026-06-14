import type { SpecialTest } from "../types";

export const spurling_test: SpecialTest = {
  id: "spurling_test",
  name: "Spurling试验",
  nameEn: "Spurling Test",
  description: "评估颈椎神经根病变",
  procedure: ["患者坐位，头侧屈并后伸，检查者施加轴向压力"],
  positiveCriteria: "上肢放射痛或麻木加重",
  indicatedPathology: ["颈椎神经根病变", "椎间盘突出"],
  relatedDiagnoses: ["cervical_spondylosis", "lumbar_disc_herniation"],
};
