# DiegPS — Software that comes alive

## Research and decisions

Studied Lusion (https://lusion.co/) for spatial art direction, Codrops' on-scroll perspective grids (https://tympanus.net/codrops/2023/08/03/on-scroll-perspective-grid-animations/) for depth linked to scrolling, and Bruno Simon (https://bruno-simon.com/) for interaction that gives a portfolio its own identity.

Considered an editorial paper archive, an OS/terminal simulation, and a cinematic software scene. The user rejected paper/cream, rigid rules, tab toolbars around the screenshots, and simply reversing the original two-column layout. An OS simulation adds UI unrelated to discovering the work. The chosen direction builds the composition and movement from the actual software interfaces, which are the subject of this portfolio.

## Art direction

Graphite #0a0b10, cool white #f0f1f7, periwinkle #a9b6ff, restrained cobalt lighting and each product's native colors. Modern grotesk typography keeps the site current. No paper palette, faux stickers, decorative toolbars or invented metrics.

The three-screen arrangement is the central motif. Perspective, separate depth planes, light and a subtle orbital geometry connect desktop software to a spatial experience. Selecting the exposed portion of a lateral screenshot brings its project forward. The central screenshot opens its real full-size image; the discreet title links to its case study.

## Motion choreography

Desktop native scroll drives a short sticky scene: the heading moves up, the side screens separate in depth and the camera changes perspective. Pointer movement adds a small camera tilt. Later project screens rotate and translate according to their viewport position. A shared baseline and consistent two-column project rows keep navigation and reading order clear. Depth motion is restrained and symmetric.

Motion uses IntersectionObserver and one scheduled animation frame per input, with no continuous background render loop. Content is always present in server HTML. No loader, scroll hijack, automatic carousel or audio. Small screens keep all three interfaces but remove the pinned sequence and camera tilt. Reduced-motion mode presents a static layout and disables transformations.

## Site and accessibility

A maximum 1280px content width prevents ultrawide stretching. Product pages continue the same visual identity with a widescreen cover. Existing availability, downloads, content and legal documents retain their meaning. Gallery controls support keyboard arrows; native dialogs support Escape and restore focus. Focus remains visible, screenshots retain intrinsic proportions, and navigation is available on mobile.

## Maintenance

Home/product styles are scoped under .portfolio. Typed project data stays centralized. Run npm run assets:social to regenerate previews and icons. Verify types, build, HTTP routes, native scrolling, keyboard navigation, modal focus, narrow layouts and ultrawide limits before publishing the generated build with Wrangler.

## Proportions, hierarchy and light

Use each screenshot’s intrinsic aspect ratio from the image manifest to calculate its container width. Never shrink an image into a wider colored box; scale the frame and image together. Apply the same rule to social previews. The selected project sits on the center axis; neighboring captures use equivalent depth and mirrored small inclinations. Labels share a stable baseline and a brief hint explains the interaction.

The author line is 15px on desktop and 13px on mobile, rather than tiny metadata beneath a large title. Supporting copy and project descriptions remain readable. Atmospheric light lives in a full-viewport layer behind the scene, independent from the maximum content width, and fades at all edges. Screens keep their width limit; light never inherits that limit.

## Impeccable refinement — November 2026

Preserve the established spatial, dark portfolio identity. Project imagery remains the subject. Section headings carry their own meaning without generic numbered kickers. Supporting copy uses a shared 15px scale and essential metadata a 12px minimum; heading tracking stops at -0.04em.

Gallery neighbors are real previous/next buttons with at least 44px targets, including mobile. Screenshot edges remain clickable as an alternative. The project name remains the case-study link; screenshot buttons open a native dialog. The dialog caption describes enlargement rather than asserting every visual is a product screenshot, because OnAuto also uses promotional artwork.

Use the graphite/periwinkle root tokens on legal pages as well as portfolio pages. Choose one screenshot frame treatment rather than adding a border plus a broad shadow. Portrait previews preserve their natural proportions and have a height-derived width limit in mobile project cards.

Scroll motion batches layout reads before style writes. Compact screens and reduced-motion settings reset depth and camera offsets. Preserve immediate color and focus feedback rather than globally removing all transitions. See DESIGN-REVIEW.md for evidence and limits of the quality pass.
