import type { MuscleEntry } from "../types";

export const obliquus_internus: MuscleEntry = {
  id: "obliquus_internus",
  name: { zh: "腹内斜肌", latin: "Musculus obliquus internus abdominis" },
  category: "trunk",
  view: ["front"],
  svgPath: {
    front: "M180,175 Q190,170 200,175 L203,230 Q190,235 177,230 Z"
  },
  origin: "胸腰筋膜、髂嵴前部、腹股沟韧带外侧1/2",
  insertion: "第10-12肋下缘、腹白线、耻骨嵴",
  innervation: "肋间神经 (T8-T12), 髂腹下神经, 髂腹股沟神经",
  bloodSupply: "肋间动脉、腹壁上动脉",
  primaryActions: ["躯干同侧屈曲", "同侧旋转", "增加腹压"],
  secondaryActions: ["骨盆稳定"],
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
  ],
  triggerPoints: [
    {
      id: "oi_tp1",
      location: "肌腹下部，髂嵴前部上方",
      svgCoordinates: { x: 50, y: 50 },
      referralPattern: {
        description: "下腹部、腹股沟区",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["下腹痛", "转身受限", "核心不稳"],
      recommendedTechniques: ["ischemic_compression_oi"],
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
  relatedDiagnoses: ["lumbar_strain", "lumbar_hyperlordosis", "sacroiliac_dysfunction"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
