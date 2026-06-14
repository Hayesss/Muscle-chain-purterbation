import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BodyMap } from "../../shared/components/BodyMap/BodyMap";
import { ViewController } from "../../shared/components/ViewController/ViewController";
import { InfoPanel } from "../../shared/components/InfoPanel/InfoPanel";
import { EvidenceBadge } from "../../shared/components/EvidenceBadge/EvidenceBadge";
import { useAtlasStore } from "../../shared/stores/useAtlasStore";
import { useUIStore } from "../../shared/stores/useUIStore";
import { musclesById, chainsById } from "../../shared/data";
import { Heart, Bookmark, BookmarkCheck, Link2, FileText, Globe } from "lucide-react";

export const AtlasPage: React.FC = () => {
  const navigate = useNavigate();
  const atlasStore = useAtlasStore();
  const uiStore = useUIStore();
  const [activeTab, setActiveTab] = useState("anatomy");
  const [noteText, setNoteText] = useState("");
  const [showChainGlobal, setShowChainGlobal] = useState(false);

  const muscle = atlasStore.selectedMuscleId ? musclesById[atlasStore.selectedMuscleId] : null;
  const isFav = muscle ? atlasStore.favorites.includes(muscle.id) : false;
  const muscleNote = muscle ? atlasStore.notes[muscle.id] || "" : "";

  const tabs = muscle
    ? [
        { id: "anatomy", label: "解剖" },
        { id: "function", label: "功能" },
        { id: "trigger", label: "扳机点" },
        { id: "intervention", label: "干预" },
        { id: "chains", label: "肌肉链" },
      ]
    : [];

  const handleToTreatment = () => {
    if (!muscle) return;
    navigate("/treatment");
    uiStore.setMode("treatment");
  };

  const handleSaveNote = () => {
    if (!muscle || !noteText.trim()) return;
    atlasStore.setNote(muscle.id, noteText.trim());
    setNoteText("");
  };

  return (
    <div className="h-full flex">
      {/* 左侧边栏 */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shrink-0">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-3">视角控制</h3>
          <ViewController />
        </div>

        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800">肌肉链</h3>
            <button
              onClick={() => setShowChainGlobal(!showChainGlobal)}
              className={`p-1 rounded-md transition-colors ${showChainGlobal ? "bg-medical-100 text-medical-700" : "text-gray-400 hover:text-gray-600"}`}
              title="全局视图"
            >
              <Globe size={16} />
            </button>
          </div>
          <div className="space-y-1.5">
            {Object.values(chainsById).map((chain) => (
              <button
                key={chain.id}
                onClick={() => atlasStore.selectChain(atlasStore.selectedChainId === chain.id ? null : chain.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-2 ${
                  atlasStore.selectedChainId === chain.id
                    ? "bg-gray-100 font-medium"
                    : "hover:bg-gray-50"
                }`}
              >
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: chain.color }} />
                {chain.name.zh}
              </button>
            ))}
          </div>
        </div>

        {/* 肌肉链全局视图 */}
        {showChainGlobal && atlasStore.selectedChainId && (
          <div className="p-4 border-b border-gray-100">
            <h4 className="font-semibold text-sm text-gray-700 mb-2">
              {chainsById[atlasStore.selectedChainId]?.name.zh} 全局视图
            </h4>
            <p className="text-xs text-gray-500 mb-2">
              {chainsById[atlasStore.selectedChainId]?.description}
            </p>
            <div className="space-y-1.5">
              {chainsById[atlasStore.selectedChainId]?.dysfunctionPatterns.map((dp, i) => (
                <div key={i} className="text-xs bg-gray-50 rounded p-2">
                  <span className="font-medium text-gray-700">{dp.condition}：</span>
                  <span className="text-gray-500">{dp.description}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="p-4 flex-1 overflow-y-auto">
          <h3 className="font-semibold text-gray-800 mb-3">我的收藏</h3>
          {atlasStore.favorites.length === 0 ? (
            <p className="text-sm text-gray-400">暂无收藏肌肉</p>
          ) : (
            <div className="space-y-1">
              {atlasStore.favorites.map((id) => {
                const m = musclesById[id];
                if (!m) return null;
                return (
                  <button
                    key={id}
                    onClick={() => { atlasStore.selectMuscle(id); uiStore.setInfoPanelOpen(true); }}
                    className="w-full text-left px-2 py-1.5 rounded text-sm hover:bg-gray-50 text-gray-700"
                  >
                    {m.name.zh}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </aside>

      {/* 主画布区 */}
      <div className="flex-1 relative">
        <BodyMap mode="atlas" />

        {/* 肌肉详情面板 */}
        {muscle && (
          <InfoPanel
            open={uiStore.infoPanelOpen}
            onClose={() => uiStore.setInfoPanelOpen(false)}
            title={muscle.name.zh}
            subtitle={muscle.name.latin}
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          >
            {/* 解剖标签 */}
            {activeTab === "anatomy" && (
              <div className="space-y-4">
                <div className="medical-card p-3">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">起止点</h4>
                  <p className="text-sm text-gray-600"><span className="font-medium">起点：</span>{muscle.origin}</p>
                  <p className="text-sm text-gray-600 mt-1"><span className="font-medium">止点：</span>{muscle.insertion}</p>
                </div>
                <div className="medical-card p-3">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">神经与血供</h4>
                  <p className="text-sm text-gray-600"><span className="font-medium">神经支配：</span>{muscle.innervation}</p>
                  <p className="text-sm text-gray-600 mt-1"><span className="font-medium">血供来源：</span>{muscle.bloodSupply}</p>
                </div>
                {muscle.evidenceLevel && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">证据等级：</span>
                    <EvidenceBadge level={muscle.evidenceLevel} />
                  </div>
                )}
              </div>
            )}

            {/* 功能标签 */}
            {activeTab === "function" && (
              <div className="space-y-4">
                <div className="medical-card p-3">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">主要动作</h4>
                  <ul className="space-y-1">
                    {muscle.primaryActions.map((a, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-medical-500 mt-1">•</span>{a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="medical-card p-3">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">次要动作</h4>
                  <ul className="space-y-1">
                    {muscle.secondaryActions.map((a, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>{a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="medical-card p-3">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">关联关节</h4>
                  <p className="text-sm text-gray-600">{muscle.joints.join("、")}</p>
                </div>
              </div>
            )}

            {/* 扳机点标签 */}
            {activeTab === "trigger" && (
              <div className="space-y-4">
                {muscle.triggerPoints.map((tp) => (
                  <div key={tp.id} className="medical-card p-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm text-gray-700">{tp.location}</h4>
                      <span className="w-2.5 h-2.5 rounded-full bg-muscle-trigger" />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{tp.referralPattern.description}</p>
                    <p className="text-xs text-gray-500 mb-2"><span className="font-medium">触诊：</span>{tp.palpation}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {tp.symptoms.map((s, i) => (
                        <span key={i} className="px-2 py-0.5 bg-red-50 text-red-700 text-xs rounded-full">{s}</span>
                      ))}
                    </div>
                    {tp.recommendedTechniques.length > 0 && (
                      <button
                        onClick={handleToTreatment}
                        className="text-sm text-medical-600 hover:text-medical-700 flex items-center gap-1 mt-1"
                      >
                        <Link2 size={14} /> 查看推荐手法
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* 干预标签 */}
            {activeTab === "intervention" && (
              <div className="space-y-4">
                <div className="medical-card p-3">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">手法治疗</h4>
                  <ul className="space-y-1">
                    {muscle.interventions.manualTherapy.map((t, i) => (
                      <li key={i} className="text-sm text-gray-600">• {t}</li>
                    ))}
                  </ul>
                </div>
                <div className="medical-card p-3">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">干针/针刺</h4>
                  <p className="text-sm text-gray-600">{muscle.interventions.dryNeedling}</p>
                </div>
                <div className="medical-card p-3">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">拉伸方案</h4>
                  {muscle.interventions.stretching.map((s, i) => (
                    <div key={i} className="text-sm text-gray-600 mt-1">
                      <p className="font-medium">{s.position}</p>
                      <p className="text-gray-500">{s.duration} | ⚠️ {s.caution}</p>
                    </div>
                  ))}
                </div>
                <div className="medical-card p-3">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">强化训练</h4>
                  <ul className="space-y-1">
                    {muscle.interventions.strengthening.map((s, i) => (
                      <li key={i} className="text-sm text-gray-600">• {s}</li>
                    ))}
                  </ul>
                </div>
                {muscle.interventions.taping && (
                  <div className="medical-card p-3">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">贴扎方案</h4>
                    <p className="text-sm text-gray-600">{muscle.interventions.taping}</p>
                  </div>
                )}
                <div className="medical-card p-3">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">预后</h4>
                  <p className="text-sm text-gray-600">{muscle.interventions.prognosis}</p>
                </div>
                <div className="medical-card p-3 border-red-100">
                  <h4 className="font-semibold text-sm text-red-700 mb-2">红旗症状（需转诊）</h4>
                  <ul className="space-y-1">
                    {muscle.interventions.redFlags.map((r, i) => (
                      <li key={i} className="text-sm text-red-600">⚠️ {r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* 肌肉链标签 */}
            {activeTab === "chains" && (
              <div className="space-y-4">
                {muscle.chains.map((c) => {
                  const chain = chainsById[c.chainId];
                  if (!chain) return null;
                  return (
                    <div key={c.chainId} className="medical-card p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: chain.color }} />
                        <h4 className="font-semibold text-sm text-gray-700">{chain.name.zh}</h4>
                        <span className="text-xs text-gray-500">({c.position})</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{chain.description}</p>
                      <div className="text-xs text-gray-500">
                        <p>上游：{c.upstream.map((id) => musclesById[id]?.name.zh || id).join("、")}</p>
                        <p>下游：{c.downstream.map((id) => musclesById[id]?.name.zh || id).join("、")}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* 笔记区域 */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <FileText size={14} className="text-gray-400" />
                <span className="text-sm font-medium text-gray-700">笔记</span>
              </div>
              {muscleNote && (
                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-2.5 mb-2">
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{muscleNote}</p>
                </div>
              )}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder="添加笔记..."
                  className="flex-1 text-sm border border-gray-200 rounded-md px-3 py-2 outline-none focus:border-medical-400 focus:ring-1 focus:ring-medical-400"
                  onKeyDown={(e) => { if (e.key === "Enter") handleSaveNote(); }}
                />
                <button
                  onClick={handleSaveNote}
                  className="px-3 py-2 bg-medical-600 text-white text-sm rounded-md hover:bg-medical-700"
                >
                  保存
                </button>
              </div>
            </div>

            {/* 面板底部操作 */}
            <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">
              <button
                onClick={() => muscle && atlasStore.toggleFavorite(muscle.id)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 text-sm hover:bg-gray-50"
              >
                {isFav ? <BookmarkCheck size={14} className="text-medical-600" /> : <Bookmark size={14} />}
                {isFav ? "已收藏" : "收藏"}
              </button>
              <button
                onClick={handleToTreatment}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-medical-600 text-white text-sm hover:bg-medical-700"
              >
                <Heart size={14} />
                查看相关治疗
              </button>
            </div>
          </InfoPanel>
        )}
      </div>
    </div>
  );
};

export default AtlasPage;
