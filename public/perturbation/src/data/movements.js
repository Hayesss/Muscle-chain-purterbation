/**
 * 功能动作 — 肌肉映射种子数据
 * 用于回答："做什么动作需要哪些肌肉"、"损伤哪些肌肉后动作会受限"。
 * primeMovers / synergists / stabilizers 均引用 muscles.js 的 id。
 *
 * @typedef {import('./schema.js').Movement} Movement
 */

/** @type {Movement[]} */
export const movements = [
  // —— 颈部 ——
  { id: 'cervical_flexion', name: { zh: '颈椎屈曲', en: 'Cervical Flexion' }, joint: '颈椎',
    primeMovers: ['sternocleidomastoid'], synergists: ['scalenes'], stabilizers: ['deep_neck_flexors'] },
  { id: 'cervical_extension', name: { zh: '颈椎伸展', en: 'Cervical Extension' }, joint: '颈椎',
    primeMovers: ['upper_trapezius', 'suboccipitals'], synergists: ['levator_scapulae'], stabilizers: [] },
  { id: 'cervical_rotation', name: { zh: '颈椎旋转', en: 'Cervical Rotation' }, joint: '颈椎',
    primeMovers: ['sternocleidomastoid', 'levator_scapulae'], synergists: ['upper_trapezius', 'suboccipitals'], stabilizers: [] },
  { id: 'cervical_lateral_flexion', name: { zh: '颈椎侧屈', en: 'Cervical Lateral Flexion' }, joint: '颈椎',
    primeMovers: ['scalenes', 'sternocleidomastoid'], synergists: ['upper_trapezius', 'levator_scapulae'], stabilizers: [] },

  // —— 肩胛 ——
  { id: 'scapular_elevation', name: { zh: '肩胛上提（耸肩）', en: 'Scapular Elevation' }, joint: '肩胛胸壁',
    primeMovers: ['upper_trapezius', 'levator_scapulae'], synergists: ['rhomboids'], stabilizers: [] },
  { id: 'scapular_depression', name: { zh: '肩胛下沉', en: 'Scapular Depression' }, joint: '肩胛胸壁',
    primeMovers: ['lower_trapezius'], synergists: ['serratus_anterior'], stabilizers: [] },
  { id: 'scapular_retraction', name: { zh: '肩胛后缩（夹肩）', en: 'Scapular Retraction' }, joint: '肩胛胸壁',
    primeMovers: ['middle_trapezius', 'rhomboids'], synergists: ['lower_trapezius'], stabilizers: [] },
  { id: 'scapular_protraction', name: { zh: '肩胛前伸', en: 'Scapular Protraction' }, joint: '肩胛胸壁',
    primeMovers: ['serratus_anterior'], synergists: ['pectoralis_minor'], stabilizers: [] },
  { id: 'scapular_upward_rotation', name: { zh: '肩胛上回旋', en: 'Scapular Upward Rotation' }, joint: '肩胛胸壁',
    primeMovers: ['serratus_anterior', 'lower_trapezius'], synergists: ['upper_trapezius'], stabilizers: [],
    note: '手臂上举的关键节律；前锯肌/下斜方肌无力时上举受限并易撞击。' },

  // —— 肩关节 ——
  { id: 'shoulder_abduction', name: { zh: '肩外展（侧平举）', en: 'Shoulder Abduction' }, joint: '盂肱关节',
    primeMovers: ['deltoid', 'supraspinatus'], synergists: ['serratus_anterior', 'lower_trapezius'],
    stabilizers: ['infraspinatus', 'subscapularis', 'teres_minor'],
    note: '需肩袖向心稳定肱骨头 + 肩胛上回旋；任一环节失能即上举痛/受限。' },
  { id: 'shoulder_flexion', name: { zh: '肩前屈（前平举）', en: 'Shoulder Flexion' }, joint: '盂肱关节',
    primeMovers: ['deltoid', 'pectoralis_major'], synergists: ['serratus_anterior'], stabilizers: ['rotator_cuff'] },
  { id: 'shoulder_external_rotation', name: { zh: '肩外旋', en: 'Shoulder External Rotation' }, joint: '盂肱关节',
    primeMovers: ['infraspinatus', 'teres_minor'], synergists: ['deltoid'], stabilizers: [] },
  { id: 'shoulder_internal_rotation', name: { zh: '肩内旋', en: 'Shoulder Internal Rotation' }, joint: '盂肱关节',
    primeMovers: ['subscapularis', 'pectoralis_major'], synergists: [], stabilizers: [] },
  { id: 'shoulder_adduction', name: { zh: '肩内收', en: 'Shoulder Adduction' }, joint: '盂肱关节',
    primeMovers: ['pectoralis_major'], synergists: ['latissimus_dorsi'], stabilizers: [] },

  // —— 脊柱/核心 ——
  { id: 'spine_extension', name: { zh: '脊柱伸展（后仰）', en: 'Spine Extension' }, joint: '脊柱',
    primeMovers: ['erector_spinae'], synergists: ['multifidus', 'quadratus_lumborum'], stabilizers: ['transversus_abdominis'] },
  { id: 'spine_flexion', name: { zh: '脊柱屈曲（前弯）', en: 'Spine Flexion' }, joint: '脊柱',
    primeMovers: ['rectus_abdominis'], synergists: ['iliopsoas'], stabilizers: ['transversus_abdominis'] },
  { id: 'spine_lateral_flexion', name: { zh: '脊柱侧屈', en: 'Spine Lateral Flexion' }, joint: '脊柱',
    primeMovers: ['quadratus_lumborum'], synergists: ['erector_spinae'], stabilizers: [] },
  { id: 'core_stabilization', name: { zh: '核心稳定', en: 'Core Stabilization' }, joint: '腰骨盆',
    primeMovers: ['transversus_abdominis', 'multifidus'], synergists: ['erector_spinae', 'rectus_abdominis'], stabilizers: [],
    note: '深层核心前馈激活；缺失与下背痛复发相关。' },

  // —— 髋/下肢 ——
  { id: 'hip_flexion', name: { zh: '屈髋', en: 'Hip Flexion' }, joint: '髋',
    primeMovers: ['iliopsoas'], synergists: ['rectus_femoris', 'tensor_fasciae_latae'], stabilizers: ['transversus_abdominis'] },
  { id: 'hip_extension', name: { zh: '伸髋', en: 'Hip Extension' }, joint: '髋',
    primeMovers: ['gluteus_maximus'], synergists: ['hamstrings'], stabilizers: ['multifidus', 'transversus_abdominis'],
    note: '臀大肌为主动肌；臀肌被抑制时由腘绳肌/竖脊肌代偿，是下背/腘绳问题的常见机制。' },
  { id: 'hip_abduction', name: { zh: '髋外展', en: 'Hip Abduction' }, joint: '髋',
    primeMovers: ['gluteus_medius'], synergists: ['tensor_fasciae_latae', 'gluteus_maximus'], stabilizers: [],
    note: '单腿站立时维持骨盆水平；臀中肌无力→Trendelenburg、膝外翻。' },
  { id: 'hip_adduction', name: { zh: '髋内收', en: 'Hip Adduction' }, joint: '髋',
    primeMovers: ['adductors'], synergists: ['iliopsoas'], stabilizers: [] },
  { id: 'hip_external_rotation', name: { zh: '髋外旋', en: 'Hip External Rotation' }, joint: '髋',
    primeMovers: ['piriformis', 'gluteus_maximus'], synergists: ['gluteus_medius'], stabilizers: [] },
  { id: 'knee_extension', name: { zh: '伸膝', en: 'Knee Extension' }, joint: '膝',
    primeMovers: ['rectus_femoris'], synergists: [], stabilizers: [] },
  { id: 'knee_flexion', name: { zh: '屈膝', en: 'Knee Flexion' }, joint: '膝',
    primeMovers: ['hamstrings'], synergists: [], stabilizers: [] },

  // —— 复合功能动作（多肌肉协同，演示"动作→肌肉"链路）——
  { id: 'overhead_reach', name: { zh: '上举过头（取高处物品）', en: 'Overhead Reach' }, joint: '肩-肩胛复合',
    primeMovers: ['deltoid', 'supraspinatus'], synergists: ['serratus_anterior', 'lower_trapezius', 'upper_trapezius'],
    stabilizers: ['infraspinatus', 'subscapularis', 'teres_minor'],
    note: '依赖肩肱节律：肩胛上回旋 + 肩袖向心稳定。任一受损即上举受限/疼痛弧。' },
  { id: 'sit_to_stand', name: { zh: '坐到站', en: 'Sit-to-Stand' }, joint: '髋-膝',
    primeMovers: ['gluteus_maximus', 'rectus_femoris'], synergists: ['hamstrings', 'erector_spinae'],
    stabilizers: ['transversus_abdominis', 'gluteus_medius'],
    note: '臀大肌无力者用躯干前倾/腘绳代偿，长期增加腰部负荷。' },
  { id: 'gait_stance_phase', name: { zh: '步行支撑相', en: 'Gait — Stance Phase' }, joint: '骨盆-下肢',
    primeMovers: ['gluteus_medius', 'gluteus_maximus'], synergists: ['quadratus_lumborum', 'adductors'],
    stabilizers: ['multifidus', 'transversus_abdominis'],
    note: '单腿支撑期骨盆水平由臀中肌维持；无力→代偿性腰方肌过度活跃、对侧骨盆下沉。' },
];

export const movementById = Object.fromEntries(movements.map((m) => [m.id, m]));
