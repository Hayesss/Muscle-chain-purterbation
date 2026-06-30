/**
 * 姿势/肌力失衡综合征 — 整体模式识别
 * 当查体/推理涉及的紧张-无力肌肉与某综合征的典型模式重叠时，
 * 推理引擎会提示对应的整体姿势模式，帮助"从整体角度看待疼痛"。
 *
 * @typedef {import('./schema.js').PostureSyndrome} PostureSyndrome
 */

/** @type {PostureSyndrome[]} */
export const postureSyndromes = [
  {
    id: 'upper_crossed_syndrome',
    name: { zh: '上交叉综合征', en: 'Upper Crossed Syndrome' },
    tightMuscles: ['upper_trapezius', 'levator_scapulae', 'pectoralis_major', 'pectoralis_minor', 'sternocleidomastoid'],
    weakMuscles: ['deep_neck_flexors', 'lower_trapezius', 'middle_trapezius', 'serratus_anterior'],
    description: '前伸头姿 + 圆肩驼背。紧张的上斜方/肩胛提肌/胸肌与被抑制的深层颈屈肌/中下斜方肌呈"交叉"分布。',
    strategy: '先松解紧张肌（上斜方、胸小肌、枕下），再激活被抑制肌（下斜方、前锯肌、深层颈屈），最后重建姿势与肩肱节律。',
  },
  {
    id: 'lower_crossed_syndrome',
    name: { zh: '下交叉综合征', en: 'Lower Crossed Syndrome' },
    tightMuscles: ['iliopsoas', 'rectus_femoris', 'erector_spinae', 'tensor_fasciae_latae'],
    weakMuscles: ['gluteus_maximus', 'rectus_abdominis', 'transversus_abdominis'],
    description: '骨盆前倾 + 腰椎过度前凸。紧张的髋屈肌/腰段竖脊肌与被抑制的臀大肌/腹肌呈"交叉"分布。',
    strategy: '松解髋屈肌与腰段竖脊肌，激活臀大肌与深层核心，重建骨盆中立与髋伸主导模式。',
  },
  {
    id: 'lateral_pelvic_instability',
    name: { zh: '冠状面骨盆失稳（臀中肌综合征）', en: 'Frontal-Plane Pelvic Instability' },
    tightMuscles: ['quadratus_lumborum', 'tensor_fasciae_latae', 'adductors'],
    weakMuscles: ['gluteus_medius'],
    description: '臀中肌无力导致单腿支撑期骨盆水平失控，常伴对侧腰方肌/同侧TFL代偿性紧张。',
    strategy: '强化臀中肌的单腿骨盆控制，松解代偿的腰方肌/TFL/内收肌，纠正步态与膝力线。',
  },
];

export const postureSyndromeById = Object.fromEntries(postureSyndromes.map((s) => [s.id, s]));
