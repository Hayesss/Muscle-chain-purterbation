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

// 简化人体轮廓SVG path（示意性）
const BODY_OUTLINE: Record<View, string> = {
  front: "M200,20 C220,20 230,30 230,50 L230,80 C240,85 250,95 250,110 L250,140 C250,150 245,160 240,170 L240,220 C240,240 235,260 230,280 L230,340 C230,360 225,370 220,380 L200,380 L180,380 C175,370 170,360 170,340 L170,280 C165,260 160,240 160,220 L160,170 C155,160 150,150 150,140 L150,110 C150,95 160,85 170,80 L170,50 C170,30 180,20 200,20 Z M170,80 L150,110 M230,80 L250,110 M160,170 L140,200 M240,170 L260,200 M170,280 L150,320 M230,280 L250,320",
  back: "M200,20 C220,20 230,30 230,50 L230,80 C240,85 250,95 250,110 L250,140 C250,150 245,160 240,170 L240,220 C240,240 235,260 230,280 L230,340 C230,360 225,370 220,380 L200,380 L180,380 C175,370 170,360 170,340 L170,280 C165,260 160,240 160,220 L160,170 C155,160 150,150 150,140 L150,110 C150,95 160,85 170,80 L170,50 C170,30 180,20 200,20 Z M170,80 L150,110 M230,80 L250,110 M160,170 L140,200 M240,170 L260,200 M170,280 L150,320 M230,280 L250,320",
  side: "M200,20 C210,20 215,30 215,50 L215,80 C220,85 225,95 225,110 L225,140 C225,150 222,160 220,170 L220,220 C220,240 218,260 215,280 L215,340 C215,360 212,370 210,380 L200,380 L190,380 C188,370 185,360 185,340 L185,280 C182,260 180,240 180,220 L180,170 C178,160 175,150 175,140 L175,110 C175,95 180,85 185,80 L185,50 C185,30 190,20 200,20 Z",
};

const SKELETON_PATHS: Record<View, string[]> = {
  front: [
    "M200,50 L200,120",
    "M200,120 L170,140 M200,120 L230,140",
    "M170,140 L160,200 M230,140 L240,200",
    "M200,120 L200,200",
    "M200,200 L180,280 M200,200 L220,280",
  ],
  back: [
    "M200,50 L200,120",
    "M200,120 L200,200",
    "M170,140 L160,200 M230,140 L240,200",
    "M200,200 L180,280 M200,200 L220,280",
    "M180,280 L180,340 M220,280 L220,340",
  ],
  side: [
    "M200,50 L200,120",
    "M200,120 L200,200",
    "M215,140 L225,200",
    "M200,200 L210,280",
    "M210,280 L210,340",
  ],
};

// 更精确的肌肉SVG paths（示意性解剖位置）
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
            <path d={BODY_OUTLINE[view]} fill="#F5D0C5" stroke="#D4A574" strokeWidth="1" opacity="0.5" />

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
