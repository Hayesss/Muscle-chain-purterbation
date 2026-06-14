import type { MuscleEntry } from "../types";

export const lateral_pterygoid: MuscleEntry = {
  id: "lateral-pterygoid",
  name: { zh: "翼外肌", latin: "Musculus pterygoideus lateralis" },
  category: "head-neck",
  view: ["side"],
  svgPath: {
    "side": "M218,42 Q228,38 235,45 Q228,55 218,50 Z"
  },
  origin: "蝶骨大翼下面及翼突外侧板",
  insertion: "下颌骨髁突颈部及关节盘",
  innervation: "三叉神经下颌支 (V3)",
  bloodSupply: "上颌动脉翼肌支",
  primaryActions: ["前伸下颌骨", "侧向研磨（对侧）", "张口（下降下颌骨）"],
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
      chainId: "func_synergy_mastication",
      position: "middle",
      upstream: ["buccinator", "medial-pterygoid"],
      downstream: ["mentalis", "orbicularis-oris"],
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
