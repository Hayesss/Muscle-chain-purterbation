import type { MuscleEntry } from "../types";

export const medial_pterygoid: MuscleEntry = {
  id: "medial-pterygoid",
  name: { zh: "翼内肌", latin: "Musculus pterygoideus medialis" },
  category: "head-neck",
  view: ["side"],
  svgPath: {
    "side": "M218,42 Q228,38 235,45 Q228,55 218,50 Z"
  },
  origin: "翼突窝及腭骨锥突",
  insertion: "下颌骨内侧面下颌角/下颌支",
  innervation: "三叉神经下颌支 (V3)",
  bloodSupply: "上颌动脉翼肌支",
  primaryActions: ["上提下颌骨（闭口）", "前伸下颌骨", "侧向研磨"],
  secondaryActions: ["辅助咀嚼"],
  joints: ["颞下颌关节"],
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
