import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
const root = path.resolve(import.meta.dirname, "..");
const output = path.join(root, "public/social");
await fs.mkdir(output, { recursive: true });
const brand = await fs.readFile(path.join(root, "public/brand-mark.svg"), "utf8");
const entries = [
  ["workser", "Workser / v0.2.0", "Busca trabajo.", "Reduce el ruido.", "workser-filters"],
  ["onauto", "OnAuto / Publicado", "Toda la operación.", "Una plataforma.", "onauto-dashboard"],
  ["portfolio", "Diego Pahua Silvan", "De una idea", "a tu pantalla.", "airdown-main-dark"],
  ["airdown", "AirDown / Publicado", "Tus medios.", "A tu manera.", "airdown-main-dark"],
  [
    "airstream",
    "AirStream Studio / En desarrollo",
    "Todo tu directo.",
    "Un solo lugar.",
    "airstream-connections",
  ],
  ["gachy", "Gachy / En desarrollo", "Cada tirada", "cuenta una historia.", "gachy-overview"],
  ["godsense", "GodSense / En desarrollo", "Otra perspectiva", "de la partida.", "godsense-scout"],
  ["devscope", "DevScope / Terminado", "Tu universo", "de código.", "devscope-main"],
];
async function screen(name, width, height) {
  return sharp(path.join(root, `public/assets/optimized/${name}-1280.webp`))
    .resize(width, height, { fit: "inside" })
    .png()
    .toBuffer();
}
for (const [slug, label, line1, line2, image] of entries) {
  const background = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><defs><radialGradient id="light"><stop stop-color="#4552a0" stop-opacity=".45"/><stop offset="1" stop-color="#0a0b10" stop-opacity="0"/></radialGradient></defs><rect width="1200" height="630" fill="#0a0b10"/><ellipse cx="600" cy="400" rx="600" ry="250" fill="url(#light)"/><text x="50" y="57" font-family="Arial" font-size="27" font-weight="bold" fill="#f0f1f7">diegps</text><text x="1150" y="54" text-anchor="end" font-family="Arial" font-size="13" fill="#a2a4b4">${label}</text><text x="600" y="160" text-anchor="middle" font-family="Arial" font-size="69" letter-spacing="-3" fill="#f0f1f7">${line1}</text><text x="600" y="237" text-anchor="middle" font-family="Arial" font-size="69" letter-spacing="-3" fill="#bdc1d5">${line2}</text><text x="50" y="598" font-family="Arial" font-size="12" fill="#a2a4b4">Diego Pahua Silvan / Escritorio · Web · Sistemas</text></svg>`,
  );
  const front = await screen(image, 570, 280);
  const frontDimensions = await sharp(front).metadata();
  const left = await sharp(
    await screen(
      slug === "workser"
        ? "workser-analytics"
        : slug === "onauto"
          ? "onauto-reports"
          : "devscope-main",
      320,
      205,
    ),
  )
    .modulate({ brightness: 0.65 })
    .rotate(-8, { background: "#00000000" })
    .png()
    .toBuffer();
  const right = await sharp(
    await screen(
      slug === "workser"
        ? "workser-settings"
        : slug === "onauto"
          ? "onauto-audit"
          : "airstream-connections",
      320,
      205,
    ),
  )
    .modulate({ brightness: 0.65 })
    .rotate(8, { background: "#00000000" })
    .png()
    .toBuffer();
  const mark = await sharp(Buffer.from(brand)).resize(30, 30).png().toBuffer();
  await sharp(background)
    .composite([
      { input: left, left: 80, top: 330 },
      { input: right, left: 780, top: 330 },
      { input: front, left: Math.round((1200 - frontDimensions.width) / 2), top: 288 },
      { input: mark, left: 145, top: 30 },
    ])
    .png()
    .toFile(path.join(output, `${slug}.png`));
}
const favicon = brand.replace("<g ", '<rect width="64" height="64" rx="14" fill="#0a0b10"/><g ');
await fs.writeFile(path.join(root, "public/favicon.svg"), favicon);
await sharp(Buffer.from(favicon))
  .resize(180, 180)
  .png()
  .toFile(path.join(root, "public/apple-icon.png"));
console.log(`${entries.length} spatial social images, favicon and Apple icon generated.`);
