import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const source = path.join(root, "public/assets");
const output = path.join(source, "optimized");
await fs.mkdir(output, { recursive: true });
const manifest = {};
let originalBytes = 0;
let optimizedBytes = 0;
for (const file of await fs.readdir(source)) {
  if (!file.endsWith(".png")) continue;
  const name = path.basename(file, ".png");
  const input = path.join(source, file);
  const { width, height } = await sharp(input).metadata();
  manifest[name] = { width, height };
  originalBytes += (await fs.stat(input)).size;
  if (/logo|icon/.test(name)) {
    await sharp(input)
      .resize(192, 192, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 90, effort: 6 })
      .toFile(path.join(output, `${name}.webp`));
    optimizedBytes += (await fs.stat(path.join(output, `${name}.webp`))).size;
  } else {
    for (const size of [640, 960, 1280, 1920]) {
      await sharp(input)
        .resize(size)
        .webp({ quality: 86, effort: 6 })
        .toFile(path.join(output, `${name}-${size}.webp`));
    }
    optimizedBytes += (await fs.stat(path.join(output, `${name}-1280.webp`))).size;
  }
}
const logo =
  '<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192"><rect width="192" height="192" rx="40" fill="#28271f"/><path d="m48 63 34 33-34 33m49 0h47" fill="none" stroke="#edc78a" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/></svg>';
await sharp(Buffer.from(logo)).webp().toFile(path.join(output, "devscope-logo.webp"));
await fs.writeFile(
  path.join(root, "app/lib/image-manifest.json"),
  JSON.stringify(manifest, null, 2) + "\n",
);
console.log(
  `Assets prepared. PNG sources: ${(originalBytes / 1024 / 1024).toFixed(2)} MB; primary WebP variants: ${(optimizedBytes / 1024 / 1024).toFixed(2)} MB (${Math.round((1 - optimizedBytes / originalBytes) * 100)}% smaller).`,
);
