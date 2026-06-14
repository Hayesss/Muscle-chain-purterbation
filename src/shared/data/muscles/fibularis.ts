import type { MuscleEntry } from "../types";

export const fibularis: MuscleEntry = {
  id: "fibularis",
  name: { zh: "腓骨肌群", latin: "Musculi fibulares" },
  category: "lower-limb",
  view: ["front", "side"],
  svgPath: {
    front: "M215,340 Q225,336 235,340 L238,380 Q225,384 212,380 Z",
    side: "M215,340 Q225,336 235,340 L238,380 Q225,384 212,380 Z"},
  origin: "腓骨头、腓骨外侧",
  insertion: "腓骨长肌：内侧楔骨、第1跖骨底；腓骨短肌：第5跖骨粗隆",
  innervation: "腓浅神经 (L4-S1)",
  bloodSupply: "腓动脉、胫前动脉",
  primaryActions: ["足外翻", "踝关节跖屈（辅助）"],
  secondaryActions: ["步态支撑相外侧稳定", "足弓支撑"],
  joints: ["踝关节", "距下关节"],
    chains: [
    {
      chainId: "nerve_synergy_sacral_plexus",
      position: "middle",
      upstream: ["adductors", "biceps_femoris"],
      downstream: ["extensor-digitorum-brevis", "extensor-digitorum-longus"],
    },
    {
      chainId: "func_synergy_ankle_plantarflexion",
      position: "middle",
      upstream: ["flexor-digitorum-longus", "flexor-hallucis-longus"],
      downstream: ["gastrocnemius", "peroneus-brevis"],
    },
    {
      chainId: "segment_synergy_L4",
      position: "middle",
      upstream: ["adductors"],
      downstream: ["extensor-digitorum-longus"],
    },
  ],
  triggerPoints: [
    {
      id: "fb_tp1",
      location: "肌腹上部，腓骨外侧",
      svgCoordinates: { x: 50, y: 50 },
      referralPattern: {
        description: "小腿外侧、足背外侧",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["小腿外侧痛", "足外翻无力", "踝关节不稳"],
      recommendedTechniques: ["ischemic_compression_fb"],
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
  relatedDiagnoses: ["ankle_sprain", "shin_splints"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
