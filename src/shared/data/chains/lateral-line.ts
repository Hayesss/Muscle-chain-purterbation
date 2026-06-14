import type { MyofascialChain } from "../types";

export const lateral_line: MyofascialChain = {
  id: "lateral_line",
  name: { zh: "体侧线", en: "Lateral Line" },
  color: "#FB8C00",
  description: "从足外侧经腓骨肌群、髂胫束/阔筋膜张肌、臀中肌/臀小肌、腹外斜肌/腹内斜肌、肋间肌至斜方肌/肩胛提肌/胸锁乳突肌的连续性筋膜-肌肉链。负责维持身体侧向稳定、控制侧屈-平衡。",
  muscles: ["fibularis", "tensor_fasciae_latae", "iliotibial_band", "gluteus_medius", "gluteus_minimus", "obliquus_externus", "obliquus_internus", "intercostals", "upper_trapezius", "levator_scapulae", "sternocleidomastoid"],
  svgPaths: {
    back: ["M215,380 L225,340", "M225,340 Q225,300 225,260", "M225,260 Q225,220 225,200", "M225,200 Q225,160 225,120", "M225,120 Q225,80 225,40"],
    front: ["M215,380 L225,340", "M225,340 Q225,300 225,260", "M225,260 Q225,220 225,200", "M225,200 Q225,160 225,120", "M225,120 Q225,80 225,40"],
    side: ["M215,380 L225,340", "M225,340 Q225,300 225,260", "M225,260 Q225,220 225,200", "M225,200 Q225,160 225,120", "M225,120 Q225,80 225,40"],
  },
  dysfunctionPatterns: [{"condition": "膝外侧痛（ITBS）", "description": "髂胫束/阔筋膜张肌紧张+臀中肌无力，体侧线近端张力失衡"}, {"condition": "脊柱侧弯", "description": "体侧线两侧张力不对称，骨盆-肩带代偿"}, {"condition": "踝关节反复扭伤", "description": "体侧线远端张力不足，腓骨肌群+臀中肌协调障碍"}],
  recommendedTechniqueSequence: ["mfr_ll_distal", "mfr_ll_middle", "mfr_ll_proximal"],
  relatedDiagnoses: ["iliotibial_band_syndrome", "patellofemoral_pain", "ankle_sprain"],
};
