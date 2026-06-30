/**
 * 肌肉扰动治疗系统 — 数据模型规范 (Schema)
 * ============================================
 * 本文件不含数据，仅用 JSDoc 定义各实体的字段结构，
 * 供 muscles.js / chains.js / movements.js / painPatterns.js / postureSyndromes.js 引用。
 *
 * 设计原则：
 *  - 所有实体以 id 作为唯一主键（英文 snake_case），便于图谱中互相引用。
 *  - 名称统一用 {zh, en, la} 三语对象（la = 拉丁解剖学名，可选）。
 *  - 关系（协同/拮抗/同链/牵涉痛）只存 id 引用，由推理引擎解析，避免数据冗余。
 *  - 字段尽量贴近临床查体与康复评估的真实工作流，方便专业人员校正补充。
 */

/**
 * @typedef {Object} LocalizedName
 * @property {string} zh 中文名
 * @property {string} en 英文名
 * @property {string} [la] 拉丁解剖学名（可选）
 */

/**
 * 治疗/康复方法建议
 * @typedef {Object} TreatmentPlan
 * @property {string[]} [manual]      徒手治疗（松解、激痛点、关节松动等）
 * @property {string[]} [stretch]     牵伸/放松（针对短缩紧张的肌肉）
 * @property {string[]} [strengthen]  强化/激活（针对被抑制无力的肌肉）
 * @property {string[]} [modality]    物理因子/其他（干针、热疗、电疗等）
 * @property {string[]} [reeducation] 动作再教育/神经肌肉控制训练
 */

/**
 * 肌肉节点（知识图谱的核心实体）
 * @typedef {Object} Muscle
 * @property {string} id                 唯一主键，如 'upper_trapezius'
 * @property {LocalizedName} name        三语名称
 * @property {string} region             所属身体区域 id（见 regions）
 * @property {string} [origin]           起点
 * @property {string} [insertion]        止点
 * @property {string} [innervation]      神经支配
 * @property {string[]} [actions]        功能动作 id 列表（关联 movements 的 action 维度）
 * @property {string[]} [synergists]     协同肌 id（共同完成动作，易代偿）
 * @property {string[]} [antagonists]    拮抗肌 id（作用相反，易失衡）
 * @property {string[]} [chains]         所属肌筋膜链 id 列表
 * @property {ReferredPain[]} [referredPain] 牵涉痛/激痛点模式
 * @property {('tight'|'weak'|'either')} [tendency] 常见功能障碍倾向：易紧张短缩 / 易被抑制无力 / 两者皆可
 * @property {string} [clinicalNote]     临床备注（常见综合征、鉴别要点等）
 * @property {TreatmentPlan} [treatment] 治疗康复方案
 */

/**
 * 牵涉痛模式
 * @typedef {Object} ReferredPain
 * @property {string} area   牵涉到的疼痛区域（自然语言描述）
 * @property {string} [painLocationId] 关联的标准疼痛位置 id（见 painPatterns，可选）
 * @property {string} [note] 备注
 */

/**
 * 肌筋膜链 / 经筋链
 * @typedef {Object} MyofascialChain
 * @property {string} id
 * @property {LocalizedName} name
 * @property {string} [system]    所属体系，如 'Anatomy Trains' / '中医经筋'
 * @property {string[]} muscles   链上肌肉 id（有顺序，从一端到另一端）
 * @property {string} [note]      功能/临床意义
 */

/**
 * 功能动作
 * @typedef {Object} Movement
 * @property {string} id
 * @property {LocalizedName} name
 * @property {string} [joint]          主要关节/部位
 * @property {string[]} primeMovers    主动肌 id（动作的主要发力肌）
 * @property {string[]} [synergists]   协同肌 id
 * @property {string[]} [stabilizers]  稳定肌 id
 * @property {string} [note]
 */

/**
 * 疼痛位置（用于"按疼痛部位反查责任肌肉"）
 * @typedef {Object} PainLocation
 * @property {string} id
 * @property {LocalizedName} name
 * @property {string} region
 * @property {string[]} candidateMuscles 该部位疼痛常见的责任/牵涉肌肉 id（按可能性大致排序）
 * @property {string} [note]
 */

/**
 * 姿势/肌力失衡综合征（整体模式识别）
 * @typedef {Object} PostureSyndrome
 * @property {string} id
 * @property {LocalizedName} name
 * @property {string[]} tightMuscles   典型紧张短缩肌 id
 * @property {string[]} weakMuscles    典型抑制无力肌 id
 * @property {string} description      模式描述
 * @property {string} [strategy]       总体处理策略
 */

/**
 * 身体区域
 * @typedef {Object} Region
 * @property {string} id
 * @property {LocalizedName} name
 */

export {}; // 纯类型文件
