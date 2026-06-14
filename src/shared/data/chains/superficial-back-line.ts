import type { MyofascialChain } from "../types";

export const superficial_back_line: MyofascialChain = {
  id: "superficial_back_line",
  name: { zh: "后表线", en: "Superficial Back Line" },
  color: "#E53935",
  description: "从足底筋膜经小腿后侧、大腿后侧、骶部、脊柱后侧至帽状腱膜/枕骨的连续性筋膜-肌肉链。负责维持身体直立姿势、控制屈曲-伸展节律。",
  muscles: ["plantar_fascia", "gastrocnemius", "soleus", "hamstrings", "sacrotuberous_ligament", "erector_spinae", "scalenes", "occipitalis"],
  svgPaths: {
    back: [
      "M200,380 L200,340",
      "M200,340 Q200,300 200,260",
      "M200,260 Q200,220 200,200",
      "M200,200 Q200,160 200,120",
      "M200,120 Q200,80 200,40",
      "M200,40 Q200,20 200,10",
    ],
    front: [],
    side: [
      "M210,380 L210,340",
      "M210,340 Q210,300 210,260",
      "M210,260 Q210,220 210,200",
      "M210,200 Q210,160 210,120",
      "M210,120 Q210,80 210,40",
    ],
  },
  dysfunctionPatterns: [
    { condition: "下背痛", description: "竖脊肌紧张+腘绳肌短缩，骨盆前倾或后倾代偿" },
    { condition: "颈前伸姿势", description: "枕下肌群紧张+上斜方肌代偿，后表线近端张力增高" },
    { condition: "足底筋膜炎", description: "后表线远端张力增高，足底筋膜牵拉过度" },
    { condition: "腘绳肌反复拉伤", description: "后表线中段张力失衡，臀-膝-踝链协调障碍" },
  ],
  recommendedTechniqueSequence: ["mfr_sbl_distal", "mfr_sbl_middle", "mfr_sbl_proximal"],
  relatedDiagnoses: ["lumbar_strain", "plantar_fasciitis", "hamstring_strain", "tension_headache"],
};

export const superficial_front_line: MyofascialChain = {
  id: "superficial_front_line",
  name: { zh: "前表线", en: "Superficial Front Line" },
  color: "#43A047",
  description: "从足背经胫骨前肌、股四头肌、腹直肌、胸骨肌/胸锁乳突肌至头皮筋膜的连续性筋膜-肌肉链。负责维持身体前侧稳定、控制伸展-屈曲节律。",
  muscles: ["tibialis_anterior", "quadriceps", "rectus_abdominis", "sternalis", "sternocleidomastoid", "scalp_fascia"],
  svgPaths: {
    front: [
      "M200,380 L200,340",
      "M200,340 Q200,300 200,260",
      "M200,260 Q200,220 200,180",
      "M200,180 Q200,140 200,100",
      "M200,100 Q200,60 200,40",
      "M200,40 Q200,20 200,10",
    ],
    back: [],
    side: [
      "M210,380 L210,340",
      "M210,340 Q210,300 210,260",
      "M210,260 Q210,220 210,180",
      "M210,180 Q210,140 210,100",
      "M210,100 Q210,60 210,40",
    ],
  },
  dysfunctionPatterns: [
    { condition: "膝前痛", description: "股四头肌紧张+髌骨轨迹异常，前表线中段张力失衡" },
    { condition: "腰椎前凸增加", description: "腹直肌无力+竖脊肌紧张，前后表线张力失衡" },
    { condition: "颈前伸", description: "胸锁乳突肌短缩+枕下肌群紧张，前后表线近端失衡" },
    { condition: "踝关节背屈受限", description: "胫骨前肌紧张或无力，前表线远端功能障碍" },
  ],
  recommendedTechniqueSequence: ["mfr_sfl_distal", "mfr_sfl_middle", "mfr_sfl_proximal"],
  relatedDiagnoses: ["patellofemoral_pain", "lumbar_hyperlordosis", "anterior_ankle_impingement"],
};
