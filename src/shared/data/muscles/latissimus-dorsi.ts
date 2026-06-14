import type { MuscleEntry } from "../types";

export const latissimus_dorsi: MuscleEntry = {
  id: "latissimus-dorsi",
  name: { zh: "背阔肌", latin: "Musculus latissimus dorsi" },
  category: "shoulder",
  view: ["back"],
  svgPath: {
    "back": "M170,40 Q200,35 230,40 L230,80 Q200,85 170,80 Z"
  },
  origin: "T7-L5棘突/骶骨/髂嵴/下3-4肋",
  insertion: "肱骨小结节嵴（结节间沟）",
  innervation: "胸背神经 (C6-C8)",
  bloodSupply: "胸背动脉",
  primaryActions: ["肩关节内收", "肩关节后伸", "肩关节内旋"],
  secondaryActions: ["辅助深呼吸（固定臂时）", "腰背部稳定"],
  joints: ["肩关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["coracobrachialis", "deltoid_anterior"],
      downstream: ["deltoid_middle", "deltoid_posterior"],
    },
    {
      chainId: "func_synergy_shoulder_adduction",
      position: "middle",
      upstream: ["coracobrachialis", "pectoralis-major"],
      downstream: ["rhomboid-major", "rhomboid-minor"],
    },
    {
      chainId: "segment_synergy_C6_C8",
      position: "middle",
      upstream: ["extensor-digitorum"],
      downstream: ["scalenus-posterior"],
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
