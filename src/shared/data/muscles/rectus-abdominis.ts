import type { MuscleEntry } from "../types";

export const rectus_abdominis: MuscleEntry = {
  id: "rectus_abdominis",
  name: { zh: "腹直肌", latin: "Musculus rectus abdominis" },
  category: "trunk",
  view: ["front"],
  svgPath: {
    front: "M192,180 Q200,176 208,180 L210,240 Q200,244 190,240 Z"},
  origin: "耻骨联合、耻骨嵴",
  insertion: "剑突、第5-7肋软骨前面",
  innervation: "肋间神经 (T6-T12)",
  bloodSupply: "腹壁上动脉、腹壁下动脉、肋间动脉",
  primaryActions: ["脊柱屈曲", "骨盆后倾", "增加腹压"],
  secondaryActions: ["辅助呼气", "躯干侧屈"],
  joints: ["脊柱", "骨盆"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["diaphragm", "external-intercostals"],
      downstream: ["iliocostalis-thoracis", "innermost-intercostals"],
    },
    {
      chainId: "nerve_synergy_intercostal_nerves",
      position: "middle",
      upstream: ["external-intercostals", "innermost-intercostals"],
      downstream: ["internal-intercostals", "levatores-costarum-breves"],
    },
    {
      chainId: "func_synergy_expiration",
      position: "middle",
      upstream: ["iliocostalis-lumborum", "innermost-intercostals"],
      downstream: ["internal-intercostals", "obliquus_externus"],
    },
    {
      chainId: "segment_synergy_T6",
      position: "middle",
      upstream: ["sternalis"],
      downstream: ["transversus-thoracis"],
    },
  ],
  triggerPoints: [
    {
      id: "ra_tp1",
      location: "肌腹中部，脐水平",
      svgCoordinates: { x: 50, y: 50 },
      referralPattern: {
        description: "下腹正中、剑突区",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["下背痛", "腹壁紧张", "核心无力"],
      recommendedTechniques: ["ischemic_compression_ra"],
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
  relatedDiagnoses: ["lumbar_strain", "lumbar_hyperlordosis"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
