import { core_stabilization } from "./core-stabilization";
import { deep_friction_ut } from "./deep-friction-ut";
import { eccentric_calf_training } from "./eccentric-calf-training";
import { eccentric_strengthening_rc } from "./eccentric-strengthening-rc";
import { fibularis_strengthening } from "./fibularis-strengthening";
import { gastrocnemius_stretching } from "./gastrocnemius-stretching";
import { hip_strengthening } from "./hip-strengthening";
import { iliopsoas_stretching } from "./iliopsoas-stretching";
import { ischemic_compression_ad } from "./ischemic-compression-ad";
import { ischemic_compression_bb } from "./ischemic-compression-bb";
import { ischemic_compression_br } from "./ischemic-compression-br";
import { ischemic_compression_deltoid } from "./ischemic-compression-deltoid";
import { ischemic_compression_fb } from "./ischemic-compression-fb";
import { ischemic_compression_gc } from "./ischemic-compression-gc";
import { ischemic_compression_gm } from "./ischemic-compression-gm";
import { ischemic_compression_gmax } from "./ischemic-compression-gmax";
import { ischemic_compression_hs } from "./ischemic-compression-hs";
import { ischemic_compression_ip } from "./ischemic-compression-ip";
import { ischemic_compression_isp } from "./ischemic-compression-isp";
import { ischemic_compression_oe } from "./ischemic-compression-oe";
import { ischemic_compression_pf } from "./ischemic-compression-pf";
import { ischemic_compression_qf } from "./ischemic-compression-qf";
import { ischemic_compression_ql } from "./ischemic-compression-ql";
import { ischemic_compression_ra } from "./ischemic-compression-ra";
import { ischemic_compression_rb } from "./ischemic-compression-rb";
import { ischemic_compression_scm } from "./ischemic-compression-scm";
import { ischemic_compression_sr } from "./ischemic-compression-sr";
import { ischemic_compression_ss } from "./ischemic-compression-ss";
import { ischemic_compression_ta } from "./ischemic-compression-ta";
import { ischemic_compression_tb } from "./ischemic-compression-tb";
import { ischemic_compression_tfl } from "./ischemic-compression-tfl";
import { ischemic_compression_tm } from "./ischemic-compression-tm";
import { ischemic_compression_tma } from "./ischemic-compression-tma";
import { joint_mobilization_gh } from "./joint-mobilization-gh";
import { mfr_es } from "./mfr-es";
import { mfr_gm } from "./mfr-gm";
import { mfr_suboccipital } from "./mfr-suboccipital";
import { mfr_ut } from "./mfr-ut";
import { neck_mobilization } from "./neck-mobilization";
import { plantar_fascia_stretching } from "./plantar-fascia-stretching";
import { postural_correction } from "./postural-correction";
import { proprioception_training } from "./proprioception-training";
import { quadriceps_stretching } from "./quadriceps-stretching";
import { rotator_cuff_strengthening } from "./rotator-cuff-strengthening";
import { stretching_posterior_capsule } from "./stretching-posterior-capsule";
import { tfl_stretching } from "./tfl-stretching";
import { vastus_medialis_strengthening } from "./vastus-medialis-strengthening";

export const techniquesData = [
  core_stabilization,
  deep_friction_ut,
  eccentric_calf_training,
  eccentric_strengthening_rc,
  fibularis_strengthening,
  gastrocnemius_stretching,
  hip_strengthening,
  iliopsoas_stretching,
  ischemic_compression_ad,
  ischemic_compression_bb,
  ischemic_compression_br,
  ischemic_compression_deltoid,
  ischemic_compression_fb,
  ischemic_compression_gc,
  ischemic_compression_gm,
  ischemic_compression_gmax,
  ischemic_compression_hs,
  ischemic_compression_ip,
  ischemic_compression_isp,
  ischemic_compression_oe,
  ischemic_compression_pf,
  ischemic_compression_qf,
  ischemic_compression_ql,
  ischemic_compression_ra,
  ischemic_compression_rb,
  ischemic_compression_scm,
  ischemic_compression_sr,
  ischemic_compression_ss,
  ischemic_compression_ta,
  ischemic_compression_tb,
  ischemic_compression_tfl,
  ischemic_compression_tm,
  ischemic_compression_tma,
  joint_mobilization_gh,
  mfr_es,
  mfr_gm,
  mfr_suboccipital,
  mfr_ut,
  neck_mobilization,
  plantar_fascia_stretching,
  postural_correction,
  proprioception_training,
  quadriceps_stretching,
  rotator_cuff_strengthening,
  stretching_posterior_capsule,
  tfl_stretching,
  vastus_medialis_strengthening,
];

export const techniquesById = Object.fromEntries(techniquesData.map(m => [m.id, m]));
