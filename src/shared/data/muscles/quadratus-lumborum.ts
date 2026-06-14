import type { MuscleEntry } from "../types";

export const quadratus_lumborum: MuscleEntry = {
  id: "quadratus_lumborum",
  name: { zh: "腰方肌", latin: "Musculus quadratus lumborum" },
  category: "trunk",
  view: ["back"],
  svgPath: {
    back: "M185,165 Q195,160 205,165 L208,205 Q195,210 182,205 Z"},
  origin: "髂嵴后部、髂腰韧带",
  insertion: "L1-L4横突、第12肋",
  innervation: "腰丛 (T12-L3)",
  bloodSupply: "腰动脉、肋下动脉",
  primaryActions: ["脊柱侧屈（同侧）", "固定第12肋于吸气位"],
  secondaryActions: ["脊柱伸展辅助", "骨盆稳定"],
  joints: ["腰椎", "骶髂关节"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["diaphragm", "external-intercostals"],
      downstream: ["iliocostalis-thoracis", "innermost-intercostals"],
    },
    {
      chainId: "nerve_synergy_lumbar_plexus",
      position: "middle",
      upstream: ["cremaster", "iliopsoas"],
      downstream: ["adductor-brevis", "adductor-longus"],
    },
    {
      chainId: "func_synergy_spinal_extension",
      position: "middle",
      upstream: ["erector_spinae", "iliocostalis-lumborum"],
      downstream: ["iliocostalis-thoracis", "longissimus-thoracis"],
    },
    {
      chainId: "segment_synergy_T12",
      position: "middle",
      upstream: ["iliocostalis-thoracis"],
      downstream: ["obliquus_externus"],
    },
  ],
  triggerPoints: [
    {
      id: "ql_tp1",
      location: "肌腹中部，L2-L3水平髂嵴与第12肋之间",
      svgCoordinates: { x: 50, y: 50 },
      referralPattern: {
        description: "下背区、臀区、大腿外侧",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["下背痛", "单侧腰痛", "久坐加重", "深呼吸痛"],
      recommendedTechniques: ["ischemic_compression_ql"],
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
  relatedDiagnoses: ["lumbar_strain", "sacroiliac_dysfunction"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
