import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { HighlightConfig } from "../data/types";

interface AtlasState {
  selectedMuscleId: string | null;
  selectedChainId: string | null;
  currentView: "front" | "back" | "side";
  showSkeleton: boolean;
  showMuscles: boolean;
  showChains: boolean;
  highlightConfig: HighlightConfig | null;
  favorites: string[];
  notes: Record<string, string>;
  searchQuery: string;
  activeFilter: { type: "region" | "function" | "chain" | null; value: string | null };

  selectMuscle: (id: string | null) => void;
  selectChain: (id: string | null) => void;
  setView: (view: "front" | "back" | "side") => void;
  toggleSkeleton: () => void;
  toggleMuscles: () => void;
  toggleChains: () => void;
  setHighlight: (config: HighlightConfig | null) => void;
  toggleFavorite: (muscleId: string) => void;
  setNote: (muscleId: string, note: string) => void;
  setSearchQuery: (q: string) => void;
  setFilter: (type: "region" | "function" | "chain" | null, value: string | null) => void;
}

export const useAtlasStore = create<AtlasState>()(
  immer((set) => ({
    selectedMuscleId: null,
    selectedChainId: null,
    currentView: "front",
    showSkeleton: false,
    showMuscles: true,
    showChains: false,
    highlightConfig: null,
    favorites: JSON.parse(localStorage.getItem("atlas_favorites") || "[]"),
    notes: JSON.parse(localStorage.getItem("atlas_notes") || "{}"),
    searchQuery: "",
    activeFilter: { type: null, value: null },

    selectMuscle: (id) =>
      set((state) => {
        state.selectedMuscleId = id;
        state.selectedChainId = null;
      }),
    selectChain: (id) =>
      set((state) => {
        state.selectedChainId = id;
        state.selectedMuscleId = null;
      }),
    setView: (view) =>
      set((state) => {
        state.currentView = view;
      }),
    toggleSkeleton: () =>
      set((state) => {
        state.showSkeleton = !state.showSkeleton;
      }),
    toggleMuscles: () =>
      set((state) => {
        state.showMuscles = !state.showMuscles;
      }),
    toggleChains: () =>
      set((state) => {
        state.showChains = !state.showChains;
      }),
    setHighlight: (config) =>
      set((state) => {
        state.highlightConfig = config;
      }),
    toggleFavorite: (muscleId) =>
      set((state) => {
        const idx = state.favorites.indexOf(muscleId);
        if (idx >= 0) state.favorites.splice(idx, 1);
        else state.favorites.push(muscleId);
        localStorage.setItem("atlas_favorites", JSON.stringify(state.favorites));
      }),
    setNote: (muscleId, note) =>
      set((state) => {
        state.notes[muscleId] = note;
        localStorage.setItem("atlas_notes", JSON.stringify(state.notes));
      }),
    setSearchQuery: (q) =>
      set((state) => {
        state.searchQuery = q;
      }),
    setFilter: (type, value) =>
      set((state) => {
        state.activeFilter = { type, value };
      }),
  }))
);
