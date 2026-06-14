import { adson_test } from "./adson-test";
import { anterior_drawer_test } from "./anterior-drawer-test";
import { apley_test } from "./apley-test";
import { apprehension_test } from "./apprehension-test";
import { calf_squeeze_test } from "./calf-squeeze-test";
import { cervical_endurance_test } from "./cervical-endurance-test";
import { distraction_test } from "./distraction-test";
import { faber_test } from "./faber-test";
import { fadir_test } from "./fadir-test";
import { femoral_nerve_stretch } from "./femoral-nerve-stretch";
import { gaenslen_test } from "./gaenslen-test";
import { navicular_drop_test } from "./navicular-drop-test";
import { neer_test } from "./neer-test";
import { noble_test } from "./noble-test";
import { ober_test } from "./ober-test";
import { prone_instability } from "./prone-instability";
import { roos_test } from "./roos-test";
import { singlesquat_test } from "./singlesquat-test";
import { speed_test } from "./speed-test";
import { spurling_test } from "./spurling-test";
import { stork_test } from "./stork-test";
import { talar_tilt_test } from "./talar-tilt-test";
import { thessaly_test } from "./thessaly-test";
import { thompson_test } from "./thompson-test";
import { valsalva_test } from "./valsalva-test";
import { windlass_test } from "./windlass-test";
import { wright_test } from "./wright-test";
import { yergason_test } from "./yergason-test";

export const specialTestsData = [
  adson_test,
  anterior_drawer_test,
  apley_test,
  apprehension_test,
  calf_squeeze_test,
  cervical_endurance_test,
  distraction_test,
  faber_test,
  fadir_test,
  femoral_nerve_stretch,
  gaenslen_test,
  navicular_drop_test,
  neer_test,
  noble_test,
  ober_test,
  prone_instability,
  roos_test,
  singlesquat_test,
  speed_test,
  spurling_test,
  stork_test,
  talar_tilt_test,
  thessaly_test,
  thompson_test,
  valsalva_test,
  windlass_test,
  wright_test,
  yergason_test,
];

export const specialTestsById = Object.fromEntries(specialTestsData.map(m => [m.id, m]));
