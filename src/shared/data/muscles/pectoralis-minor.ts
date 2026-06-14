import type { MuscleEntry } from "../types";

export const pectoralis_minor: MuscleEntry = {
  id: "pectoralis-minor",
  name: { zh: "胸小肌", latin: "Musculus pectoralis minor" },
  category: "shoulder",
  view: ["front"],
  svgPath: {
    "front": "M170,50 Q200,45 230,50 L230,80 Q200,85 170,80 Z"
  },
  origin: "第3-5肋前面",
  insertion: "肩胛骨喙突内侧面",
  innervation: "胸内侧神经 (C8-T1)",
  bloodSupply: "胸肩峰动脉/胸廓内动脉",
  primaryActions: ["肩胛骨前伸/下压/下回旋", "肋辅助上提（辅助吸气）"],
  secondaryActions: ["稳定肩胛骨"],
  joints: ["肩胛胸壁关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["coracobrachialis", "deltoid_anterior"],
      downstream: ["deltoid_middle", "deltoid_posterior"],
    },
    {
      chainId: "func_synergy_inspiration",
      position: "middle",
      upstream: ["diaphragm", "external-intercostals"],
      downstream: ["levatores-costarum-breves", "levatores-costarum-longi"],
    },
    {
      chainId: "segment_synergy_C8_T1",
      position: "middle",
      upstream: ["abductor-digiti-minimi"],
      downstream: ["abductor-pollicis-brevis"],
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
