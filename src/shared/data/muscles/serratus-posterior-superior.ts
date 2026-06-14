import type { MuscleEntry } from "../types";

export const serratus_posterior_superior: MuscleEntry = {
  id: "serratus-posterior-superior",
  name: { zh: "上后锯肌", latin: "Musculus serratus posterior superior" },
  category: "trunk",
  view: ["back"],
  svgPath: {
    "back": "M170,40 Q200,35 230,40 L230,80 Q200,85 170,80 Z"
  },
  origin: "项韧带下部/C7-T3棘突",
  insertion: "第2-5肋角外面",
  innervation: "肋间神经 (T2-T5)",
  bloodSupply: "肋间动脉/颈横动脉",
  primaryActions: ["上提肋骨（辅助吸气）"],
  secondaryActions: ["维持胸壁稳定"],
  joints: ["肋椎关节"],
    chains: [
    {
      chainId: "nerve_synergy_intercostal_nerves",
      position: "middle",
      upstream: ["external-intercostals", "innermost-intercostals"],
      downstream: ["internal-intercostals", "levatores-costarum-breves"],
    },
    {
      chainId: "func_synergy_inspiration",
      position: "middle",
      upstream: ["diaphragm", "external-intercostals"],
      downstream: ["levatores-costarum-breves", "levatores-costarum-longi"],
    },
    {
      chainId: "segment_synergy_T5",
      position: "middle",
      upstream: ["longissimus-capitis"],
      downstream: ["longissimus-cervicis"],
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
