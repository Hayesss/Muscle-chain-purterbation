import type { MuscleEntry } from "../types";

export const lumbricals_hand: MuscleEntry = {
  id: "lumbricals-hand",
  name: { zh: "手蚓状肌", latin: "Musculi lumbricales (manus)" },
  category: "upper-limb",
  view: ["front"],
  svgPath: {
    "front": "M170,105 Q200,100 230,105 L230,130 Q200,135 170,130 Z"
  },
  origin: "指深屈肌腱桡侧（4条）",
  insertion: "指背腱膜（桡侧）",
  innervation: "正中神经（第1-2）/尺神经（第3-4）",
  bloodSupply: "掌浅弓/指动脉",
  primaryActions: ["掌指关节屈曲", "指间关节伸展"],
  secondaryActions: ["精细握持", "指分离控制"],
  joints: ["掌指关节", "近侧指间关节", "远侧指间关节"],
    chains: [
    {
      chainId: "func_synergy_digit_flexion",
      position: "middle",
      upstream: ["abductor-digiti-minimi", "abductor-pollicis-brevis"],
      downstream: ["adductor-pollicis", "dorsal-interossei-hand"],
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
