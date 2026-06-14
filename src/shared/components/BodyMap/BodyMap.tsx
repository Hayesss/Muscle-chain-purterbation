import React, { useRef, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAtlasStore } from "../../stores/useAtlasStore";
import { useTreatmentStore } from "../../stores/useTreatmentStore";
import { useUIStore } from "../../stores/useUIStore";
import { musclesById, regionsById, chainsById } from "../../data";
import type { View, MuscleEntry } from "../../data/types";
import { ZoomIn, ZoomOut, Move, Eye, EyeOff } from "lucide-react";

interface BodyMapProps {
  mode: "atlas" | "treatment";
  width?: number;
  height?: number;
}

const SKELETON_PATHS: Record<View, string[]> = {
  front: [
    "M200,52 L200,95 M182,101 C193,106 207,106 218,101",
    "M176,112 C188,124 212,124 224,112 M176,132 C190,140 210,140 224,132",
    "M200,103 L200,218 M174,218 C188,227 212,227 226,218",
    "M164,106 L139,160 L127,222 M236,106 L261,160 L273,222",
    "M184,224 L174,296 L168,358 M216,224 L226,296 L232,358",
  ],
  back: [
    "M200,52 L200,92 M176,105 C190,116 210,116 224,105",
    "M200,96 L200,218 M178,132 C190,140 210,140 222,132",
    "M164,108 L139,164 L127,224 M236,108 L261,164 L273,224",
    "M174,218 C190,226 210,226 226,218",
    "M184,224 L174,296 L168,358 M216,224 L226,296 L232,358",
  ],
  side: [
    "M205,52 L203,96 L201,218",
    "M196,106 C211,114 219,130 222,150",
    "M219,120 L232,176 L235,222",
    "M201,220 L214,294 L214,358",
    "M198,222 L190,296 L186,358",
  ],
};

const skinFill = "#F2C6B7";
const skinStroke = "#B98270";
const muscleStroke = "#B35F4B";

