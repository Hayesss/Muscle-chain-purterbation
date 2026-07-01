/**
 * 可点击人体图数据
 * ==================
 * 定义人体轮廓（正面/背面）SVG 以及每个疼痛位置对应的热点坐标。
 * 热点的 painId 引用 painPatterns.js 的 PainLocation.id，
 * 点击热点即等价于勾选该疼痛位置，接入现有"疼痛→责任肌肉"反查推理。
 *
 * 坐标基于 viewBox = 0 0 200 440（x 向右，y 向下）。
 */

/** SVG viewBox 尺寸 [宽, 高] */
export const BODY_VIEWBOX = [200, 440];

/** 视图定义 */
export const bodyViews = [
  { id: 'front', label: '正面' },
  { id: 'back', label: '背面' },
];

/**
 * 疼痛热点：painId + 所属视图 + 坐标（viewBox 内）
 * @type {{painId:string, view:'front'|'back', x:number, y:number}[]}
 */
export const bodyHotspots = [
  // —— 正面 ——
  { painId: 'temporal_headache', view: 'front', x: 120, y: 38 },
  { painId: 'anterior_shoulder_pain', view: 'front', x: 122, y: 108 },
  { painId: 'lateral_shoulder_pain', view: 'front', x: 148, y: 124 },
  { painId: 'lateral_hip_pain', view: 'front', x: 140, y: 208 },
  { painId: 'groin_pain', view: 'front', x: 92, y: 226 },
  // —— 背面 ——
  { painId: 'occipital_headache', view: 'back', x: 100, y: 40 },
  { painId: 'neck_shoulder_angle_pain', view: 'back', x: 122, y: 96 },
  { painId: 'interscapular_pain', view: 'back', x: 100, y: 130 },
  { painId: 'low_back_pain', view: 'back', x: 100, y: 188 },
  { painId: 'buttock_pain', view: 'back', x: 122, y: 214 },
  { painId: 'posterior_thigh_pain', view: 'back', x: 118, y: 300 },
];

/* 人体轮廓：四肢用圆头粗线（capsule），躯干/头用填充形状 */
const LIMBS_TRUNK = `
  <line class="limb" x1="66" y1="104" x2="40" y2="212" stroke-width="20" />
  <line class="limb" x1="134" y1="104" x2="160" y2="212" stroke-width="20" />
  <line class="limb" x1="84" y1="214" x2="80" y2="432" stroke-width="27" />
  <line class="limb" x1="116" y1="214" x2="120" y2="432" stroke-width="27" />
  <path class="trunk" d="M64,100 L86,90 L114,90 L136,100 L124,172 L138,208 L100,224 L62,208 L76,172 Z" />
  <rect class="trunk" x="90" y="62" width="20" height="26" rx="8" />
  <circle class="trunk" cx="100" cy="44" r="27" />
`;

const FACE = `
  <g class="face">
    <circle cx="91" cy="42" r="2.4" />
    <circle cx="109" cy="42" r="2.4" />
    <path d="M92,54 Q100,58 108,54" fill="none" />
  </g>
`;

const SPINE = `
  <g class="spine">
    <line x1="100" y1="94" x2="100" y2="206" stroke-dasharray="3 5" />
  </g>
`;

/**
 * 生成指定视图的人体轮廓 SVG 内部标记
 * @param {'front'|'back'} view
 */
export function buildSilhouette(view) {
  return LIMBS_TRUNK + (view === 'front' ? FACE : SPINE);
}
