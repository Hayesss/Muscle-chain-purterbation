import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BodyMap } from "../../shared/components/BodyMap/BodyMap";
import { InfoPanel } from "../../shared/components/InfoPanel/InfoPanel";
import { EvidenceBadge } from "../../shared/components/EvidenceBadge/EvidenceBadge";
import { useAtlasStore } from "../../shared/stores/useAtlasStore";
import { useTreatmentStore } from "../../shared/stores/useTreatmentStore";
import { useUIStore } from "../../shared/stores/useUIStore";
import { regionsById, diagnosesById, techniquesById, musclesById, specialTestsById } from "../../shared/data";
import { ChevronRight, Play, Pause, SkipForward, SkipBack, AlertTriangle, CheckCircle, HelpCircle, BarChart3 } from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

// 疗效时间线模拟数据
const OUTCOME_MOCK_DATA = [
  { session: "基线", vas: 7, rom: 60, function: 40 },
  { session: "第1次", vas: 6, rom: 65, function: 45 },
  { session: "第2次", vas: 5, rom: 72, function: 52 },
  { session: "第3次", vas: 4, rom: 78, function: 60 },
  { session: "第4次", vas: 3, rom: 85, function: 70 },
  { session: "第6次", vas: 2, rom: 90, function: 80 },
  { session: "第8次", vas: 1, rom: 95, function: 90 },
];

