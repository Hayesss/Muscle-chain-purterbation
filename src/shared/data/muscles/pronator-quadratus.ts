import type { MuscleEntry } from "../types";

export const pronator_quadratus: MuscleEntry = {
  id: "pronator-quadratus",
  name: { zh: "旋前方肌", latin: "Musculus pronator quadratus" },
  category: "upper-limb",
  view: ["front"],
  svgPath: {
    "front": "M175,80 Q200,75 225,80 L225,110 Q200,115 175,110 Z"
  },
  origin: "尺骨前面远侧1/4",
  insertion: "桡骨前面远侧1/4",
  innervation: "正中神经 (C7-T1)",
  bloodSupply: "骨间前动脉/尺动脉",
  primaryActions: ["前臂旋前（核心）", "桡尺远侧关节稳定"],
  secondaryActions: ["旋前末段锁定"],
  joints: ["桡尺远侧关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["abductor-digiti-minimi", "abductor-pollicis-brevis"],
      downstream: ["abductor-pollicis-longus", "adductor-pollicis"],
    },
    {
      chainId: "func_synergy_forearm_pronation",
      position: "middle",
      upstream: ["brachioradialis", "pronator-teres"],
      downstream: [],
    },
    {
      chainId: "segment_synergy_C7_T1",
      position: "middle",
      upstream: ["flexor-carpi-ulnaris"],
      downstream: ["flexor-digitorum-superficialis"],
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
