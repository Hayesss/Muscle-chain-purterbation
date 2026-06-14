import type { MuscleEntry } from "../types";

export const peroneus_brevis: MuscleEntry = {
  id: "peroneus-brevis",
  name: { zh: "腓骨短肌", latin: "Musculus peroneus brevis" },
  category: "lower-limb",
  view: ["side"],
  svgPath: {
    "side": "M215,155 Q232,148 238,180 Q232,200 215,195 Z"
  },
  origin: "腓骨外侧面下1/3/腓骨前/后肌间隔",
  insertion: "第五跖骨粗隆",
  innervation: "腓浅神经 (L5-S1)",
  bloodSupply: "腓动脉/胫前动脉",
  primaryActions: ["足外翻（外展）", "足跖屈（辅助）"],
  secondaryActions: ["步态站立期足外侧稳定", "防踝内翻扭伤"],
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
      upstream: ["fibularis", "flexor-digitorum-longus"],
      downstream: ["flexor-hallucis-longus", "gastrocnemius"],
    },
    {
      chainId: "segment_synergy_L5_S1",
      position: "middle",
      upstream: ["extensor-digitorum-brevis"],
      downstream: ["extensor-hallucis-brevis"],
    },
  ],
  triggerPoints: [],
  interventions: {
    manualTherapy: ["触诊评估", "软组织松解"],
    dryNeedling: "临床评估后决定。",
    stretching: [{ position: "温和牵伸位", duration: "20-30秒", caution: "避免过度牵拉" }],
    strengthening: ["渐进抗阻训练"],
    prognosis: "预后良好，配合康复训练可恢复。",
    redFlags: ["进行性加重", "伴随神经症状", "不明原因体重下降"],
  },
  relatedDiagnoses: [],
  relatedTechniques: [],
  relatedSymptomRegions: [],
};
