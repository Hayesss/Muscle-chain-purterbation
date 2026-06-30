/**
 * 疼痛位置 → 候选责任肌肉 映射（牵涉痛/激痛点反查）
 * 用于"输入疼痛部位 → 推断可能的责任肌肉"。
 * candidateMuscles 按临床常见度大致排序，引用 muscles.js 的 id。
 *
 * @typedef {import('./schema.js').PainLocation} PainLocation
 */

/** @type {PainLocation[]} */
export const painLocations = [
  {
    id: 'temporal_headache',
    name: { zh: '颞部/太阳穴头痛', en: 'Temporal Headache' },
    region: 'neck_shoulder',
    candidateMuscles: ['upper_trapezius', 'sternocleidomastoid', 'suboccipitals'],
    note: '紧张性/颈源性头痛常见；需排除原发性头痛与颅内病变。',
  },
  {
    id: 'occipital_headache',
    name: { zh: '枕后头痛', en: 'Occipital Headache' },
    region: 'neck_shoulder',
    candidateMuscles: ['suboccipitals', 'upper_trapezius', 'levator_scapulae'],
    note: '颈源性头痛核心；与前伸头姿相关。',
  },
  {
    id: 'neck_shoulder_angle_pain',
    name: { zh: '颈肩角酸痛 / 转头受限', en: 'Neck-Shoulder Angle Pain' },
    region: 'neck_shoulder',
    candidateMuscles: ['levator_scapulae', 'upper_trapezius', 'scalenes'],
    note: '久坐/落枕高频；鉴别颈椎小关节与神经根。',
  },
  {
    id: 'interscapular_pain',
    name: { zh: '肩胛间区疼痛', en: 'Interscapular Pain' },
    region: 'neck_shoulder',
    candidateMuscles: ['rhomboids', 'middle_trapezius', 'levator_scapulae'],
    note: '圆肩者菱形肌被拉长劳损；根源常在胸小肌紧张/前锯肌无力。',
  },
  {
    id: 'lateral_shoulder_pain',
    name: { zh: '肩外侧痛 / 上举痛弧', en: 'Lateral Shoulder Pain' },
    region: 'neck_shoulder',
    candidateMuscles: ['supraspinatus', 'infraspinatus', 'deltoid'],
    note: '肩峰下撞击/肩袖肌腱病典型；评估肩肱节律。',
  },
  {
    id: 'anterior_shoulder_pain',
    name: { zh: '肩前痛', en: 'Anterior Shoulder Pain' },
    region: 'neck_shoulder',
    candidateMuscles: ['subscapularis', 'pectoralis_minor', 'pectoralis_major'],
    note: '鉴别肱二头肌长头肌腱、盂唇问题。',
  },
  {
    id: 'low_back_pain',
    name: { zh: '下腰痛', en: 'Low Back Pain' },
    region: 'lumbopelvic_hip',
    candidateMuscles: ['quadratus_lumborum', 'erector_spinae', 'iliopsoas', 'multifidus'],
    note: '非特异性下背痛多见；务必排查红旗征与神经根/结构性病因。',
  },
  {
    id: 'buttock_pain',
    name: { zh: '臀深部痛 / 坐骨神经样', en: 'Deep Buttock Pain' },
    region: 'lumbopelvic_hip',
    candidateMuscles: ['piriformis', 'gluteus_medius', 'gluteus_maximus'],
    note: '梨状肌综合征 vs 腰椎间盘源性，需鉴别。',
  },
  {
    id: 'lateral_hip_pain',
    name: { zh: '髋外侧痛', en: 'Lateral Hip Pain' },
    region: 'lumbopelvic_hip',
    candidateMuscles: ['gluteus_medius', 'tensor_fasciae_latae'],
    note: '大转子疼痛综合征（臀中肌肌腱病/转子滑囊）。',
  },
  {
    id: 'groin_pain',
    name: { zh: '腹股沟/大腿内侧痛', en: 'Groin Pain' },
    region: 'lumbopelvic_hip',
    candidateMuscles: ['adductors', 'iliopsoas'],
    note: '内收肌肌腱病/运动疝鉴别；亦可为髋关节内病变牵涉。',
  },
  {
    id: 'posterior_thigh_pain',
    name: { zh: '大腿后侧痛', en: 'Posterior Thigh Pain' },
    region: 'lumbopelvic_hip',
    candidateMuscles: ['hamstrings', 'piriformis', 'gluteus_maximus'],
    note: '近端腘绳肌腱病 vs 神经源性，需鉴别。',
  },
];

export const painLocationById = Object.fromEntries(painLocations.map((p) => [p.id, p]));
