import type { MuscleEntry } from "../types";

export const wrist_extensors: MuscleEntry = {
  id: "wrist_extensors",
  name: { zh: "腕伸肌群", latin: "Musculi extensores carpi" },
  category: "upper-limb",
  view: ["front"],
  svgPath: {
    front: "M210,260 Q220,256 230,260 L232,320 Q222,324 212,320 Z"
  },
  origin: "肱骨外上髁（共同起点）",
  insertion: "第2-5掌骨背侧",
  innervation: "桡神经 (C6-C8)",
  bloodSupply: "骨间后动脉",
  primaryActions: ["腕关节伸展", "桡偏/尺偏"],
  secondaryActions: ["握持稳定"],
  joints: ["腕关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["abductor-digiti-minimi", "abductor-pollicis-brevis"],
      downstream: ["abductor-pollicis-longus", "adductor-pollicis"],
    },
    {
      chainId: "func_synergy_wrist_extension",
      position: "middle",
      upstream: ["abductor-pollicis-longus", "extensor-carpi-radialis-brevis"],
      downstream: ["extensor-carpi-radialis-longus", "extensor-carpi-ulnaris"],
    },
    {
      chainId: "segment_synergy_C6_C8",
      position: "middle",
      upstream: ["extensor-digitorum"],
      downstream: ["triceps-brachii"],
    },
  ],
  triggerPoints: [
    {
      id: "we_tp1",
      location: "肌腹近端，前臂背侧",
      svgCoordinates: { x: 50, y: 50 },
      referralPattern: {
        description: "前臂背侧、腕背区",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["前臂背侧酸痛", "腕背疼痛", "网球肘"],
      recommendedTechniques: ["ischemic_compression_we"],
    },
  ],
  interventions: {
    manualTherapy: ["缺血性压迫", "深层摩擦按摩", "肌筋膜释放"],
    dryNeedling: "适合。注意局部解剖结构及安全区。",
    stretching: [{ position: "渐进拉伸", duration: "30秒×3次", caution: "避免暴力牵拉" }],
    strengthening: ["渐进抗阻训练"],
    prognosis: "单纯肌筋膜疼痛预后良好。",
    redFlags: ["进行性肌无力", "夜间痛不缓解", "不明原因体重下降"],
  },
  relatedDiagnoses: ["lateral_epicondylitis", "tennis_elbow"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
