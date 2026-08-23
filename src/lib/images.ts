/**
 * ============================================================
 *  CENTRAL IMAGE REGISTRY — swap any picture from ONE place.
 * ------------------------------------------------------------
 *  To replace an image:
 *   1. Drop your new file into `src/assets/` (or use any URL)
 *   2. Update the corresponding value below.
 *   3. Every page/component that uses it updates automatically.
 * ------------------------------------------------------------
 *  NOTE: extensions weren't visible in the assets-folder
 *  screenshot, so every import below assumes `.jpg`. If your
 *  files are actually `.png` / `.webp` / `.jpeg`, do a find
 *  & replace on the extension in this file only.
 *
 *  Also note: the source file names are inconsistent between
 *  folders (spaces vs hyphens, "punjabi" vs "Punjabi"). Each
 *  import below matches the exact name from its screenshot —
 *  double check against your actual files if anything fails
 *  to resolve.
 * ============================================================
 */

// ---- Global / fallback images ----
import hero from "@/assets/hero.jpg";
import strength from "@/assets/program-strength.jpg";
import yoga from "@/assets/program-yoga.jpg";
import dance from "@/assets/program-dance.jpg";
import hiit from "@/assets/program-hiit.jpg";

// ---- Trainer portraits ----
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import trainer4 from "@/assets/trainer-4.jpg";
import trainer5 from "@/assets/trainer-5.jpg";
import trainer6 from "@/assets/trainer-6.jpg";
import trainer7 from "@/assets/trainer-7.jpg";
import trainer8 from "@/assets/trainer-8.jpg";
import trainer9 from "@/assets/trainer-9.jpg";

// ---- Before / after transformations ----
import transform1 from "@/assets/transform-1.jpg";
import transform2 from "@/assets/transform-2.jpg";
import transform3 from "@/assets/transform-3.jpg";

// ---- Hero images (per location) — note the space/hyphen mix ----
import heroDwarka from "@/assets/Hero-dwarka.jpg";
import heroJanakpuri from "@/assets/Hero-janakpuri.jpg";
import heroKirtiNagar from "@/assets/Hero-kirti nagar.jpg";
import heroPaschimVihar from "@/assets/Hero-paschim-vihar.jpg";
import heroPrashantVihar from "@/assets/Hero-prashant vihar.jpg";
import heroPunjabiBagh from "@/assets/Hero-punjabi bagh.jpg";
import heroRajouriGarden from "@/assets/Hero-rajouri-garden.jpg";
import heroVikasPuri from "@/assets/Hero-vikas puri.jpg";

// ---- About images (per location) ----
import aboutDwarka from "@/assets/About-dwarka.jpg";
import aboutJanakpuri from "@/assets/About-janakpuri.jpg";
import aboutKirtiNagar from "@/assets/About-kirti-nagar.jpg";
import aboutPaschimVihar from "@/assets/About-paschim-vihar.jpg";
import aboutPrashantVihar from "@/assets/About-prashant-vihar.jpg";
import aboutPunjabiBagh from "@/assets/About-Punjabi bagh.jpg";
import aboutRajouriGarden from "@/assets/About-rajouri-garden.jpg";
import aboutVikasPuri from "@/assets/About-vikas-puri.jpg";

// ---- Gallery images (4 per location) ----
import galleryDwarka1 from "@/assets/Gallery-dwarka1.jpg";
import galleryDwarka2 from "@/assets/Gallery-dwarka2.jpg";
import galleryDwarka3 from "@/assets/Gallery-dwarka3.jpg";
import galleryDwarka4 from "@/assets/Gallery-dwarka4.jpg";

import galleryPaschimVihar1 from "@/assets/Gallery-paschim-vihar1.jpg";
import galleryPaschimVihar2 from "@/assets/Gallery-paschim-vihar2.jpg";
import galleryPaschimVihar3 from "@/assets/Gallery-paschim-vihar3.jpg";
import galleryPaschimVihar4 from "@/assets/Gallery-paschim-vihar4.jpg";

import galleryRajouriGarden1 from "@/assets/Gallery-rajouri-garden1.jpg";
import galleryRajouriGarden2 from "@/assets/Gallery-rajouri-garden2.jpg";
import galleryRajouriGarden3 from "@/assets/Gallery-rajouri-garden3.jpg";
import galleryRajouriGarden4 from "@/assets/Gallery-rajouri-garden4.jpg";

