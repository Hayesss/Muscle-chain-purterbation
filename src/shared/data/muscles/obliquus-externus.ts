import type { MuscleEntry } from "../types";

export const obliquus_externus: MuscleEntry = {
  id: "obliquus_externus",
  name: { zh: "腹外斜肌", latin: "Musculus obliquus externus abdominis" },
  category: "trunk",
  view: ["front"],
  svgPath: {
    front: "M185,175 Q195,170 205,175 L208,230 Q195,235 182,230 Z"},
  origin: "第5-12肋骨外侧",
  insertion: "髂嵴前部、腹白线、耻骨结节",
  innervation: "肋间神经 (T7-T12), 髂腹下神经, 髂腹股沟神经",
  bloodSupply: "肋间动脉、腹壁上动脉",
  primaryActions: ["躯干同侧屈曲", "对侧旋转", "骨盆后倾"],
  secondaryActions: ["增加腹压", "辅助呼气"],
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
      downstream: ["internal-intercostals", "rectus_abdominis"],
    },
    {
      chainId: "segment_synergy_T7",
      position: "middle",
      upstream: ["transversus_abdominis"],
      downstream: [],
    },
  ],
  triggerPoints: [
    {
      id: "oe_tp1",
      location: "肌腹下部，髂嵴上方",
      svgCoordinates: { x: 50, y: 50 },
      referralPattern: {
        description: "腹股沟区、下腹部",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["下腹痛", "转身受限", "核心不稳"],
      recommendedTechniques: ["ischemic_compression_oe"],
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
