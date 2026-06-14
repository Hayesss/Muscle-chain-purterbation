import type { MuscleEntry } from "../types";

export const upperTrapezius: MuscleEntry = {
  id: "upper_trapezius",
  name: { zh: "上斜方肌", latin: "Trapezius, pars descendens" },
  category: "shoulder",
  view: ["back", "side"],
  svgPath: {
    back: "M180,60 Q200,55 220,60 L230,80 Q210,85 190,80 L180,60 Z M220,60 Q240,55 260,60 L250,80 Q230,85 210,80 L220,60 Z",
    side: "M200,60 Q210,55 220,60 L225,80 Q215,85 205,80 L200,60 Z",},
  origin: "枕外隆凸、枕骨上项线内侧1/3、项韧带、C7棘突",
  insertion: "锁骨外侧1/3后缘",
  innervation: "副神经 (CN XI)，C3-C4感觉支",
  bloodSupply: "颈横动脉升支",
  primaryActions: ["肩胛骨上提", "肩胛骨上回旋", "头颈部侧屈", "头颈部后伸", "头颈部向对侧旋转"],
  secondaryActions: ["协助肩胛骨后缩", "协助深呼吸"],
  joints: ["肩胛胸壁关节", "颈椎"],
    chains: [
    {
      chainId: "nerve_synergy_cervical_plexus",
      position: "middle",
      upstream: ["trapezius", "geniohyoid"],
      downstream: ["gluteus-maximus", "longus-capitis"],
    },
    {
      chainId: "func_synergy_spinal_extension",
      position: "middle",
      upstream: ["trapezius", "adductor-magnus"],
      downstream: ["biceps_femoris", "erector_spinae"],
    },
    {
      chainId: "segment_synergy_C3",
      position: "middle",
      upstream: ["trapezius"],
      downstream: ["diaphragm"],
    },
  ],
  triggerPoints: [
    {
      id: "ut_tp1",
      location: "肌腹中部偏内侧，C7-T1水平",
      svgCoordinates: { x: 50, y: 45 },
      referralPattern: {
        description: "沿颈后外侧向上放射至枕区，向外侧放射至肩峰及肩胛冈",
        relatedSymptomRegions: ["right_neck_posterior", "right_shoulder_posterior"],
      },
      palpation: "在C7棘突外侧约2-3cm处，可触及紧张带，按压产生特征性牵涉痛",
      symptoms: ["颈后僵硬", "枕区头痛", "肩带沉重感", "转头受限"],
      recommendedTechniques: ["ischemic_compression_ut", "deep_friction_ut"],
      dryNeedling: { safe: true, depthMm: 15, angle: "垂直", cautionZones: ["椎动脉区"] },
    },
    {
      id: "ut_tp2",
      location: "肌腹外侧部，肩峰上方",
      svgCoordinates: { x: 70, y: 50 },
      referralPattern: {
        description: "沿肩峰外侧放射至三角肌区，偶向耳后放射",
        relatedSymptomRegions: ["right_shoulder_lateral"],
      },
      palpation: "肩峰上方2cm处，肌腹外侧缘，可触及明显结节",
      symptoms: ["肩峰区酸痛", "侧屈受限", "背包肩带区疼痛"],
      recommendedTechniques: ["ischemic_compression_ut"],
    },
  ],
  interventions: {
    manualTherapy: ["缺血性压迫（Ischemic Compression）", "深层摩擦按摩（Deep Friction Massage）", "肌筋膜释放（MFR）"],
    dryNeedling: "适合。靶点：肌腹中部紧张带。进针角度垂直，深度10-20mm。注意避开椎动脉及肺尖。",
    stretching: [
      { position: "坐位，头向对侧屈并前屈，同侧手固定肩胛骨", duration: "30秒×3次", caution: "避免过度侧屈导致臂丛牵拉" },
    ],
    strengthening: ["肩胛骨下沉训练（Y-T-W-L）", "颈深屈肌协同激活", "渐进负荷耸肩"],
    taping: "肌内效贴布：从肩峰向枕部贴扎，促进淋巴回流与本体感觉",
    prognosis: "单纯肌筋膜疼痛预后良好，2-4周可显著改善。合并颈椎退变或姿势异常需长期管理。",
    redFlags: ["上肢无力或麻木（提示神经根病变）", "持续加重的夜间痛", "近期外伤史伴颈椎活动严重受限"],
  },
  relatedDiagnoses: ["subacromial_impingement", "tension_headache", "upper_crossed_syndrome", "cervical_spondylosis"],
  relatedTechniques: ["ischemic_compression_ut", "deep_friction_ut", "mfr_ut"],
  relatedSymptomRegions: ["right_neck_posterior", "right_shoulder_posterior", "right_shoulder_lateral"],
  evidenceLevel: "B",
  references: [
    { title: "Travell & Simons' Myofascial Pain and Dysfunction: The Trigger Point Manual", doi: "10.1002/mus.880130214" },
  ],
};
