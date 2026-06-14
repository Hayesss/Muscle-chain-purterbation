import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { PatientCase } from "../data/types";

type TreatmentPhase = "assessment" | "diagnosis" | "treatment" | "outcome";

interface TreatmentState {
  cases: PatientCase[];
  activeCaseId: string | null;
  currentPhase: TreatmentPhase;
  selectedRegionIds: string[];
  selectedDiagnosisId: string | null;
  selectedTechniqueId: string | null;
  demoPlaying: boolean;
  demoCurrentStep: number;

  setActiveCase: (id: string | null) => void;
  createCase: (caseData: Partial<PatientCase>) => void;
  updateCase: (id: string, updater: (c: PatientCase) => void) => void;
  setPhase: (phase: TreatmentPhase) => void;
  toggleRegion: (regionId: string) => void;
  selectDiagnosis: (id: string | null) => void;
  selectTechnique: (id: string | null) => void;
  setDemoPlaying: (playing: boolean) => void;
  setDemoStep: (step: number) => void;
}

export const useTreatmentStore = create<TreatmentState>()(
  immer((set) => ({
    cases: [],
    activeCaseId: null,
    currentPhase: "assessment",
    selectedRegionIds: [],
    selectedDiagnosisId: null,
    selectedTechniqueId: null,
    demoPlaying: false,
    demoCurrentStep: 0,

    setActiveCase: (id) =>
      set((state) => {
        state.activeCaseId = id;
      }),
    createCase: (caseData) =>
      set((state) => {
        const newCase: PatientCase = {
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          demographics: caseData.demographics || { age: 30, gender: "M" },
          assessment: caseData.assessment || {
            chiefComplaint: "",
            symptomRegions: [],
            specialTests: [],
            history: { onset: "", aggravatingFactors: [], easingFactors: [], previousHistory: "", redFlags: [] },
          },
          diagnosis: { differential: [], confirmedBy: [] },
          treatment: { goals: [], sessions: [] },
          outcomes: { baseline: { vas: 0, rom: {} }, followUps: [] },
          ...caseData,
        } as PatientCase;
        state.cases.push(newCase);
        state.activeCaseId = newCase.id;
      }),
    updateCase: (id, updater) =>
      set((state) => {
        const c = state.cases.find((x) => x.id === id);
        if (c) {
          updater(c);
          c.updatedAt = new Date().toISOString();
        }
      }),
    setPhase: (phase) =>
      set((state) => {
        state.currentPhase = phase;
      }),
    toggleRegion: (regionId) =>
      set((state) => {
        const idx = state.selectedRegionIds.indexOf(regionId);
        if (idx >= 0) state.selectedRegionIds.splice(idx, 1);
        else state.selectedRegionIds.push(regionId);
      }),
    selectDiagnosis: (id) =>
      set((state) => {
        state.selectedDiagnosisId = id;
      }),
    selectTechnique: (id) =>
      set((state) => {
        state.selectedTechniqueId = id;
        state.demoCurrentStep = 0;
        state.demoPlaying = false;
      }),
    setDemoPlaying: (playing) =>
      set((state) => {
        state.demoPlaying = playing;
      }),
    setDemoStep: (step) =>
      set((state) => {
        state.demoCurrentStep = step;
      }),
  }))
);
