import type { MuscleEntry } from "../types";

export const quadratus_plantae: MuscleEntry = {
  id: "quadratus-plantae",
  name: { zh: "足底方肌", latin: "Musculus quadratus plantae" },
  category: "lower-limb",
  view: ["front"],
  svgPath: {
    "front": "M170,175 Q200,170 230,175 L230,195 Q200,200 170,195 Z"
  },
  origin: "跟骨结节下面/足底长韧带",
  insertion: "趾长屈肌腱外侧缘",
  innervation: "足底外侧神经 (S1-S2)",
  bloodSupply: "足底外侧动脉",
  primaryActions: ["趾长屈肌腱方向纠正（趾屈曲）", "第2-5趾屈曲（辅助）"],
  secondaryActions: ["足底精细抓地控制"],
  joints: ["跖趾关节", "趾间关节"],
    chains: [
    {
      chainId: "func_synergy_digit_flexion",
      position: "middle",
      upstream: ["abductor-digiti-minimi-foot", "abductor-hallucis"],
      downstream: ["adductor-hallucis", "dorsal-interossei-foot"],
    },
    {
      chainId: "segment_synergy_S1_S2",
      position: "middle",
      upstream: ["abductor-digiti-minimi-foot"],
      downstream: ["abductor-hallucis"],
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
