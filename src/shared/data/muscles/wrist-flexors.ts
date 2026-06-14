import type { MuscleEntry } from "../types";

export const wrist_flexors: MuscleEntry = {
  id: "wrist_flexors",
  name: { zh: "腕屈肌群", latin: "Musculi flexores carpi" },
  category: "upper-limb",
  view: ["front"],
  svgPath: {
    front: "M190,260 Q200,256 210,260 L212,320 Q202,324 192,320 Z"
  },
  origin: "肱骨内上髁（共同起点）、尺骨/桡骨前面",
  insertion: "掌骨、腕骨、掌腱膜",
  innervation: "正中神经 (C6-C7), 尺神经 (C8-T1)",
  bloodSupply: "尺动脉、桡动脉",
  primaryActions: ["腕关节屈曲", "桡偏/尺偏", "手指屈曲辅助"],
  secondaryActions: ["握持辅助"],
  joints: ["腕关节", "指关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["abductor-digiti-minimi", "abductor-pollicis-brevis"],
      downstream: ["abductor-pollicis-longus", "adductor-pollicis"],
    },
    {
      chainId: "func_synergy_digit_flexion",
      position: "middle",
      upstream: ["abductor-digiti-minimi", "abductor-pollicis-brevis"],
      downstream: ["adductor-pollicis", "dorsal-interossei-hand"],
    },
    {
      chainId: "segment_synergy_C7",
      position: "middle",
      upstream: ["abductor-pollicis-longus"],
      downstream: ["anconeus"],
    },
  ],
  triggerPoints: [
    {
      id: "wf_tp1",
      location: "肌腹近端，前臂掌侧",
      svgCoordinates: { x: 50, y: 50 },
      referralPattern: {
        description: "前臂掌侧、腕前区",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["腕前酸痛", "屈腕无力", "握物受限"],
      recommendedTechniques: ["ischemic_compression_wf"],
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
  relatedDiagnoses: ["medial_epicondylitis", "carpal_tunnel_syndrome"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
