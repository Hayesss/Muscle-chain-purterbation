import type { MuscleEntry } from "../types";

export const diaphragm: MuscleEntry = {
  id: "diaphragm",
  name: { zh: "膈肌", latin: "Diaphragma" },
  category: "trunk",
  view: ["front"],
  svgPath: {
    front: "M185,155 Q200,150 215,155 L218,175 Q200,180 182,175 Z"
  },
  origin: "胸骨部：剑突后面；肋部：第7-12肋内面；腰部：L1-L3椎体、内外侧弓状韧带",
  insertion: "中心腱",
  innervation: "膈神经 (C3-C5)",
  bloodSupply: "膈上动脉、膈下动脉、肌膈动脉",
  primaryActions: ["主要吸气肌（增加胸腔容积）"],
  secondaryActions: ["增加腹压（咳嗽、排便、分娩）", "食管裂孔括约功能", "静脉回流辅助"],
  joints: ["胸腰椎", "肋骨"],
    chains: [
    {
      chainId: "nerve_synergy_brachial_plexus",
      position: "middle",
      upstream: ["external-intercostals", "iliocostalis-thoracis"],
      downstream: ["innermost-intercostals", "internal-intercostals"],
    },
    {
      chainId: "func_synergy_inspiration",
      position: "middle",
      upstream: ["external-intercostals", "levatores-costarum-breves"],
      downstream: ["levatores-costarum-longi", "quadratus_lumborum"],
    },
  ],
  triggerPoints: [
    {
      id: "dm_tp1",
      location: "肌腹穹隆顶部，剑突后方深部",
      svgCoordinates: { x: 50, y: 50 },
      referralPattern: {
        description: "剑突区、肋弓下缘、上腹正中",
        relatedSymptomRegions: [],
      },
      palpation: "按压紧张带产生特征性牵涉痛",
      symptoms: ["呼吸短促", "上腹不适", "呃逆", "吞咽不适"],
      recommendedTechniques: ["diaphragmatic_release"],
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
  relatedDiagnoses: ["lumbar_hyperlordosis", "upper_crossed_syndrome"],
  relatedTechniques: ["ischemic_compression"],
  relatedSymptomRegions: [],
};
