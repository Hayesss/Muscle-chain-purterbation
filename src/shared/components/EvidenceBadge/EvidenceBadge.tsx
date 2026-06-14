import React from "react";
import type { EvidenceLevel } from "../../data/types";

interface EvidenceBadgeProps {
  level: EvidenceLevel;
  size?: "sm" | "md";
  showLabel?: boolean;
}

const config: Record<EvidenceLevel, { color: string; bg: string; label: string; desc: string }> = {
  A: { color: "text-emerald-700", bg: "bg-emerald-100", label: "A级", desc: "系统综述/Meta分析" },
  B: { color: "text-blue-700", bg: "bg-blue-100", label: "B级", desc: "RCT研究" },
  C: { color: "text-amber-700", bg: "bg-amber-100", label: "C级", desc: "专家共识" },
  D: { color: "text-red-700", bg: "bg-red-100", label: "D级", desc: "临床经验" },
};

export const EvidenceBadge: React.FC<EvidenceBadgeProps> = ({ level, size = "sm", showLabel = true }) => {
  const c = config[level];
  const sizeClasses = size === "sm" ? "px-1.5 py-0.5 text-xs" : "px-2 py-1 text-sm";

  return (
    <span className={`inline-flex items-center gap-1 rounded-md font-semibold ${c.color} ${c.bg} ${sizeClasses}`} title={c.desc}>
      <span className="w-2 h-2 rounded-full bg-current" />
      {showLabel && c.label}
    </span>
  );
};

export default EvidenceBadge;
