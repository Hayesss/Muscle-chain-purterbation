import type { MuscleEntry } from "../types";

export const subclavius: MuscleEntry = {
  id: "subclavius",
  name: { zh: "锁骨下肌", latin: "Musculus subclavius" },
  category: "shoulder",
  view: ["front"],
  svgPath: {
    "front": "M170,50 Q200,45 230,50 L230,80 Q200,85 170,80 Z"
  },
  origin: "第1肋及肋软骨",
  insertion: "锁骨下面中外1/3",
  innervation: "锁骨下神经 (C5-C6)",
  bloodSupply: "胸肩峰动脉/胸廓内动脉",
  primaryActions: ["锁骨下降/前伸", "加固胸锁关节"],
  secondaryActions: ["稳定肩带"],
  joints: ["胸锁关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["coracobrachialis", "deltoid_anterior"],
      downstream: ["deltoid_middle", "deltoid_posterior"],
    },
    {
      chainId: "segment_synergy_C5_C6",
      position: "middle",
      upstream: ["deltoid_anterior"],
      downstream: ["deltoid_middle"],
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
