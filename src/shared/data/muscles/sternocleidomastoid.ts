import type { MuscleEntry } from "../types";

export const sternocleidomastoid: MuscleEntry = {
  id: "sternocleidomastoid",
  name: { zh: "胸锁乳突肌", latin: "Sternocleidomastoideus" },
  category: "head-neck",
  view: ["front", "side"],
  svgPath: {
    front: "M200,55 L210,55 L220,80 L215,100 L205,100 L200,80 Z",
    side: "M210,55 L220,55 L225,80 L220,100 L210,100 L205,80 Z"},
  origin: "胸骨柄前面、锁骨内侧1/3",
  insertion: "颞骨乳突、枕骨上项线外侧",
  innervation: "副神经 (CN XI), C2-C3",
  bloodSupply: "枕动脉、甲状腺上动脉",
  primaryActions: ["头颈部屈曲", "头颈部向同侧旋转", "头颈部侧屈"],
  secondaryActions: ["辅助深呼吸", "维持头颈部姿势"],
  joints: ["寰枕关节", "颈椎"],
    chains: [
    {
      chainId: "nerve_synergy_cervical_plexus",
      position: "middle",
      upstream: ["geniohyoid", "longus-capitis"],
      downstream: ["obliquus-capitis-inferior", "obliquus-capitis-superior"],
    },
    {
      chainId: "func_synergy_spinal_lateral_flexion",
      position: "middle",
      upstream: ["iliocostalis-cervicis", "intertransversarii-cervicis"],
      downstream: ["levator_scapulae", "longissimus-capitis"],
    },
    {
      chainId: "segment_synergy_C3",
      position: "middle",
      upstream: ["levator_scapulae"],
      downstream: ["longus-capitis"],
    },
  ],
  triggerPoints: [
    {
      id: "scm_tp1",
      location: "肌腹中部，胸锁乳突肌后缘",
      svgCoordinates: { x: 50, y: 50 },
      referralPattern: {
        description: "耳后、枕区、太阳穴",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["头晕", "平衡障碍", "耳鸣"],
      recommendedTechniques: ["ischemic_compression_scm"],
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
  relatedDiagnoses: ["tension_headache", "cervical_spondylosis", "upper_crossed_syndrome"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
