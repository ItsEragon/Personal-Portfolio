import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

/**
 * Builds a PNG-frame multi-size favicon.ico from public/favicon.svg.
 * Run `npm run favicon` after replacing the SVG.
 */
const source = 'public/favicon.svg';
const out = 'public/favicon.ico';
const sizes = [16, 32, 48, 64, 128, 256];

const frames = await Promise.all(
  sizes.map(async (size) => ({
    size,
    png: await sharp(source, { density: 768 }).resize(size, size).png().toBuffer(),
  })),
);

const header = Buffer.alloc(6 + 16 * frames.length);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(frames.length, 4); // image count

let offset = header.length;
frames.forEach(({ size, png }, i) => {
  const entry = 6 + i * 16;
  header.writeUInt8(size === 256 ? 0 : size, entry); // width
  header.writeUInt8(size === 256 ? 0 : size, entry + 1); // height
  header.writeUInt8(0, entry + 2); // palette size
  header.writeUInt8(0, entry + 3); // reserved
  header.writeUInt16LE(1, entry + 4); // color planes
  header.writeUInt16LE(32, entry + 6); // bits per pixel
  header.writeUInt32LE(png.length, entry + 8); // image size
  header.writeUInt32LE(offset, entry + 12); // image offset
  offset += png.length;
});

const body = Buffer.concat(frames.map((f) => f.png));
await writeFile(out, Buffer.concat([header, body]));
console.log(`${out} (${frames.length} frames, ${header.length + body.length} bytes)`);
