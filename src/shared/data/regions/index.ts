import { chest } from "./chest";
import { left_ankle_posterior } from "./left-ankle-posterior";
import { left_elbow } from "./left-elbow";
import { left_foot_plantar } from "./left-foot-plantar";
import { left_forearm } from "./left-forearm";
import { left_gluteal } from "./left-gluteal";
import { left_groin } from "./left-groin";
import { left_knee_lateral } from "./left-knee-lateral";
import { left_knee_medial } from "./left-knee-medial";
import { left_knee_posterior } from "./left-knee-posterior";
import { left_lower_back } from "./left-lower-back";
import { left_lower_leg_lateral } from "./left-lower-leg-lateral";
import { left_lower_leg_posterior } from "./left-lower-leg-posterior";
import { left_neck_lateral } from "./left-neck-lateral";
import { left_neck_posterior } from "./left-neck-posterior";
import { left_shoulder_anterior } from "./left-shoulder-anterior";
import { left_shoulder_posterior } from "./left-shoulder-posterior";
import { left_thigh_anterior } from "./left-thigh-anterior";
import { left_thigh_lateral } from "./left-thigh-lateral";
import { left_thigh_medial } from "./left-thigh-medial";
import { left_thigh_posterior } from "./left-thigh-posterior";
import { left_upper_arm } from "./left-upper-arm";
import { left_upper_back } from "./left-upper-back";
import { left_wrist_hand } from "./left-wrist-hand";
import { occipital } from "./occipital";
import { right_ankle_posterior } from "./right-ankle-posterior";
import { right_foot_dorsum } from "./right-foot-dorsum";
import { right_foot_plantar } from "./right-foot-plantar";
import { right_knee_lateral } from "./right-knee-lateral";
import { right_knee_medial } from "./right-knee-medial";
import { right_knee_posterior } from "./right-knee-posterior";
import { right_lower_leg_anterior } from "./right-lower-leg-anterior";
import { right_lower_leg_lateral } from "./right-lower-leg-lateral";
import { right_lower_leg_posterior } from "./right-lower-leg-posterior";
import { right_shoulder_lateral } from "./right-shoulder-lateral";
import { right_thigh_anterior } from "./right-thigh-anterior";
import { right_thigh_lateral } from "./right-thigh-lateral";
import { right_thigh_medial } from "./right-thigh-medial";
import { right_thigh_posterior } from "./right-thigh-posterior";
import { sacroiliac } from "./sacroiliac";

export const regionsData = [
  chest,
  left_ankle_posterior,
  left_elbow,
  left_foot_plantar,
  left_forearm,
  left_gluteal,
  left_groin,
  left_knee_lateral,
  left_knee_medial,
  left_knee_posterior,
  left_lower_back,
  left_lower_leg_lateral,
  left_lower_leg_posterior,
  left_neck_lateral,
  left_neck_posterior,
  left_shoulder_anterior,
  left_shoulder_posterior,
  left_thigh_anterior,
  left_thigh_lateral,
  left_thigh_medial,
  left_thigh_posterior,
  left_upper_arm,
  left_upper_back,
  left_wrist_hand,
  occipital,
  right_ankle_posterior,
  right_foot_dorsum,
  right_foot_plantar,
  right_knee_lateral,
  right_knee_medial,
  right_knee_posterior,
  right_lower_leg_anterior,
  right_lower_leg_lateral,
  right_lower_leg_posterior,
  right_shoulder_lateral,
  right_thigh_anterior,
  right_thigh_lateral,
  right_thigh_medial,
  right_thigh_posterior,
  sacroiliac,
];

export const regionsById = Object.fromEntries(regionsData.map(m => [m.id, m]));
