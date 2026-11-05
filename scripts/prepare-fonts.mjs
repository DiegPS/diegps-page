import fs from "node:fs/promises";
import path from "node:path";

const output = path.resolve(import.meta.dirname, "../public/fonts");
await fs.mkdir(output, { recursive: true });
const fonts = [
  ["Plus+Jakarta+Sans:wght@400..800", "jakarta-latin", "plusjakartasans"],
  ["Instrument+Serif:ital@1", "instrument-italic", "instrumentserif"],
  ["JetBrains+Mono:wght@400..600", "mono-latin", "jetbrainsmono"],
];
for (const [family, name, licenseFolder] of fonts) {
  const response = await fetch(`https://fonts.googleapis.com/css2?family=${family}&display=swap`, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    },
  });
  if (!response.ok) throw new Error(`Font CSS: ${response.status}`);
  const css = await response.text();
  const latin = css.slice(css.lastIndexOf("/* latin */"));
  const url = latin.match(/url\((https:[^)]+)\)/)?.[1];
  if (!url) throw new Error(`Missing Latin font: ${name}`);
  const font = await fetch(url);
  if (!font.ok) throw new Error(`Font download: ${font.status}`);
  await fs.writeFile(path.join(output, `${name}.woff2`), Buffer.from(await font.arrayBuffer()));
  const license = await fetch(
    `https://raw.githubusercontent.com/google/fonts/main/ofl/${licenseFolder}/OFL.txt`,
  );
  if (!license.ok) throw new Error(`Missing license: ${name}`);
  await fs.writeFile(path.join(output, `${name}-OFL.txt`), await license.text());
  console.log(`${name}.woff2 prepared with license.`);
}
