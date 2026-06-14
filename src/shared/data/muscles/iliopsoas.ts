import type { MuscleEntry } from "../types";

export const iliopsoas: MuscleEntry = {
  id: "iliopsoas",
  name: { zh: "髂腰肌", latin: "Musculus iliopsoas" },
  category: "trunk",
  view: ["front"],
  svgPath: {
    front: "M185,210 Q195,205 205,210 L208,250 Q195,255 182,250 Z"},
  origin: "腰大肌：T12-L5椎体；髂肌：髂窝",
  insertion: "股骨小转子",
  innervation: "腰丛 (L1-L3)",
  bloodSupply: "腰动脉、髂腰动脉、股动脉",
  primaryActions: ["髋关节屈曲", "腰椎屈曲（腰大肌）"],
  secondaryActions: ["腰椎侧屈", "骨盆前倾"],
  joints: ["髋关节", "腰椎"],
    chains: [
    {
      chainId: "nerve_synergy_lumbar_plexus",
      position: "middle",
      upstream: ["cremaster", "quadratus_lumborum"],
      downstream: ["adductor-brevis", "adductor-longus"],
    },
    {
      chainId: "func_synergy_hip_flexion",
      position: "middle",
      upstream: ["adductor-brevis", "adductor-longus"],
      downstream: ["adductors", "gracilis"],
    },
    {
      chainId: "segment_synergy_L1_L3",
      position: "middle",
      upstream: ["iliocostalis-lumborum"],
      downstream: ["psoas-major"],
    },
  ],
  triggerPoints: [
    {
      id: "ip_tp1",
      location: "肌腹上部，髂窝深部",
      svgCoordinates: { x: 50, y: 50 },
      referralPattern: {
        description: "腹股沟区、大腿前内侧、下背",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["腹股沟区痛", "屈髋受限", "久坐后站立痛"],
      recommendedTechniques: ["ischemic_compression_ip"],
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
  relatedDiagnoses: ["lumbar_strain", "hip_impingement", "lumbar_hyperlordosis"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
