import type { MuscleEntry } from "../types";

export const biceps_brachii: MuscleEntry = {
  id: "biceps-brachii",
  name: { zh: "肱二头肌", latin: "Musculus biceps brachii" },
  category: "upper-limb",
  view: ["front"],
  svgPath: {
    "front": "M180,55 Q200,50 220,55 L220,85 Q200,90 180,85 Z"
  },
  origin: "长头：肩胛骨盂上结节；短头：肩胛骨喙突",
  insertion: "桡骨粗隆/前臂筋膜（二头肌腱膜）",
  innervation: "肌皮神经 (C5-C6)",
  bloodSupply: "肱动脉/旋肱前动脉",
  primaryActions: ["肘关节屈曲", "前臂旋后", "肩关节前屈（辅助）"],
  secondaryActions: ["提物功能"],
  joints: ["肘关节", "肩关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["abductor-digiti-minimi", "abductor-pollicis-brevis"],
      downstream: ["abductor-pollicis-longus", "adductor-pollicis"],
    },
    {
      chainId: "func_synergy_elbow_flexion",
      position: "middle",
      upstream: ["brachialis", "brachioradialis"],
      downstream: ["flexor-carpi-radialis", "flexor-carpi-ulnaris"],
    },
    {
      chainId: "segment_synergy_C5_C6",
      position: "middle",
      upstream: ["brachialis"],
      downstream: ["brachioradialis"],
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
