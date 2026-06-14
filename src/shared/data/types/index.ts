export type View = "front" | "back" | "side";
export type Region = "head-neck" | "shoulder" | "upper-limb" | "trunk" | "hip" | "lower-limb";
export type EvidenceLevel = "A" | "B" | "C" | "D";

export interface MuscleEntry {
  id: string;
  name: { zh: string; latin: string };
  category: Region;
  view: View[];
  svgPath: Partial<Record<View, string>>;
  origin: string;
  insertion: string;
  innervation: string;
  bloodSupply: string;
  primaryActions: string[];
  secondaryActions: string[];
  joints: string[];
  chains: {
    chainId: string;
    position: "proximal" | "middle" | "distal";
    upstream: string[];
    downstream: string[];
  }[];
  triggerPoints: TriggerPoint[];
  interventions: Intervention;
  relatedDiagnoses: string[];
  relatedTechniques: string[];
  relatedSymptomRegions: string[];
  evidenceLevel?: EvidenceLevel;
  references?: { title: string; doi?: string }[];
}

export interface TriggerPoint {
  id: string;
  location: string;
  svgCoordinates: { x: number; y: number };
  referralPattern: {
    description: string;
    svgOverlay?: string;
    relatedSymptomRegions?: string[];
  };
  palpation: string;
  symptoms: string[];
  recommendedTechniques: string[];
  dryNeedling?: {
    safe: boolean;
    depthMm?: number;
    angle?: string;
    cautionZones?: string[];
  };
}

export interface Intervention {
  manualTherapy: string[];
  dryNeedling: string;
  stretching: { position: string; duration: string; caution: string }[];
  strengthening: string[];
  taping?: string;
  prognosis: string;
  redFlags: string[];
}

export interface MyofascialChain {
  id: string;
  name: { zh: string; en: string };
  color: string;
  description: string;
  muscles: string[];
  svgPaths: Record<View, string[]>;
  dysfunctionPatterns: { condition: string; description: string }[];
  recommendedTechniqueSequence: string[];
  relatedDiagnoses: string[];
}

export interface TreatmentTechnique {
  id: string;
  name: string;
  category: "soft_tissue" | "joint_mobilization" | "stretching" | "dry_needling" | "neurodynamic" | "taping";
  evidenceLevel: EvidenceLevel;
  indications: string[];
  contraindications: string[];
  steps: TechniqueStep[];
  visualization: TechniqueVisualization;
  targetMuscles: string[];
  targetTriggerPoints: string[];
  targetJoints: string[];
  relatedDiagnoses: string[];
  relatedResearch: { title: string; doi: string; summary: string }[];
}

export interface TechniqueStep {
  order: number;
  description: string;
  keyPoints: string[];
  cautionPoints: string[];
  svgOverlay?: string;
  highlightMuscles?: string[];
  highlightTriggerPoints?: string[];
}

export interface TechniqueVisualization {
  baseSvg: string;
  animationSequence: AnimationFrame[];
  cameraViews: ("front" | "back" | "side" | "closeup")[];
}

export interface AnimationFrame {
  timestamp: number;
  svgElements: {
    type: "path" | "circle" | "arrow" | "text" | "hand_icon";
    attributes: Record<string, string>;
    animation: "fade_in" | "move" | "pulse" | "draw" | "scale";
  }[];
  narration: string;
}

export interface DiagnosisEntry {
  id: string;
  name: string;
  nameEn: string;
  icd10?: string;
  category: "shoulder" | "neck-back" | "hip-knee" | "ankle-foot" | "elbow-wrist";
  typicalSymptoms: string[];
  redFlags: string[];
  relatedSymptomRegions: string[];
  relatedMuscles: string[];
  relatedChains: string[];
  recommendedSpecialTests: string[];
  recommendedTechniques: string[];
  evidenceLevel: EvidenceLevel;
  references: { title: string; doi?: string; summary: string }[];
  decisionTreeNode: DecisionNode;
}

export interface DecisionNode {
  question: string;
  yesBranch?: string;
  noBranch?: string;
  positiveSigns: string[];
  negativeSigns: string[];
}

export interface SymptomRegion {
  id: string;
  name: string;
  side: "left" | "right" | "bilateral" | "midline";
  bodyPart: string;
  svgPath: Partial<Record<View, string>>;
  relatedMuscles: string[];
  relatedDiagnoses: string[];
  relatedChains: string[];
  assessmentTemplate: {
    painQualities: string[];
    typicalAggravatingMoves: string[];
    typicalEasingMoves: string[];
    specialTests: string[];
  };
}

export interface SpecialTest {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  procedure: string[];
  positiveCriteria: string;
  indicatedPathology: string[];
  relatedDiagnoses: string[];
  sensitivity?: number;
  specificity?: number;
}

export interface PatientCase {
  id: string;
  createdAt: string;
  updatedAt: string;
  demographics: { age: number; gender: "M" | "F"; occupation?: string; sportActivity?: string };
  assessment: {
    chiefComplaint: string;
    symptomRegions: SymptomRegionAssessment[];
    specialTests: SpecialTestResult[];
    history: {
      onset: string;
      aggravatingFactors: string[];
      easingFactors: string[];
      previousHistory: string;
      redFlags: string[];
    };
  };
  diagnosis: {
    primary?: DiagnosisEntry;
    differential: DiagnosisEntry[];
    confirmedBy: string[];
  };
  treatment: {
    goals: SMARTGoal[];
    plan?: TreatmentPlan;
    sessions: TreatmentSession[];
  };
  outcomes: {
    baseline: OutcomeMeasures;
    followUps: FollowUpRecord[];
  };
}

export interface SymptomRegionAssessment {
  regionId: string;
  side: "left" | "right" | "bilateral";
  vasScore: number;
  painQuality: string[];
  aggravatingMovements: string[];
  easingMovements: string[];
  nightPain: boolean;
}

export interface SpecialTestResult {
  testId: string;
  result: "positive" | "negative" | "not_done";
  notes?: string;
}

export interface SMARTGoal {
  id: string;
  timeframe: "short" | "medium" | "long";
  description: string;
  targetValue?: string;
  achieved: boolean;
}

export interface TreatmentPlan {
  manualTherapy: ManualTherapyEntry[];
  exerciseTherapy: ExerciseEntry[];
  modalities: ModalityEntry[];
  education: string[];
  frequency: string;
}

export interface ManualTherapyEntry {
  techniqueId: string;
  targetMuscles: string[];
  targetTriggerPoints: string[];
  parameters: { duration: string; pressure: string; repetitions: number };
}

export interface ExerciseEntry {
  name: string;
  phase: "early" | "mid" | "late";
  sets: number;
  reps: string;
  holdTime?: string;
  notes: string;
}

export interface ModalityEntry {
  modality: string;
  parameters: string;
  duration: string;
}

export interface TreatmentSession {
  id: string;
  date: string;
  interventions: string[];
  patientResponse: string;
  vasBefore: number;
  vasAfter: number;
  romChanges?: Record<string, string>;
  adverseEffects?: string[];
  notes: string;
}

export interface OutcomeMeasures {
  vas: number;
  rom: Record<string, number>;
  functionalScore?: number;
}

export interface FollowUpRecord {
  date: string;
  measures: OutcomeMeasures;
  notes: string;
}

export interface HighlightConfig {
  type: "muscle" | "chain" | "triggerPoint" | "region" | "referralPattern";
  ids: string[];
  style: {
    fill?: string;
    stroke?: string;
    opacity?: number;
    pulse?: boolean;
  };
  duration?: number;
}