const AnatomicalFigure: React.FC<{ view: View }> = ({ view }) => {
  if (view === "side") {
    return (
      <g aria-label="side anatomical body map">
        <path
          d="M201,22 C220,24 230,40 225,60 C221,78 208,87 195,85 C181,83 173,69 177,51 C181,32 190,23 201,22 Z"
          fill={skinFill}
          stroke={skinStroke}
          strokeWidth="1.6"
        />
        <path d="M195,84 C210,85 219,93 222,109 L206,119 L190,111 C187,98 188,89 195,84 Z" fill={skinFill} stroke={skinStroke} strokeWidth="1.4" />
        <path
          d="M205,109 C230,116 244,140 244,176 C244,207 232,225 215,230 L191,230 C174,222 166,198 168,166 C171,132 184,113 205,109 Z"
          fill={skinFill}
          stroke={skinStroke}
          strokeWidth="1.8"
        />
        <path d="M216,126 C231,137 237,158 235,185 M201,122 C191,150 189,190 196,224" stroke={muscleStroke} strokeWidth="1.1" fill="none" opacity="0.45" />
        <path
          d="M235,126 C255,145 267,174 266,207 C266,222 259,232 249,232 C238,232 233,222 235,208 C239,182 235,157 224,139 Z"
          fill={skinFill}
          stroke={skinStroke}
          strokeWidth="1.6"
        />
        <path d="M248,232 C259,233 264,241 261,250 C258,259 245,260 237,253 C232,248 238,234 248,232 Z" fill={skinFill} stroke={skinStroke} strokeWidth="1.4" />
        <path d="M191,228 C205,236 224,236 238,226 L229,257 C217,265 199,265 187,257 Z" fill={skinFill} stroke={skinStroke} strokeWidth="1.6" />
        <path
          d="M193,254 C214,258 227,282 225,318 L219,382 C218,397 205,400 198,386 L191,315 C188,292 185,272 193,254 Z"
          fill={skinFill}
          stroke={skinStroke}
          strokeWidth="1.7"
        />
        <path
          d="M186,255 C198,262 203,284 199,315 L188,385 C185,399 171,399 168,383 L170,316 C171,287 174,266 186,255 Z"
          fill={skinFill}
          stroke={skinStroke}
          strokeWidth="1.7"
        />
        <path d="M205,392 C221,392 228,399 224,407 C220,413 201,413 192,406 C188,401 193,394 205,392 Z" fill={skinFill} stroke={skinStroke} strokeWidth="1.4" />
        <path d="M173,391 C189,391 195,398 191,406 C187,413 168,412 160,405 C157,400 162,393 173,391 Z" fill={skinFill} stroke={skinStroke} strokeWidth="1.4" />
      </g>
    );
  }

  const isBack = view === "back";
  return (
    <g aria-label={`${view} anatomical body map`}>
      <path
        d="M200,20 C219,20 230,35 226,56 C223,75 214,86 200,86 C186,86 177,75 174,56 C170,35 181,20 200,20 Z"
        fill={skinFill}
        stroke={skinStroke}
        strokeWidth="1.6"
      />
      <path d="M187,84 C195,89 205,89 213,84 L216,104 C207,111 193,111 184,104 Z" fill={skinFill} stroke={skinStroke} strokeWidth="1.4" />
      <path
        d="M151,104 C164,91 182,94 200,102 C218,94 236,91 249,104 C239,143 236,181 231,219 C214,230 186,230 169,219 C164,181 161,143 151,104 Z"
        fill={skinFill}
        stroke={skinStroke}
        strokeWidth="1.9"
      />
      <path
        d="M151,105 C136,111 126,130 120,156 L105,217 C102,230 109,239 120,238 C130,237 134,229 137,216 L149,162 C153,144 159,128 168,116 Z"
        fill={skinFill}
        stroke={skinStroke}
        strokeWidth="1.7"
      />
      <path
        d="M249,105 C264,111 274,130 280,156 L295,217 C298,230 291,239 280,238 C270,237 266,229 263,216 L251,162 C247,144 241,128 232,116 Z"
        fill={skinFill}
        stroke={skinStroke}
        strokeWidth="1.7"
      />
      <path d="M113,237 C124,239 130,247 127,256 C123,266 108,266 101,257 C96,250 102,239 113,237 Z" fill={skinFill} stroke={skinStroke} strokeWidth="1.4" />
      <path d="M287,237 C276,239 270,247 273,256 C277,266 292,266 299,257 C304,250 298,239 287,237 Z" fill={skinFill} stroke={skinStroke} strokeWidth="1.4" />
      <path d="M168,218 C184,229 216,229 232,218 L226,260 C211,270 189,270 174,260 Z" fill={skinFill} stroke={skinStroke} strokeWidth="1.8" />
      <path
        d="M176,258 C193,263 201,287 198,320 L188,382 C185,399 169,399 165,382 L161,320 C158,289 162,266 176,258 Z"
        fill={skinFill}
        stroke={skinStroke}
        strokeWidth="1.8"
      />
      <path
        d="M224,258 C207,263 199,287 202,320 L212,382 C215,399 231,399 235,382 L239,320 C242,289 238,266 224,258 Z"
        fill={skinFill}
        stroke={skinStroke}
        strokeWidth="1.8"
      />
      <path d="M166,392 C184,392 192,399 187,407 C183,414 160,414 151,407 C147,401 153,394 166,392 Z" fill={skinFill} stroke={skinStroke} strokeWidth="1.4" />
      <path d="M234,392 C216,392 208,399 213,407 C217,414 240,414 249,407 C253,401 247,394 234,392 Z" fill={skinFill} stroke={skinStroke} strokeWidth="1.4" />

      {isBack ? (
        <g stroke={muscleStroke} strokeWidth="1.1" fill="none" opacity="0.48">
          <path d="M160,108 C176,124 188,137 200,157 C212,137 224,124 240,108" />
          <path d="M172,126 C185,143 190,170 187,210 M228,126 C215,143 210,170 213,210" />
          <path d="M200,96 L200,224" />
          <path d="M178,226 C188,238 212,238 222,226" />
          <path d="M173,268 C187,291 188,333 179,378 M227,268 C213,291 212,333 221,378" />
          <path d="M135,128 C151,137 158,154 158,178 M265,128 C249,137 242,154 242,178" />
        </g>
      ) : (
        <g stroke={muscleStroke} strokeWidth="1.1" fill="none" opacity="0.48">
          <path d="M160,108 C174,119 186,129 200,132 C214,129 226,119 240,108" />
          <path d="M174,137 C189,144 211,144 226,137" />
          <path d="M184,153 C194,163 206,163 216,153 M181,174 C192,183 208,183 219,174 M180,195 C192,204 208,204 220,195" />
          <path d="M200,137 L200,218" />
          <path d="M171,228 C183,240 192,252 197,266 M229,228 C217,240 208,252 203,266" />
          <path d="M169,270 C184,292 188,332 178,379 M231,270 C216,292 212,332 222,379" />
          <path d="M138,128 C151,140 158,158 159,178 M262,128 C249,140 242,158 241,178" />
        </g>
      )}
    </g>
  );
};

