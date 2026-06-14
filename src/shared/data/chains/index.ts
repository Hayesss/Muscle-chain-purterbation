import { lateral_line } from "./lateral-line";
import { spiral_line } from "./spiral-line";
import { superficial_back_line } from "./superficial-back-line";
import { superficial_front_line } from "./superficial-front-line";

export const chainsData = [
  lateral_line,
  spiral_line,
  superficial_back_line,
  superficial_front_line,
];

export const chainsById = Object.fromEntries(chainsData.map(m => [m.id, m]));