import galleryJanakpuri1 from "@/assets/Gallery-janakpuri1.jpg";
import galleryJanakpuri2 from "@/assets/Gallery-janakpuri2.jpg";
import galleryJanakpuri3 from "@/assets/Gallery-janakpuri3.jpg";
import galleryJanakpuri4 from "@/assets/Gallery-janakpuri4.jpg";

import galleryPrashantVihar1 from "@/assets/Gallery-prashant-vihar1.jpg";
import galleryPrashantVihar2 from "@/assets/Gallery-prashant-vihar2.jpg";
import galleryPrashantVihar3 from "@/assets/Gallery-prashant-vihar3.jpg";
import galleryPrashantVihar4 from "@/assets/Gallery-prashant-vihar4.jpg";

import galleryVikasPuri1 from "@/assets/Gallery-vikas-puri1.jpg";
import galleryVikasPuri2 from "@/assets/Gallery-vikas-puri2.jpg";
import galleryVikasPuri3 from "@/assets/Gallery-vikas-puri3.jpg";
import galleryVikasPuri4 from "@/assets/Gallery-vikas-puri4.jpg";

import galleryKirtiNagar1 from "@/assets/Gallery-kirti-nagar1.jpg";
import galleryKirtiNagar2 from "@/assets/Gallery-kirti-nagar2.jpg";
import galleryKirtiNagar3 from "@/assets/Gallery-kirti-nagar3.jpg";
import galleryKirtiNagar4 from "@/assets/Gallery-kirti-nagar4.jpg";

import galleryPunjabiBagh1 from "@/assets/Gallery-Punjabi bagh1.jpg";
import galleryPunjabiBagh2 from "@/assets/Gallery-Punjabi bagh2.jpg";
import galleryPunjabiBagh3 from "@/assets/Gallery-Punjabi bagh3.jpg";
import galleryPunjabiBagh4 from "@/assets/Gallery-Punjabi bagh4.jpg";

export const IMAGES = {
  // Hero / global
  hero,
  aboutHero: hero,

  // Program / service images — swap freely
  services: {
    gym: strength,
    yogaPilates: yoga,
    zumba: dance,
    kickboxing: hiit,
    nutrition: yoga,
    bootcamp: hiit,
    weightTraining: strength,
  },

  // Trainer portraits
  trainers: {
    trainer1,
    trainer2,
    trainer3,
    trainer4,
    trainer5,
    trainer6,
    trainer7,
    trainer8,
    trainer9,
  },

  // Before/after
  transformations: {
    t1: transform1,
    t2: transform2,
    t3: transform3,
  },

  // Location-specific image galleries for each branch
  locations: {
    "punjabi-bagh": {
      hero: heroPunjabiBagh,
      about: aboutPunjabiBagh,
      gallery: [galleryPunjabiBagh1, galleryPunjabiBagh2, galleryPunjabiBagh3, galleryPunjabiBagh4],
    },
    "rajouri-garden": {
      hero: heroRajouriGarden,
      about: aboutRajouriGarden,
      gallery: [galleryRajouriGarden1, galleryRajouriGarden2, galleryRajouriGarden3, galleryRajouriGarden4],
    },
    "paschim-vihar": {
      hero: heroPaschimVihar,
      about: aboutPaschimVihar,
      gallery: [galleryPaschimVihar1, galleryPaschimVihar2, galleryPaschimVihar3, galleryPaschimVihar4],
    },
    janakpuri: {
      hero: heroJanakpuri,
      about: aboutJanakpuri,
      gallery: [galleryJanakpuri1, galleryJanakpuri2, galleryJanakpuri3, galleryJanakpuri4],
    },
    "kirti-nagar": {
      hero: heroKirtiNagar,
      about: aboutKirtiNagar,
      gallery: [galleryKirtiNagar1, galleryKirtiNagar2, galleryKirtiNagar3, galleryKirtiNagar4],
    },
    "prashant-vihar": {
      hero: heroPrashantVihar,
      about: aboutPrashantVihar,
      gallery: [galleryPrashantVihar1, galleryPrashantVihar2, galleryPrashantVihar3, galleryPrashantVihar4],
    },
    dwarka: {
      hero: heroDwarka,
      about: aboutDwarka,
      gallery: [galleryDwarka1, galleryDwarka2, galleryDwarka3, galleryDwarka4],
    },
    "vikas-puri": {
      hero: heroVikasPuri,
      about: aboutVikasPuri,
      gallery: [galleryVikasPuri1, galleryVikasPuri2, galleryVikasPuri3, galleryVikasPuri4],
    },
  } as Record<string, { hero: string; about: string; gallery: string[] }>,
};