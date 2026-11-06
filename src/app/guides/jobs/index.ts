import type { JobGuide } from "./types";
import { contentCreator } from "./content-creator-tax";
import { hairAndBeauty } from "./hair-and-beauty-self-employed-tax";
import { artistDesigner } from "./artist-designer-tax";
import { locumPharmacist } from "./locum-pharmacist-tax";
import { cleaner } from "./cleaner-self-employed-tax";
import { therapist } from "./therapist-self-employed-tax";
import { dental } from "./dental-self-employed-tax";

// Every job page served by app/guides/[job]/page.tsx. Add the import here
// and an entry in ../guides.ts when a new job file is written.
export const jobGuides: JobGuide[] = [
  contentCreator,
  hairAndBeauty,
  artistDesigner,
  locumPharmacist,
  cleaner,
  therapist,
  dental,
];
