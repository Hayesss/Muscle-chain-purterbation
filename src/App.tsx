import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useUIStore } from "./shared/stores/useUIStore";
import { AtlasPage } from "./modes/atlas/AtlasPage";
import { TreatmentPage } from "./modes/treatment/TreatmentPage";
import { SearchBar } from "./shared/components/SearchBar/SearchBar";
import { Activity, Stethoscope } from "lucide-react";

const ModeSync: React.FC = () => {
  const { mode, setMode } = useUIStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (mode === "atlas" && !location.pathname.startsWith("/atlas")) {
      navigate("/atlas");
    } else if (mode === "treatment" && !location.pathname.startsWith("/treatment")) {
      navigate("/treatment");
    }
  }, [mode, navigate, location.pathname]);

  useEffect(() => {
    if (location.pathname.startsWith("/atlas") && mode !== "atlas") {
      setMode("atlas");
    } else if (location.pathname.startsWith("/treatment") && mode !== "treatment") {
      setMode("treatment");
    }
  }, [location.pathname, mode, setMode]);

  return null;
};

const App: React.FC = () => {
  const { mode, setMode } = useUIStore();

  return (
    <BrowserRouter>
      <ModeSync />
      <div className="h-screen flex flex-col bg-gray-50">
        {/* 全局导航栏 */}
        <header className="h-14 bg-white border-b border-gray-200 flex items-center px-4 gap-4 shrink-0 z-30">
          <div className="flex items-center gap-2">
            <Activity className="text-medical-600" size={22} />
            <span className="font-bold text-gray-900 text-lg">临床康复图谱</span>
          </div>

          {/* 模式切换 */}
          <div className="flex bg-gray-100 rounded-lg p-0.5 ml-4">
            <button
              onClick={() => setMode("atlas")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                mode === "atlas"
                  ? "bg-white text-medical-700 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Activity size={14} />
              肌肉图谱
            </button>
            <button
              onClick={() => setMode("treatment")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                mode === "treatment"
                  ? "bg-white text-medical-700 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Stethoscope size={14} />
              治疗模式
            </button>
          </div>

          <div className="flex-1 max-w-md ml-4">
            <SearchBar />
          </div>

          <div className="ml-auto text-xs text-gray-400">
            本工具仅供临床参考，不构成医疗建议
          </div>
        </header>

        {/* 主内容区 */}
        <main className="flex-1 overflow-hidden">
          <Routes>
            <Route path="/atlas/*" element={<AtlasPage />} />
            <Route path="/treatment/*" element={<TreatmentPage />} />
            <Route path="*" element={<Navigate to="/atlas" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
