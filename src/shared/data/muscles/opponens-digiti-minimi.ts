import type { MuscleEntry } from "../types";

export const opponens_digiti_minimi: MuscleEntry = {
  id: "opponens-digiti-minimi",
  name: { zh: "小指对掌肌", latin: "Musculus opponens digiti minimi" },
  category: "upper-limb",
  view: ["front"],
  svgPath: {
    "front": "M170,105 Q200,100 230,105 L230,130 Q200,135 170,130 Z"
  },
  origin: "钩骨钩/屈肌支持带",
  insertion: "第五掌骨内侧",
  innervation: "尺神经深支 (C8-T1)",
  bloodSupply: "尺动脉",
  primaryActions: ["小指对掌（第五掌骨前内旋转）"],
  secondaryActions: ["手杯状握持"],
  joints: ["小指腕掌关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["abductor-digiti-minimi", "abductor-pollicis-brevis"],
      downstream: ["abductor-pollicis-longus", "adductor-pollicis"],
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
