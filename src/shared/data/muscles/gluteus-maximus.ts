import type { MuscleEntry } from "../types";

export const gluteus_maximus: MuscleEntry = {
  id: "gluteus-maximus",
  name: { zh: "臀大肌", latin: "Musculus gluteus maximus" },
  category: "hip",
  view: ["back"],
  svgPath: {
    "back": "M170,80 Q200,72 230,80 L230,120 Q200,128 170,120 Z"
  },
  origin: "枕外隆凸/上项线/项韧带/C7-T12棘突",
  insertion: "锁骨外侧1/3/肩峰/肩胛冈",
  innervation: "副神经 (XI) + C3-C4",
  bloodSupply: "颈横动脉/肩胛背动脉",
  primaryActions: ["肩胛骨上提（上部）", "肩胛骨下降（下部）", "肩胛骨内收/上回旋（中部）", "头后伸/侧屈/对侧旋转"],
  secondaryActions: ["颈部稳定", "肩带稳定"],
  joints: ["寰枕关节", "颈椎", "肩锁关节", "胸锁关节"],
    chains: [
    {
      chainId: "nerve_synergy_cervical_plexus",
      position: "middle",
      upstream: ["geniohyoid", "longus-capitis"],
      downstream: ["obliquus-capitis-inferior", "obliquus-capitis-superior"],
    },
    {
      chainId: "nerve_synergy_cranial_nerves",
      position: "middle",
      upstream: ["anterior-auricular", "antitragicus"],
      downstream: ["aryepiglotticus", "buccinator"],
    },
    {
      chainId: "func_synergy_spinal_extension",
      position: "middle",
      upstream: ["adductor-magnus", "biceps_femoris"],
      downstream: ["erector_spinae", "iliocostalis-cervicis"],
    },
    {
      chainId: "segment_synergy_C3",
      position: "middle",
      upstream: ["diaphragm"],
      downstream: ["levator_scapulae"],
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
