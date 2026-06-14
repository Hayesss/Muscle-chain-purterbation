import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface UIState {
  mode: "atlas" | "treatment";
  sidebarOpen: boolean;
  infoPanelOpen: boolean;
  globalSearchOpen: boolean;
  theme: "light" | "dark";

  setMode: (mode: "atlas" | "treatment") => void;
  toggleSidebar: () => void;
  setInfoPanelOpen: (open: boolean) => void;
  setGlobalSearchOpen: (open: boolean) => void;
  setTheme: (theme: "light" | "dark") => void;
}

export const useUIStore = create<UIState>()(
  immer((set) => ({
    mode: "atlas",
    sidebarOpen: true,
    infoPanelOpen: false,
    globalSearchOpen: false,
    theme: "light",

    setMode: (mode) =>
      set((state) => {
        state.mode = mode;
      }),
    toggleSidebar: () =>
      set((state) => {
        state.sidebarOpen = !state.sidebarOpen;
      }),
    setInfoPanelOpen: (open) =>
      set((state) => {
        state.infoPanelOpen = open;
      }),
    setGlobalSearchOpen: (open) =>
      set((state) => {
        state.globalSearchOpen = open;
      }),
    setTheme: (theme) =>
      set((state) => {
        state.theme = theme;
      }),
  }))
);
