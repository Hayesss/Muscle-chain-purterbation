import { achilles_tendinopathy } from "./achilles-tendinopathy";
import { ankle_sprain } from "./ankle-sprain";
import { biceps_tendinitis } from "./biceps-tendinitis";
import { cervical_spondylosis } from "./cervical-spondylosis";
import { frozen_shoulder } from "./frozen-shoulder";
import { hip_impingement } from "./hip-impingement";
import { iliotibial_band_syndrome } from "./iliotibial-band-syndrome";
import { knee_pain } from "./knee-pain";
import { lumbar_disc_herniation } from "./lumbar-disc-herniation";
import { meniscus_injury } from "./meniscus-injury";
import { morton_neuroma } from "./morton-neuroma";
import { patellofemoral_pain } from "./patellofemoral-pain";
import { plantar_fasciitis } from "./plantar-fasciitis";
import { sacroiliac_dysfunction } from "./sacroiliac-dysfunction";
import { shoulder_instability } from "./shoulder-instability";
import { thoracic_outlet_syndrome } from "./thoracic-outlet-syndrome";
import { upper_crossed_syndrome } from "./upper-crossed-syndrome";

export const diagnosesData = [
  achilles_tendinopathy,
  ankle_sprain,
  biceps_tendinitis,
  cervical_spondylosis,
  frozen_shoulder,
  hip_impingement,
  iliotibial_band_syndrome,
  knee_pain,
  lumbar_disc_herniation,
  meniscus_injury,
  morton_neuroma,
  patellofemoral_pain,
  plantar_fasciitis,
  sacroiliac_dysfunction,
  shoulder_instability,
  thoracic_outlet_syndrome,
  upper_crossed_syndrome,
];

export const diagnosesById = Object.fromEntries(diagnosesData.map(m => [m.id, m]));
