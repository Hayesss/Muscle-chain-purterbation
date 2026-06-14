import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface InfoPanelProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  tabs?: { id: string; label: string }[];
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  children: React.ReactNode;
}

export const InfoPanel: React.FC<InfoPanelProps> = ({
  open,
  onClose,
  title,
  subtitle,
  tabs,
  activeTab,
  onTabChange,
  children,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="absolute top-0 right-0 h-full w-[420px] bg-white shadow-xl border-l border-gray-200 z-20 flex flex-col"
        >
          {/* 头部 */}
          <div className="flex items-start justify-between p-4 border-b border-gray-100">
            <div className="min-w-0">
              <h2 className="text-lg font-bold text-gray-900 truncate">{title}</h2>
              {subtitle && <p className="text-sm text-gray-500 italic mt-0.5">{subtitle}</p>}
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600 shrink-0 ml-2"
            >
              <X size={18} />
            </button>
          </div>

          {/* 标签页 */}
          {tabs && tabs.length > 0 && (
            <div className="flex border-b border-gray-100 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onTabChange?.(tab.id)}
                  className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-medical-600 text-medical-700"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}

          {/* 内容区 */}
          <div className="flex-1 overflow-y-auto p-4">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InfoPanel;
