import React from "react";
import { useAtlasStore } from "../../stores/useAtlasStore";
import { User, UserRound, ArrowLeftRight } from "lucide-react";

export const ViewController: React.FC = () => {
  const { currentView, setView } = useAtlasStore();

  const views = [
    { id: "front" as const, label: "正面", icon: User },
    { id: "back" as const, label: "背面", icon: UserRound },
    { id: "side" as const, label: "侧面", icon: ArrowLeftRight },
  ];

  return (
    <div className="flex gap-1 bg-white rounded-lg shadow-sm border border-gray-200 p-1">
      {views.map((v) => {
        const Icon = v.icon;
        const active = currentView === v.id;
        return (
          <button
            key={v.id}
            onClick={() => setView(v.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              active
                ? "bg-medical-50 text-medical-700 border border-medical-200"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Icon size={14} />
            {v.label}
          </button>
        );
      })}
    </div>
  );
};

export default ViewController;