// 局部高亮热区仍来自数据层；这里只保留核心肌群的更正路径。
const MUSCLE_PATHS: Record<string, Partial<Record<View, string>>> = {
  upper_trapezius: {
    back: "M175,55 Q190,50 200,55 Q210,50 225,55 L230,75 Q215,80 200,78 Q185,80 170,75 Z",
    side: "M200,55 Q210,50 215,55 L220,75 Q210,80 205,78 L200,55 Z",
  },
  supraspinatus: {
    back: "M188,88 Q200,84 212,88 L214,102 Q200,106 186,102 Z",
  },
  erector_spinae: {
    back: "M188,125 Q200,122 212,125 L215,195 Q200,198 185,195 Z",
  },
  gluteus_medius: {
    back: "M172,205 Q190,198 208,205 L212,235 Q195,242 178,235 Z",
    side: "M195,205 Q205,200 212,205 L215,235 Q205,240 198,235 Z",
  },
  tibialis_anterior: {
    front: "M188,318 Q200,314 212,318 L214,355 Q200,360 186,355 Z",
  },
};

// 更精确的症状区域SVG paths
const REGION_PATHS: Record<string, Partial<Record<View, string>>> = {
  right_shoulder_anterior: {
    front: "M210,78 Q230,74 248,78 L252,108 Q235,112 215,108 Z",
    side: "M218,78 Q228,74 238,78 L242,108 Q232,112 222,108 Z",
  },
  right_neck_posterior: {
    back: "M202,38 Q215,34 228,38 L232,62 Q218,66 206,62 Z",
    side: "M210,38 Q220,34 228,38 L232,62 Q222,66 214,62 Z",
  },
  right_lower_back: {
    back: "M188,158 Q200,154 212,158 L216,208 Q200,212 184,208 Z",
    side: "M196,158 Q206,154 214,158 L218,208 Q208,212 200,208 Z",
  },
  right_gluteal: {
    back: "M172,202 Q190,196 208,202 L212,248 Q195,254 178,248 Z",
    side: "M192,202 Q202,198 210,202 L214,248 Q204,252 196,248 Z",
  },
  right_knee_anterior: {
    front: "M188,278 Q200,274 212,278 L216,308 Q200,312 184,308 Z",
    side: "M196,278 Q206,274 214,278 L218,308 Q208,312 200,308 Z",
  },
};

