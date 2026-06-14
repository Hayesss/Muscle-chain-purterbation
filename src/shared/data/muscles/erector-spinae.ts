import type { MuscleEntry } from "../types";

export const erectorSpinae: MuscleEntry = {
  id: "erector_spinae",
  name: { zh: "竖脊肌", latin: "Erector spinae" },
  category: "trunk",
  view: ["back"],
  svgPath: {
    back: "M185,120 Q200,115 215,120 L220,200 Q205,205 190,200 L185,120 Z M215,120 Q230,115 245,120 L250,200 Q235,205 220,200 L215,120 Z",},
  origin: "髂嵴后部、骶骨背面、腰椎及胸椎棘突、棘上韧带",
  insertion: "各椎骨横突、肋骨角、乳突及枕骨",
  innervation: "脊神经后支（节段性）",
  bloodSupply: "节段性腰动脉背侧支、肋间后动脉背侧支",
  primaryActions: ["脊柱后伸", "脊柱侧屈", "维持直立姿势"],
  secondaryActions: ["协助深呼吸", "对抗重力维持脊柱稳定"],
  joints: ["脊柱各节段"],
    chains: [
    {
      chainId: "nerve_synergy_dorsal_rami",
      position: "middle",
      upstream: ["iliocostalis-lumborum", "iliocostalis-thoracis"],
      downstream: ["interspinales-lumborum", "interspinales-thoracis"],
    },
    {
      chainId: "func_synergy_spinal_extension",
      position: "middle",
      upstream: ["iliocostalis-lumborum", "iliocostalis-thoracis"],
      downstream: ["longissimus-thoracis", "multifidus"],
    },
  ],
  triggerPoints: [
    {
      id: "es_tp1",
      location: "L3-L4水平，竖脊肌外侧束",
      svgCoordinates: { x: 50, y: 60 },
      referralPattern: {
        description: "沿腰骶区向臀区及大腿后侧放射，呈带状分布",
        relatedSymptomRegions: ["right_lower_back", "right_gluteal"],
      },
      palpation: "L3棘突旁开3-4cm，深层按压可触及紧张带",
      symptoms: ["下背痛", "晨起僵硬", "久坐加重", "弯腰受限"],
      recommendedTechniques: ["ischemic_compression_es", "mfr_es"],
    },
    {
      id: "es_tp2",
      location: "T10-T12水平，竖脊肌内侧束",
      svgCoordinates: { x: 50, y: 40 },
      referralPattern: {
        description: "沿下胸段向腹壁前外侧放射，呈环绕样",
        relatedSymptomRegions: ["right_upper_back", "right_lower_back"],
      },
      palpation: "T10棘突旁开2-3cm，深层按压产生牵涉痛",
      symptoms: ["胸腰交界区酸痛", "深呼吸痛", "躯干旋转受限"],
      recommendedTechniques: ["ischemic_compression_es"],
    },
  ],
  interventions: {
    manualTherapy: ["缺血性压迫", "肌筋膜释放（MFR）", "深层组织按摩", "脊柱松动术"],
    dryNeedling: "适合。靶点：竖脊肌外侧束紧张带。角度斜向棘突，深度20-40mm。注意胸膜及椎管。",
    stretching: [
      { position: "猫牛式（四足位脊柱屈伸）", duration: "10次×2组", caution: "避免过伸导致椎管狭窄症状" },
      { position: "婴儿式（跪坐位前屈）", duration: "60秒×2次", caution: "椎间盘突出急性期慎用" },
    ],
    strengthening: ["鸟狗式（Bird Dog）", "臀桥", "死虫式（Dead Bug）", "渐进核心稳定"],
    prognosis: "非特异性下背痛预后良好，80%患者6周内改善。慢性复发需姿势矫正与核心强化。",
    redFlags: ["鞍区麻木", "大小便功能障碍", "进行性肌无力", "不明原因体重下降", "夜间痛不缓解"],
  },
  relatedDiagnoses: ["lumbar_strain", "lumbar_spondylosis", "upper_crossed_syndrome"],
  relatedTechniques: ["ischemic_compression_es", "mfr_es"],
  relatedSymptomRegions: ["right_lower_back", "right_upper_back", "right_gluteal"],
  evidenceLevel: "A",
};
