import React, { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { musclesData, regionsData, diagnosesData, techniquesData } from "../../data";
import { useAtlasStore } from "../../stores/useAtlasStore";
import { useUIStore } from "../../stores/useUIStore";
import { useTreatmentStore } from "../../stores/useTreatmentStore";
import { useNavigate } from "react-router-dom";

interface SearchResult {
  id: string;
  type: "muscle" | "region" | "diagnosis" | "technique";
  title: string;
  subtitle: string;
}

export const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const atlasStore = useAtlasStore();
  const uiStore = useUIStore();
  const treatmentStore = useTreatmentStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const r: SearchResult[] = [];

    musclesData.forEach((m) => {
      if (m.name.zh.includes(q) || m.name.latin.toLowerCase().includes(q)) {
        r.push({ id: m.id, type: "muscle", title: m.name.zh, subtitle: m.name.latin });
      }
    });
    regionsData.forEach((reg) => {
      if (reg.name.includes(q)) {
        r.push({ id: reg.id, type: "region", title: reg.name, subtitle: "症状区域" });
      }
    });
    diagnosesData.forEach((d) => {
      if (d.name.includes(q) || d.nameEn.toLowerCase().includes(q)) {
        r.push({ id: d.id, type: "diagnosis", title: d.name, subtitle: d.nameEn });
      }
    });
    techniquesData.forEach((t) => {
      if (t.name.includes(q)) {
        r.push({ id: t.id, type: "technique", title: t.name, subtitle: "治疗手法" });
      }
    });

    setResults(r.slice(0, 10));
  }, [query]);

  const handleSelect = (result: SearchResult) => {
    if (result.type === "muscle") {
      atlasStore.selectMuscle(result.id);
      uiStore.setMode("atlas");
      uiStore.setInfoPanelOpen(true);
      navigate("/atlas");
    } else if (result.type === "region") {
      treatmentStore.toggleRegion(result.id);
      uiStore.setMode("treatment");
      navigate("/treatment");
    } else if (result.type === "diagnosis") {
      treatmentStore.selectDiagnosis(result.id);
      treatmentStore.setPhase("diagnosis");
      uiStore.setMode("treatment");
      navigate("/treatment");
    } else if (result.type === "technique") {
      treatmentStore.selectTechnique(result.id);
      treatmentStore.setPhase("treatment");
      uiStore.setMode("treatment");
      navigate("/treatment");
    }
    setQuery("");
    setOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center bg-white rounded-lg border border-gray-200 shadow-sm px-3 py-2 focus-within:border-medical-400 focus-within:ring-1 focus-within:ring-medical-400">
        <Search size={16} className="text-gray-400 shrink-0" />
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          placeholder="搜索肌肉、诊断、手法..."
          className="ml-2 flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400"
        />
        {query && (
          <button onClick={() => { setQuery(""); setResults([]); }} className="p-0.5 hover:bg-gray-100 rounded">
            <X size={14} className="text-gray-400" />
          </button>
        )}
      </div>

      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-80 overflow-y-auto">
          {results.map((r) => (
            <button
              key={`${r.type}-${r.id}`}
              onClick={() => handleSelect(r)}
              className="w-full text-left px-4 py-2.5 hover:bg-gray-50 border-b border-gray-50 last:border-0"
            >
              <div className="text-sm font-medium text-gray-800">{r.title}</div>
              <div className="text-xs text-gray-500 mt-0.5">{r.subtitle}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
