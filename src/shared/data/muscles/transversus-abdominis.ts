import type { MuscleEntry } from "../types";

export const transversus_abdominis: MuscleEntry = {
  id: "transversus_abdominis",
  name: { zh: "腹横肌", latin: "Musculus transversus abdominis" },
  category: "trunk",
  view: ["front"],
  svgPath: {
    front: "M185,180 Q195,176 205,180 L208,235 Q195,240 182,235 Z"
  },
  origin: "胸腰筋膜、髂嵴前部、腹股沟韧带外侧1/3、第7-12肋内面",
  insertion: "腹白线、耻骨嵴",
  innervation: "肋间神经 (T7-T12), 髂腹下神经, 髂腹股沟神经",
  bloodSupply: "肋间动脉、腹壁上/下动脉",
  primaryActions: ["增加腹压", "躯干稳定（核心）", "腰部压缩（束腰效应）"],
  secondaryActions: ["辅助呼吸", "排便/分娩辅助"],
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
      chainId: "segment_synergy_T7",
      position: "middle",
      upstream: ["obliquus_externus"],
      downstream: [],
    },
  ],
  triggerPoints: [
    {
      id: "ta_tp1",
      location: "肌腹外侧，腋中线至髂嵴之间",
      svgCoordinates: { x: 50, y: 50 },
      referralPattern: {
        description: "侧腹区、下腹部",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["侧腹酸痛", "核心无力", "腹压不稳"],
      recommendedTechniques: ["ischemic_compression_ta"],
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
