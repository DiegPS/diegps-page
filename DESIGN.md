# DESIGN — Diego Pahua Silvan Portfolio

## Visual thesis

An editorial product field-guide presented through real software surfaces. The site feels like an independent creative developer’s release notebook: precise, dense where the work is dense, and quiet where the work needs space. Product screenshots are the visual story, never decoration.

## Core language

- **Canvas:** warm mineral paper (`#e9e7df`) with near-black ink (`#11110f`). Dark product bands may use `#111312`.
- **Signals:** AirDown cyan (`#00d9c6`), AirStream signal green (`#62ff2e`), DevScope amber (`#f5c84b`). Never combine them as a gradient.
- **Typography:** bold grotesk/sans for statements; compact mono for labels, metadata and navigation. Headlines are editorial, not SaaS-sized.
- **Geometry:** square and lightly chamfered surfaces. Default radius 0–8px. Pill shapes only for true status labels.
- **Lines:** 1px rules organize the page like a technical document. Avoid floating card grids.
- **Composition:** asymmetric columns, oversized project numerals, cropped software windows, vertical annotations and deliberate overlap.

## Page behavior

- The first viewport identifies Diego, his role and the three real products immediately.
- The homepage is a narrative index, not a generic landing page.
- Product routes behave like compact product dossiers with a strong screenshot-led opening.
- Privacy routes are sober legal documents sharing the same header and typographic system.
- Desktop uses editorial splits and controlled overlaps; mobile becomes a strict single-column reading order.

## Imagery

- Use only supplied logos and real screenshots.
- Screenshots remain legible and uncropped when conveying a workflow; decorative crops are allowed only when the full screenshot appears elsewhere nearby.
- Window frames are minimal: one line, one label, no fake browser chrome.
- AirStream and DevScope screenshots containing live/private-looking data should be framed as product previews, not enlarged beyond what is needed.

## Motion

- Motion communicates hierarchy: a short initial reveal, gentle screenshot drift, and line/label transitions.
- No parallax spectacle, blob movement, infinite marquee or gratuitous WebGL.
- Honor `prefers-reduced-motion`.

## Interaction

- Links use visible underlines or directional arrows; hover changes position/color subtly.
- Focus states are high contrast and never removed.
- Navigation stays compact and functional.

## Anti-patterns

- No purple/blue gradients, glassmorphism, glow clouds, feature-card carpets, fake metrics, stock 3D objects, testimonials, pricing sections or invented claims.
- No repeated rounded rectangles as the main layout system.
- No generic “building digital experiences” language.

## Content voice

- Concrete, direct and bilingual-aware. Describe what the software does, how it works locally, and who it helps.
- Prefer evidence visible in the product: formats, local processing, platforms, components and workflows.
- Never imply open-source availability for private repositories.
