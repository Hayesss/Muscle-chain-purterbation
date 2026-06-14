import type { MuscleEntry } from "../types";

export const quadriceps_femoris: MuscleEntry = {
  id: "quadriceps_femoris",
  name: { zh: "股四头肌", latin: "Musculus quadriceps femoris" },
  category: "lower-limb",
  view: ["front"],
  svgPath: {
    front: "M185,280 Q200,276 215,280 L218,340 Q200,344 182,340 Z"},
  origin: "股直肌：髂前下棘；股外侧肌/内侧肌/中间肌：股骨粗线、转子间线",
  insertion: "经髌韧带至胫骨粗隆",
  innervation: "股神经 (L2-L4)",
  bloodSupply: "股动脉分支",
  primaryActions: ["膝关节伸展", "髋关节屈曲（股直肌）"],
  secondaryActions: ["稳定髌骨", "步行支撑相"],
  joints: ["膝关节", "髋关节（股直肌）"],
    chains: [
    {
      chainId: "nerve_synergy_lumbar_plexus",
      position: "middle",
      upstream: ["adductors", "adductor-brevis"],
      downstream: ["adductor-longus", "adductor-magnus"],
    },
    {
      chainId: "func_synergy_hip_flexion",
      position: "middle",
      upstream: ["adductors", "adductor-brevis"],
      downstream: ["adductor-longus", "gracilis"],
    },
    {
      chainId: "segment_synergy_L2",
      position: "middle",
      upstream: ["adductors"],
      downstream: ["adductor-brevis"],
    },
  ],
  triggerPoints: [
    {
      id: "qf_tp1",
      location: "股直肌肌腹中上部，大腿前侧",
      svgCoordinates: { x: 50, y: 50 },
      referralPattern: {
        description: "膝前区、大腿前侧",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["膝前痛", "蹲起痛", "下楼梯痛", "股直肌紧张"],
      recommendedTechniques: ["ischemic_compression_qf"],
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
  relatedDiagnoses: ["patellofemoral_pain", "patellar_tendinopathy", "knee_pain"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
