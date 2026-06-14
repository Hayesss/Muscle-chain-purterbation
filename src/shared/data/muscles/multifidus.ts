import type { MuscleEntry } from "../types";

export const multifidus: MuscleEntry = {
  id: "multifidus",
  name: { zh: "多裂肌", latin: "Musculus multifidus" },
  category: "trunk",
  view: ["back"],
  svgPath: {
    back: "M192,130 Q200,127 208,130 L210,195 Q200,198 190,195 Z"
  },
  origin: "骶骨背面、髂嵴后部、腰椎乳突、胸椎横突",
  insertion: "上位椎骨棘突（跨越2-4节椎骨）",
  innervation: "脊神经后支（节段性）",
  bloodSupply: "节段性腰动脉、肋间后动脉",
  primaryActions: ["脊柱后伸", "脊柱侧屈（同侧）", "脊柱旋转（对侧）"],
  secondaryActions: ["节段性脊柱稳定"],
  joints: ["脊柱各节段"],
    chains: [
    {
      chainId: "nerve_synergy_dorsal_rami",
      position: "middle",
      upstream: ["erector_spinae", "iliocostalis-lumborum"],
      downstream: ["iliocostalis-thoracis", "interspinales-lumborum"],
    },
    {
      chainId: "func_synergy_spinal_extension",
      position: "middle",
      upstream: ["erector_spinae", "iliocostalis-lumborum"],
      downstream: ["iliocostalis-thoracis", "longissimus-thoracis"],
    },
  ],
  triggerPoints: [
    {
      id: "mf_tp1",
      location: "L4-L5水平，棘突旁开2-3cm深部",
      svgCoordinates: { x: 50, y: 60 },
      referralPattern: {
        description: "腰骶区深部、臀区",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["深部下背痛", "脊柱节段性不稳", "久坐加重"],
      recommendedTechniques: ["ischemic_compression_mf"],
    },
  ],
  interventions: {
    manualTherapy: ["缺血性压迫", "深层摩擦按摩", "肌筋膜释放"],
    dryNeedling: "适合。注意局部解剖结构及安全区。",
    stretching: [{ position: "渐进拉伸", duration: "30秒×3次", caution: "避免暴力牵拉" }],
    strengthening: ["渐进抗阻训练"],
    prognosis: "单纯肌筋膜疼痛预后良好。",
    redFlags: ["进行性肌无力", "夜间痛不缓解", "不明原因体重下降"],
  },
  relatedDiagnoses: ["lumbar_strain", "lumbar_spondylosis", "lumbar_disc_herniation"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
