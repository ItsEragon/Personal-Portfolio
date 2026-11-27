import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

/**
 * Builds the hero portrait from the transparent cutout in public/.
 * The reference uses a head-and-shoulders frame (720x677 / 420x395).
 * Run `npm run portrait` after replacing public/portrait.png.
 */
const source = 'public/portrait.png';
const outDir = 'public/assets';
const transparent = { r: 0, g: 0, b: 0, alpha: 0 };

/** Reference subject and frame ratios, measured from portrait-720.webp. */
const SUBJECT_ASPECT = 666 / 677;
const FRAME_ASPECT = 720 / 677;
const SUBJECT_WIDTH_RATIO = 666 / 720;

const trimmed = await sharp(source).trim({ background: transparent, threshold: 10 }).toBuffer();
const { width = 0, height = 0 } = await sharp(trimmed).metadata();
if (!width || !height) throw new Error('Could not read the portrait size');

const bustHeight = Math.min(height, Math.round(width / SUBJECT_ASPECT));
const frameWidth = Math.round(width / SUBJECT_WIDTH_RATIO);
const side = Math.round((frameWidth - width) / 2);

const bust = await sharp(trimmed)
  .extract({ left: 0, top: 0, width, height: bustHeight })
  .extend({ top: 0, bottom: 0, left: side, right: frameWidth - width - side, background: transparent })
  .toBuffer();

await mkdir(outDir, { recursive: true });

const frame = await sharp(bust)
  .resize({ width: 720, height: Math.round(720 / FRAME_ASPECT), fit: 'fill' })
  .webp({ quality: 84, alphaQuality: 90, effort: 6 })
  .toBuffer();

await sharp(frame).toFile(`${outDir}/portrait-720.webp`);
await sharp(frame).resize({ width: 420 }).webp({ quality: 84, alphaQuality: 90, effort: 6 }).toFile(`${outDir}/portrait-420.webp`);

console.log(`${outDir}/portrait-720.webp`);
console.log(`${outDir}/portrait-420.webp`);
