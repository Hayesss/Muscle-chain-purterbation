import type { MyofascialChain } from "../types";

export const spiral_line: MyofascialChain = {
  id: "spiral_line",
  name: { zh: "螺旋线", en: "Spiral Line" },
  color: "#8E24AA",
  description: "从枕骨绕至对侧肩胛骨，经前锯肌、腹外斜肌、腹内斜肌、阔筋膜张肌、髂胫束、胫骨前肌、腓骨长肌、股二头肌至坐骨结节、骶结节韧带、竖脊肌回到枕骨的螺旋形连续性筋膜-肌肉链。负责维持身体螺旋稳定、控制旋转-抗旋转。",
  muscles: ["occipitalis", "rhomboids", "serratus_anterior", "obliquus_externus", "obliquus_internus", "tensor_fasciae_latae", "iliotibial_band", "tibialis_anterior", "fibularis_longus", "biceps_femoris", "sacrotuberous_ligament", "erector_spinae"],
  svgPaths: {
    back: ["M200,10 Q210,20 220,30", "M220,30 Q210,50 200,70", "M200,70 Q210,90 220,110", "M220,110 Q210,130 200,150", "M200,150 Q210,170 220,190", "M220,190 Q210,210 200,230", "M200,230 Q210,250 220,270", "M220,270 Q210,290 200,310", "M200,310 Q210,330 220,350", "M220,350 Q210,370 200,380"],
    front: ["M200,10 Q190,20 180,30", "M180,30 Q190,50 200,70", "M200,70 Q190,90 180,110", "M180,110 Q190,130 200,150", "M200,150 Q190,170 180,190", "M180,190 Q190,210 200,230", "M200,230 Q190,250 180,270", "M180,270 Q190,290 200,310", "M200,310 Q190,330 180,350", "M180,350 Q190,370 200,380"],
    side: ["M200,10 Q210,20 220,30", "M220,30 Q210,50 200,70", "M200,70 Q210,90 220,110", "M220,110 Q210,130 200,150", "M200,150 Q210,170 220,190", "M220,190 Q210,210 200,230", "M200,230 Q210,250 220,270", "M220,270 Q210,290 200,310", "M200,310 Q210,330 220,350", "M220,350 Q210,370 200,380"],
  },
  dysfunctionPatterns: [{"condition": "旋转功能障碍", "description": "螺旋线张力失衡，躯干旋转受限，步行代偿"}, {"condition": "下背痛伴旋转加重", "description": "腹斜肌/竖脊肌协调障碍，螺旋链中段失衡"}, {"condition": "功能性长短腿", "description": "螺旋线两侧张力不对称，骨盆-下肢代偿"}],
  recommendedTechniqueSequence: ["mfr_sl"],
  relatedDiagnoses: ["lumbar_strain", "sacroiliac_dysfunction", "patellofemoral_pain"],
};
