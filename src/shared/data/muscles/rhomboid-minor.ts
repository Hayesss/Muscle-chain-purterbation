import type { MuscleEntry } from "../types";

export const rhomboid_minor: MuscleEntry = {
  id: "rhomboid-minor",
  name: { zh: "菱形小肌", latin: "Musculus rhomboideus minor" },
  category: "shoulder",
  view: ["back"],
  svgPath: {
    "back": "M170,40 Q200,35 230,40 L230,80 Q200,85 170,80 Z"
  },
  origin: "C7-T1棘突及项韧带下部",
  insertion: "肩胛骨内侧缘（肩胛冈以上）",
  innervation: "肩胛背神经 (C4-C5)",
  bloodSupply: "肩胛背动脉",
  primaryActions: ["肩胛骨内收", "肩胛骨下回旋", "肩胛骨上提（辅助）"],
  secondaryActions: ["稳定肩胛骨于胸壁"],
  joints: ["肩胛胸壁关节"],
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
      upstream: ["coracobrachialis", "latissimus-dorsi"],
      downstream: ["pectoralis-major", "rhomboid-major"],
    },
    {
      chainId: "segment_synergy_C4",
      position: "middle",
      upstream: ["rhomboid-major"],
      downstream: ["rhomboids"],
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
