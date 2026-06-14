import type { MuscleEntry } from "../types";

export const platysma: MuscleEntry = {
  id: "platysma",
  name: { zh: "颈阔肌", latin: "Musculus platysma" },
  category: "head-neck",
  view: ["front", "side"],
  svgPath: {
    "front": "M170,55 Q200,50 230,55 L230,90 Q200,95 170,90 Z",
    "side": "M200,55 Q220,52 225,70 Q220,90 200,88 Z"
  },
  origin: "胸大肌/三角肌筋膜（锁骨下方）",
  insertion: "下颌骨下缘/口角皮肤/下唇",
  innervation: "面神经颈支 (VII)",
  bloodSupply: "颌下动脉/面动脉",
  primaryActions: ["降下颌（辅助张口）", "下拉下唇/口角", "颈前皮肤紧张"],
  secondaryActions: ["面部表情", "辅助深呼吸"],
  joints: ["无特定关节"],
    chains: [
    {
      chainId: "nerve_synergy_cranial_nerves",
      position: "middle",
      upstream: ["anterior-auricular", "antitragicus"],
      downstream: ["aryepiglotticus", "buccinator"],
    },
    {
      chainId: "func_synergy_oral_closure",
      position: "middle",
      upstream: ["depressor-anguli-oris", "depressor-labii-inferioris"],
      downstream: ["levator-anguli-oris", "levator-labii-superioris-alaeque-nasi"],
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