export const BodyMap: React.FC<BodyMapProps> = ({ mode, width = 400, height = 500 }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const currentView = useAtlasStore((s) => s.currentView);
  const showSkeleton = useAtlasStore((s) => s.showSkeleton);
  const showMuscles = useAtlasStore((s) => s.showMuscles);
  const showChains = useAtlasStore((s) => s.showChains);
  const highlightConfig = useAtlasStore((s) => s.highlightConfig);
  const selectedMuscleId = useAtlasStore((s) => s.selectedMuscleId);
  const selectedChainId = useAtlasStore((s) => s.selectedChainId);
  const selectMuscle = useAtlasStore((s) => s.selectMuscle);
  const toggleSkeleton = useAtlasStore((s) => s.toggleSkeleton);
  const toggleMuscles = useAtlasStore((s) => s.toggleMuscles);
  const toggleChains = useAtlasStore((s) => s.toggleChains);

  const selectedRegionIds = useTreatmentStore((s) => s.selectedRegionIds);
  const toggleRegion = useTreatmentStore((s) => s.toggleRegion);
  const setInfoPanelOpen = useUIStore((s) => s.setInfoPanelOpen);

  const view = currentView;

  const muscles = useMemo(() => Object.values(musclesById), []);
  const regions = useMemo(() => Object.values(regionsById), []);

  const activeChain = selectedChainId ? chainsById[selectedChainId] : null;

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom((z) => Math.min(Math.max(z + delta, 0.5), 4));
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button === 1 || (e.button === 0 && e.shiftKey)) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  }, [pan]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    }
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleClick = useCallback((id: string, type: "muscle" | "region") => {
    if (mode === "atlas" && type === "muscle") {
      selectMuscle(id);
      setInfoPanelOpen(true);
    } else if (mode === "treatment" && type === "region") {
      toggleRegion(id);
    }
  }, [mode, selectMuscle, setInfoPanelOpen, toggleRegion]);

  const getMusclePath = (muscleId: string, v: View): string | undefined => {
    return MUSCLE_PATHS[muscleId]?.[v] ?? musclesById[muscleId]?.svgPath?.[v];
  };

  const getRegionPath = (regionId: string, v: View): string | undefined => {
    return REGION_PATHS[regionId]?.[v] ?? regionsById[regionId]?.svgPath?.[v];
  };

  const getMuscleFill = (muscleId: string) => {
    if (highlightConfig?.ids.includes(muscleId)) {
      return highlightConfig.style.fill || "#FF6B35";
    }
    if (activeChain?.muscles.includes(muscleId)) {
      return activeChain.color;
    }
    if (selectedMuscleId === muscleId) {
      return "#FF6B35";
    }
    if (hoveredId === muscleId) {
      return "#FFB74D";
    }
    return "#E8A87C";
  };

  const getMuscleOpacity = (muscleId: string) => {
    if (activeChain && !activeChain.muscles.includes(muscleId)) {
      return 0.2;
    }
    if (highlightConfig?.ids.includes(muscleId)) {
      return highlightConfig.style.opacity ?? 0.8;
    }
    if (hoveredId === muscleId) return 0.7;
    return 0.6;
  };

  const getRegionFill = (regionId: string) => {
    if (selectedRegionIds.includes(regionId)) {
      return "#EF4444";
    }
    if (hoveredId === regionId) {
      return "#F87171";
    }
    return "#FCA5A5";
  };

  const getRegionOpacity = (regionId: string) => {
    if (selectedRegionIds.includes(regionId)) return 0.5;
    if (hoveredId === regionId) return 0.3;
    return 0.1;
  };

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* 控制栏 */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        <div className="medical-card p-1 flex flex-col gap-1">
          <button onClick={() => setZoom((z) => Math.min(z + 0.2, 4))} className="p-1.5 hover:bg-gray-100 rounded" title="放大">
            <ZoomIn size={16} />
          </button>
          <button onClick={() => setZoom((z) => Math.max(z - 0.2, 0.5))} className="p-1.5 hover:bg-gray-100 rounded" title="缩小">
            <ZoomOut size={16} />
          </button>
          <button onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }} className="p-1.5 hover:bg-gray-100 rounded" title="重置">
            <Move size={16} />
          </button>
        </div>
        <div className="medical-card p-1 flex flex-col gap-1">
          <button onClick={toggleSkeleton} className="p-1.5 hover:bg-gray-100 rounded" title="骨骼">
            {showSkeleton ? <Eye size={16} className="text-medical-600" /> : <EyeOff size={16} />}
          </button>
          <button onClick={toggleMuscles} className="p-1.5 hover:bg-gray-100 rounded" title="肌肉">
            {showMuscles ? <Eye size={16} className="text-medical-600" /> : <EyeOff size={16} />}
          </button>
          <button onClick={toggleChains} className="p-1.5 hover:bg-gray-100 rounded" title="肌肉链">
            {showChains ? <Eye size={16} className="text-medical-600" /> : <EyeOff size={16} />}
          </button>
        </div>
      </div>

      {/* SVG画布 */}
      <div className="flex-1 overflow-hidden cursor-grab active:cursor-grabbing" onWheel={handleWheel}>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`}>
            {/* 0. 人体底图 */}
            <AnatomicalFigure view={view} />

            {/* 1. 骨骼层 */}
            <AnimatePresence>
              {showSkeleton && (
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {SKELETON_PATHS[view].map((d, i) => (
                    <path key={i} d={d} stroke="#9CA3AF" strokeWidth="2" fill="none" opacity="0.6" />
                  ))}
                </motion.g>
              )}
            </AnimatePresence>

            {/* 2a. 肌肉热区层（Atlas Mode） */}
            <AnimatePresence>
              {mode === "atlas" && showMuscles && (
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {muscles.map((muscle: MuscleEntry) => {
                    const path = getMusclePath(muscle.id, view);
                    if (!path) return null;
                    return (
                      <path
                        key={muscle.id}
                        d={path}
                        fill={getMuscleFill(muscle.id)}
                        stroke={selectedMuscleId === muscle.id ? "#FF6B35" : "#C0785A"}
                        strokeWidth={selectedMuscleId === muscle.id ? 2 : 0.5}
                        opacity={getMuscleOpacity(muscle.id)}
                        className="cursor-pointer transition-all"
                        onMouseEnter={() => setHoveredId(muscle.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onClick={() => handleClick(muscle.id, "muscle")}
                      >
                        <title>{`${muscle.name.zh} (${muscle.name.latin})`}</title>
                      </path>
                    );
                  })}
                </motion.g>
              )}
            </AnimatePresence>

            {/* 2b. 症状区域热区层（Treatment Mode） */}
            <AnimatePresence>
              {mode === "treatment" && (
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {regions.map((region: typeof regions[0]) => {
                    const path = getRegionPath(region.id, view);
                    if (!path) return null;
                    return (
                      <path
                        key={region.id}
                        d={path}
                        fill={getRegionFill(region.id)}
                        stroke={selectedRegionIds.includes(region.id) ? "#DC2626" : "transparent"}
                        strokeWidth={2}
                        opacity={getRegionOpacity(region.id)}
                        className="cursor-pointer"
                        onMouseEnter={() => setHoveredId(region.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onClick={() => handleClick(region.id, "region")}
                      >
                        <title>{region.name}</title>
                      </path>
                    );
                  })}
                </motion.g>
              )}
            </AnimatePresence>

            {/* 3. 肌肉链线条层 */}
            <AnimatePresence>
              {showChains && activeChain && (
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {activeChain.svgPaths[view]?.map((d: string, i: number) => (
                    <path
                      key={i}
                      d={d}
                      stroke={activeChain.color}
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8,4"
                      opacity="0.8"
                    >
                      <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="1s" repeatCount="indefinite" />
                    </path>
                  ))}
                </motion.g>
              )}
            </AnimatePresence>

            {/* 高亮覆盖层 */}
            {highlightConfig && (
              <g>
                {highlightConfig.ids.map((id) => {
                  const muscle = musclesById[id];
                  if (!muscle) return null;
                  const path = getMusclePath(muscle.id, view);
                  if (!path) return null;
                  return (
                    <path
                      key={`hl-${id}`}
                      d={path}
                      fill={highlightConfig.style.fill || "#FF6B35"}
                      stroke={highlightConfig.style.stroke || "#FF6B35"}
                      strokeWidth="2"
                      opacity={highlightConfig.style.opacity || 0.6}
                      className={highlightConfig.style.pulse ? "animate-pulse" : ""}
                    />
                  );
                })}
              </g>
            )}

            {/* Hover Tooltip */}
            {(() => {
              if (!hoveredId) return null;
              const hoveredMuscle = musclesById[hoveredId];
              const hoveredRegion = regionsById[hoveredId];
              return (
                <g>
                  {mode === "atlas" && hoveredMuscle && (
                    <text x="250" y="30" fill="#1F2937" fontSize="12" fontWeight="600">
                      {hoveredMuscle.name.zh}
                    </text>
                  )}
                  {mode === "treatment" && hoveredRegion && (
                    <text x="250" y="30" fill="#1F2937" fontSize="12" fontWeight="600">
                      {hoveredRegion.name}
                    </text>
                  )}
                </g>
              );
            })()}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default BodyMap;