export const TreatmentPage: React.FC = () => {
  const navigate = useNavigate();
  const treatmentStore = useTreatmentStore();
  const atlasStore = useAtlasStore();
  const uiStore = useUIStore();
  const [activeTab, setActiveTab] = useState("assessment");
  const [assessmentAnswers, setAssessmentAnswers] = useState<Record<string, string[]>>({});

  const phase = treatmentStore.currentPhase;
  const selectedRegions = treatmentStore.selectedRegionIds.map((id) => regionsById[id]).filter(Boolean);
  const diagnosis = treatmentStore.selectedDiagnosisId ? diagnosesById[treatmentStore.selectedDiagnosisId] : null;
  const technique = treatmentStore.selectedTechniqueId ? techniquesById[treatmentStore.selectedTechniqueId] : null;

  const tabs = [
    { id: "assessment", label: "评估" },
    { id: "diagnosis", label: "诊断" },
    { id: "treatment", label: "治疗" },
    { id: "outcome", label: "复评" },
  ];

  // 虚拟演示自动播放
  useEffect(() => {
    if (!technique || !treatmentStore.demoPlaying) return;
    const interval = setInterval(() => {
      if (treatmentStore.demoCurrentStep < technique.steps.length - 1) {
        treatmentStore.setDemoStep(treatmentStore.demoCurrentStep + 1);
      } else {
        treatmentStore.setDemoPlaying(false);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [technique, treatmentStore.demoPlaying, treatmentStore.demoCurrentStep]);

  const handleDiagnosisSelect = (diagId: string) => {
    treatmentStore.selectDiagnosis(diagId);
    treatmentStore.setPhase("treatment");
  };

  const handleTechniqueSelect = (techId: string) => {
    treatmentStore.selectTechnique(techId);
  };

  const handleToMuscle = (muscleId: string) => {
    atlasStore.selectMuscle(muscleId);
    atlasStore.setHighlight({
      type: "muscle",
      ids: [muscleId],
      style: { fill: "#FF6B35", opacity: 0.8, pulse: true },
    });
    navigate("/atlas");
    uiStore.setMode("atlas");
    uiStore.setInfoPanelOpen(true);
  };

  const toggleAssessmentAnswer = (regionId: string, answer: string) => {
    setAssessmentAnswers((prev) => {
      const current = prev[regionId] || [];
      const next = current.includes(answer)
        ? current.filter((a) => a !== answer)
        : [...current, answer];
      return { ...prev, [regionId]: next };
    });
  };

  // 计算诊断置信度（简化算法：基于症状区域匹配度）
  const getDiagnosisConfidence = (diagId: string) => {
    const d = diagnosesById[diagId];
    if (!d) return 0;
    const regionMatch = selectedRegions.filter((r) => d.relatedSymptomRegions.includes(r.id)).length;
    const totalRegions = Math.max(selectedRegions.length, 1);
    const base = (regionMatch / totalRegions) * 100;
    // 证据等级加权
    const evidenceWeight = d.evidenceLevel === "A" ? 1.2 : d.evidenceLevel === "B" ? 1.1 : 1.0;
    return Math.min(Math.round(base * evidenceWeight), 98);
  };

  return (
    <div className="h-full flex">
      {/* 左侧边栏 */}
      <aside className="w-72 bg-white border-r border-gray-200 flex flex-col shrink-0">
        {/* 阶段导航 */}
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-3">临床流程</h3>
          <div className="space-y-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => treatmentStore.setPhase(t.id as any)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                  phase === t.id
                    ? "bg-medical-50 text-medical-700 border border-medical-200"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <ChevronRight size={14} className={phase === t.id ? "text-medical-600" : "text-gray-400"} />
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* 案例摘要 */}
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-2">当前案例</h3>
          {selectedRegions.length === 0 ? (
            <p className="text-sm text-gray-400">请在人体图上选择症状区域</p>
          ) : (
            <div className="space-y-2">
              <p className="text-sm text-gray-700">
                <span className="font-medium">症状区域：</span>
                {selectedRegions.map((r) => r.name).join("、")}
              </p>
              {diagnosis && (
                <p className="text-sm text-gray-700">
                  <span className="font-medium">主要诊断：</span>
                  {diagnosis.name}
                </p>
              )}
            </div>
          )}
        </div>

        {/* 已选区域列表 */}
        <div className="p-4 flex-1 overflow-y-auto">
          <h3 className="font-semibold text-gray-800 mb-2">已选区域</h3>
          {selectedRegions.length === 0 ? (
            <p className="text-sm text-gray-400">点击人体图选择症状区域</p>
          ) : (
            <div className="space-y-2">
              {selectedRegions.map((region) => (
                <div key={region.id} className="medical-card p-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{region.name}</span>
                    <button
                      onClick={() => treatmentStore.toggleRegion(region.id)}
                      className="text-xs text-red-500 hover:text-red-700"
                    >
                      移除
                    </button>
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {region.assessmentTemplate.painQualities.slice(0, 3).map((q) => (
                      <span key={q} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">{q}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </aside>

      {/* 主画布区 */}
      <div className="flex-1 relative flex">
        {/* 人体图 */}
        <div className="flex-1 relative">
          <BodyMap mode="treatment" />
        </div>

        {/* 右侧信息面板 */}
        <InfoPanel
          open={uiStore.infoPanelOpen || selectedRegions.length > 0 || !!diagnosis || !!technique}
          onClose={() => uiStore.setInfoPanelOpen(false)}
          title={
            technique ? "虚拟治疗演示"
            : diagnosis ? "鉴别诊断"
            : selectedRegions.length > 0 ? "症状评估"
            : "治疗模式"
          }
          tabs={technique ? [{ id: "demo", label: "演示" }, { id: "detail", label: "详情" }] : undefined}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        >
          {/* 评估阶段 - 症状区域详情 + 问卷 */}
          {phase === "assessment" && selectedRegions.length > 0 && !diagnosis && (
            <div className="space-y-4">
              {selectedRegions.map((region) => (
                <div key={region.id} className="medical-card p-3">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">{region.name}</h4>
                  <div className="space-y-3">
                    {/* 疼痛性质问卷 */}
                    <div>
                      <p className="text-xs text-gray-500 mb-1">疼痛性质（多选）</p>
                      <div className="flex flex-wrap gap-1">
                        {region.assessmentTemplate.painQualities.map((q) => {
                          const selected = (assessmentAnswers[region.id] || []).includes(q);
                          return (
                            <button
                              key={q}
                              onClick={() => toggleAssessmentAnswer(region.id, q)}
                              className={`px-2 py-1 text-xs rounded-md transition-colors ${
                                selected
                                  ? "bg-medical-100 text-medical-700 border border-medical-200"
                                  : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-transparent"
                              }`}
                            >
                              {selected ? "✓ " : ""}{q}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">诱发动作</p>
                      <p className="text-sm text-gray-600">{region.assessmentTemplate.typicalAggravatingMoves.join("、")}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">缓解动作</p>
                      <p className="text-sm text-gray-600">{region.assessmentTemplate.typicalEasingMoves.join("、")}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">推荐特殊检查</p>
                      <div className="space-y-1">
                        {region.assessmentTemplate.specialTests.map((testId) => {
                          const test = specialTestsById[testId];
                          if (!test) return null;
                          return (
                            <div key={testId} className="flex items-center gap-2 text-sm">
                              <HelpCircle size={14} className="text-medical-500" />
                              <span className="text-gray-700">{test.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">相关肌肉</p>
                      <div className="flex flex-wrap gap-1">
                        {region.relatedMuscles.slice(0, 5).map((mId) => {
                          const m = musclesById[mId];
                          if (!m) return null;
                          return (
                            <button
                              key={mId}
                              onClick={() => handleToMuscle(mId)}
                              className="px-2 py-0.5 bg-medical-50 text-medical-700 text-xs rounded-full hover:bg-medical-100"
                            >
                              {m.name.zh}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* 推荐诊断 */}
              <div className="medical-card p-3">
                <h4 className="font-semibold text-sm text-gray-700 mb-2">可能诊断</h4>
                <div className="space-y-2">
                  {Array.from(new Set(selectedRegions.flatMap((r) => r.relatedDiagnoses))).slice(0, 5).map((dId) => {
                    const d = diagnosesById[dId];
                    if (!d) return null;
                    return (
                      <button
                        key={dId}
                        onClick={() => handleDiagnosisSelect(dId)}
                        className="w-full text-left p-2.5 rounded-lg border border-gray-200 hover:border-medical-300 hover:bg-medical-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-800">{d.name}</span>
                          <EvidenceBadge level={d.evidenceLevel} size="sm" />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{d.typicalSymptoms.slice(0, 2).join("、")}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* 诊断阶段 - 鉴别诊断决策树 */}
          {phase === "diagnosis" && (
            <div className="space-y-4">
              <div className="medical-card p-3">
                <h4 className="font-semibold text-sm text-gray-700 mb-3">鉴别诊断决策树</h4>
                <div className="space-y-3">
                  {Object.values(diagnosesById).map((d) => {
                    const confidence = getDiagnosisConfidence(d.id);
                    const isSelected = treatmentStore.selectedDiagnosisId === d.id;
                    return (
                      <div
                        key={d.id}
                        className={`w-full text-left p-3 rounded-lg border mb-2 transition-colors ${
                          isSelected
                            ? "border-medical-400 bg-medical-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <button
                          onClick={() => handleDiagnosisSelect(d.id)}
                          className="w-full text-left"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-gray-800">{d.name}</span>
                            <EvidenceBadge level={d.evidenceLevel} size="sm" />
                          </div>
                          <p className="text-xs text-gray-500">{d.nameEn}</p>
                        </button>

                        {/* 置信度条 */}
                        <div className="mt-2">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-gray-500">匹配置信度</span>
                            <span className={`font-semibold ${confidence >= 70 ? "text-green-600" : confidence >= 40 ? "text-amber-600" : "text-gray-500"}`}>
                              {confidence}%
                            </span>
                          </div>
                          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${confidence >= 70 ? "bg-green-500" : confidence >= 40 ? "bg-amber-500" : "bg-gray-400"}`}
                              style={{ width: `${confidence}%` }}
                            />
                          </div>
                        </div>

                        {/* 决策节点 */}
                        <div className="mt-2 bg-gray-50 rounded p-2">
                          <p className="text-xs text-gray-600">
                            <span className="font-medium">关键问题：</span>{d.decisionTreeNode.question}
                          </p>
                          <div className="mt-1 flex flex-wrap gap-1">
                            {d.decisionTreeNode.positiveSigns.slice(0, 3).map((s) => (
                              <span key={s} className="px-1.5 py-0.5 bg-green-50 text-green-700 text-xs rounded">✓ {s}</span>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={() => handleDiagnosisSelect(d.id)}
                          className={`mt-2 w-full py-1.5 rounded text-xs font-medium transition-colors ${
                            isSelected
                              ? "bg-medical-600 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {isSelected ? "已选择此诊断" : "选择此诊断"}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* 治疗阶段 - 方案 + 演示 */}
          {phase === "treatment" && diagnosis && (
            <div className="space-y-4">
              <div className="medical-card p-3">
                <h4 className="font-semibold text-sm text-gray-700 mb-2">治疗方案：{diagnosis.name}</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">推荐手法</p>
                    <div className="space-y-1.5">
                      {diagnosis.recommendedTechniques.map((techId) => {
                        const t = techniquesById[techId];
                        if (!t) return null;
                        return (
                          <button
                            key={techId}
                            onClick={() => handleTechniqueSelect(techId)}
                            className={`w-full text-left p-2 rounded-md border transition-colors flex items-center gap-2 ${
                              treatmentStore.selectedTechniqueId === techId
                                ? "border-medical-400 bg-medical-50"
                                : "border-gray-200 hover:bg-gray-50"
                            }`}
                          >
                            <Play size={14} className="text-medical-600" />
                            <span className="text-sm text-gray-700">{t.name}</span>
                            <EvidenceBadge level={t.evidenceLevel} size="sm" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">受累肌肉</p>
                    <div className="flex flex-wrap gap-1">
                      {diagnosis.relatedMuscles.map((mId) => {
                        const m = musclesById[mId];
                        if (!m) return null;
                        return (
                          <button
                            key={mId}
                            onClick={() => handleToMuscle(mId)}
                            className="px-2 py-0.5 bg-medical-50 text-medical-700 text-xs rounded-full hover:bg-medical-100"
                          >
                            {m.name.zh}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="bg-red-50 border border-red-100 rounded-lg p-2.5">
                    <p className="text-xs font-medium text-red-700 flex items-center gap-1">
                      <AlertTriangle size={12} /> 红旗症状
                    </p>
                    <ul className="mt-1 space-y-0.5">
                      {diagnosis.redFlags.map((r, i) => (
                        <li key={i} className="text-xs text-red-600">• {r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 复评阶段 - 疗效时间线 */}
          {phase === "outcome" && (
            <div className="space-y-4">
              <div className="medical-card p-3">
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 size={16} className="text-medical-600" />
                  <h4 className="font-semibold text-sm text-gray-700">疗效时间线</h4>
                </div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={OUTCOME_MOCK_DATA} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorVas" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorRom" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorFunc" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="session" tick={{ fontSize: 11 }} stroke="#9CA3AF" />
                      <YAxis tick={{ fontSize: 11 }} stroke="#9CA3AF" />
                      <Tooltip
                        contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E5E7EB" }}
                      />
                      <Legend wrapperStyle={{ fontSize: 12 }} />
                      <Area type="monotone" dataKey="vas" name="VAS疼痛" stroke="#EF4444" fillOpacity={1} fill="url(#colorVas)" strokeWidth={2} />
                      <Area type="monotone" dataKey="rom" name="ROM活动度" stroke="#3B82F6" fillOpacity={1} fill="url(#colorRom)" strokeWidth={2} />
                      <Area type="monotone" dataKey="function" name="功能评分" stroke="#10B981" fillOpacity={1} fill="url(#colorFunc)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-gray-400 mt-2">* 以上为模拟疗效数据，实际疗效因个体差异而异</p>
              </div>

              <div className="medical-card p-3">
                <h4 className="font-semibold text-sm text-gray-700 mb-2">治疗目标追踪</h4>
                <div className="space-y-2">
                  {[
                    { goal: "VAS疼痛评分 ≤ 3", current: "1", target: "3", achieved: true },
                    { goal: "肩关节外展 ROM ≥ 150°", current: "145°", target: "150°", achieved: false },
                    { goal: "可独立完成梳头动作", current: "部分完成", target: "独立完成", achieved: false },
                  ].map((g, i) => (
                    <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm text-gray-700">{g.goal}</p>
                        <p className="text-xs text-gray-500">当前：{g.current} | 目标：{g.target}</p>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${g.achieved ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                        {g.achieved ? "已达成" : "进行中"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 虚拟治疗演示 */}
          {technique && (
            <div className="space-y-4">
              <div className="medical-card p-3">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-sm text-gray-700">{technique.name}</h4>
                  <EvidenceBadge level={technique.evidenceLevel} size="sm" />
                </div>

                {/* 演示控制 */}
                <div className="bg-gray-900 rounded-lg p-4 mb-3">
                  <div className="text-white text-sm mb-3">
                    步骤 {treatmentStore.demoCurrentStep + 1} / {technique.steps.length}
                  </div>
                  <div className="h-32 bg-gray-800 rounded flex items-center justify-center mb-3 relative overflow-hidden">
                    <div className="text-center px-4">
                      <p className="text-white text-sm font-medium mb-1">
                        {technique.steps[treatmentStore.demoCurrentStep]?.description || "演示准备中"}
                      </p>
                      {(technique.steps[treatmentStore.demoCurrentStep]?.keyPoints?.length ?? 0) > 0 && (
                        <p className="text-gray-400 text-xs">
                          要点：{technique.steps[treatmentStore.demoCurrentStep]?.keyPoints?.join("、")}
                        </p>
                      )}
                    </div>
                    {/* 进度条 */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                      <div
                        className="h-full bg-medical-500 transition-all"
                        style={{
                          width: `${((treatmentStore.demoCurrentStep + 1) / technique.steps.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => treatmentStore.setDemoStep(Math.max(0, treatmentStore.demoCurrentStep - 1))}
                      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white"
                    >
                      <SkipBack size={16} />
                    </button>
                    <button
                      onClick={() => treatmentStore.setDemoPlaying(!treatmentStore.demoPlaying)}
                      className="p-2.5 rounded-full bg-medical-600 hover:bg-medical-500 text-white"
                    >
                      {treatmentStore.demoPlaying ? <Pause size={18} /> : <Play size={18} />}
                    </button>
                    <button
                      onClick={() => treatmentStore.setDemoStep(Math.min(technique.steps.length - 1, treatmentStore.demoCurrentStep + 1))}
                      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white"
                    >
                      <SkipForward size={16} />
                    </button>
                  </div>
                </div>

                {/* 步骤详情 */}
                <div className="space-y-2">
                  {technique.steps.map((step, i) => (
                    <div
                      key={i}
                      className={`p-2.5 rounded-lg border transition-colors ${
                        i === treatmentStore.demoCurrentStep
                          ? "border-medical-300 bg-medical-50"
                          : "border-gray-100"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                          i === treatmentStore.demoCurrentStep
                            ? "bg-medical-600 text-white"
                            : i < treatmentStore.demoCurrentStep
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-500"
                        }`}>
                          {i < treatmentStore.demoCurrentStep ? <CheckCircle size={12} /> : i + 1}
                        </span>
                        <div>
                          <p className="text-sm text-gray-700">{step.description}</p>
                          {step.keyPoints.length > 0 && (
                            <div className="mt-1 flex flex-wrap gap-1">
                              {step.keyPoints.map((kp, ki) => (
                                <span key={ki} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 text-xs rounded">{kp}</span>
                              ))}
                            </div>
                          )}
                          {step.cautionPoints.length > 0 && (
                            <div className="mt-1 flex flex-wrap gap-1">
                              {step.cautionPoints.map((cp, ci) => (
                                <span key={ci} className="px-1.5 py-0.5 bg-red-50 text-red-700 text-xs rounded">⚠️ {cp}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 适应症与禁忌症 */}
                <div className="mt-3 space-y-2">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <p className="text-xs font-medium text-green-700 mb-1">适应症</p>
                    <p className="text-xs text-green-600">{technique.indications.join("、")}</p>
                  </div>
                  <div className="p-2 bg-red-50 rounded-lg">
                    <p className="text-xs font-medium text-red-700 mb-1">禁忌症</p>
                    <p className="text-xs text-red-600">{technique.contraindications.join("、")}</p>
                  </div>
                </div>

                {/* 目标肌肉跳转 */}
                {technique.targetMuscles.length > 0 && (
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 mb-1">目标肌肉</p>
                    <div className="flex flex-wrap gap-1">
                      {technique.targetMuscles.map((mId) => {
                        const m = musclesById[mId];
                        if (!m) return null;
                        return (
                          <button
                            key={mId}
                            onClick={() => handleToMuscle(mId)}
                            className="px-2 py-0.5 bg-medical-50 text-medical-700 text-xs rounded-full hover:bg-medical-100"
                          >
                            {m.name.zh}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </InfoPanel>
      </div>
    </div>
  );
};

export default TreatmentPage;
