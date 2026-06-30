/**
 * 肌筋膜链 / 经筋链 — 种子数据
 * 主要参考 Thomas Myers《解剖列车 Anatomy Trains》体系（通用整理，供校正）。
 * 链上肌肉用 muscles.js 中的 id 引用；这是"整体看待疼痛、预测连带"的核心结构之一。
 *
 * @typedef {import('./schema.js').MyofascialChain} MyofascialChain
 */

/** @type {MyofascialChain[]} */
export const chains = [
  {
    id: 'superficial_back_line',
    name: { zh: '后表线', en: 'Superficial Back Line (SBL)' },
    system: 'Anatomy Trains',
    muscles: ['suboccipitals', 'erector_spinae', 'hamstrings'],
    note: '从足底经后侧到颅顶，维持直立伸展姿势；一处紧张可沿链上下传导（如腘绳紧张→腰/枕下）。',
  },
  {
    id: 'superficial_front_line',
    name: { zh: '前表线', en: 'Superficial Front Line (SFL)' },
    system: 'Anatomy Trains',
    muscles: ['sternocleidomastoid', 'rectus_abdominis', 'rectus_femoris', 'pectoralis_major'],
    note: '前侧屈曲链；与后表线相对抗，前伸头姿/骨盆前倾常见前后链失衡。',
  },
  {
    id: 'lateral_line',
    name: { zh: '体侧线', en: 'Lateral Line (LL)' },
    system: 'Anatomy Trains',
    muscles: ['quadratus_lumborum', 'gluteus_medius', 'tensor_fasciae_latae'],
    note: '维持冠状面稳定；与骨盆侧倾、单侧腰痛、髋外侧痛相关。',
  },
  {
    id: 'spiral_line',
    name: { zh: '螺旋线', en: 'Spiral Line (SPL)' },
    system: 'Anatomy Trains',
    muscles: ['upper_trapezius', 'tensor_fasciae_latae', 'gluteus_maximus'],
    note: '螺旋缠绕全身，参与旋转与力线传递；失衡影响足弓-骨盆-头颈的旋转对位。',
  },
  {
    id: 'deep_front_line',
    name: { zh: '深前线', en: 'Deep Front Line (DFL)' },
    system: 'Anatomy Trains',
    muscles: ['iliopsoas', 'transversus_abdominis', 'multifidus', 'adductors'],
    note: '身体核心深层支撑链；与呼吸、核心稳定、骨盆-脊柱深层控制密切相关。',
  },
  {
    id: 'back_functional_line',
    name: { zh: '后功能线', en: 'Back Functional Line (BFL)' },
    system: 'Anatomy Trains',
    muscles: ['gluteus_maximus'],
    note: '对角线力量传递（如对侧肩-臀），参与投掷、行走摆动相的交叉发力。',
  },
  {
    id: 'front_functional_line',
    name: { zh: '前功能线', en: 'Front Functional Line (FFL)' },
    system: 'Anatomy Trains',
    muscles: ['pectoralis_major'],
    note: '对角线前侧力量传递，参与对侧上下肢协同动作。',
  },
  {
    id: 'deep_front_arm_line',
    name: { zh: '臂深前线', en: 'Deep Front Arm Line' },
    system: 'Anatomy Trains',
    muscles: ['pectoralis_minor'],
    note: '上肢深前链；胸小肌紧张经此影响肩胛位置与上肢神经血管通道。',
  },
];

export const chainById = Object.fromEntries(chains.map((c) => [c.id, c]));
