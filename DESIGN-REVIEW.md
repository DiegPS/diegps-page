# Impeccable refinement — 2026-11-05

Applied Impeccable 4.8.0 from https://github.com/pbakaus/impeccable using its context launcher, audit and polish playbooks, craft floor and source detector. Scope: refine the existing identity, not redesign or migrate the framework. Existing product claims and the user's preferred three-image composition are preserved.

## Findings addressed

| Priority | Finding                                                                                           | Resolution                                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| P2       | Gallery selection depends on small exposed image edges, particularly on mobile                    | Added labeled previous/next buttons with 44px minimum targets and retained keyboard arrows and image-edge controls     |
| P2       | Supporting text and metadata shrink to 7–10px, and headings use excessively tight tracking        | Shared 15px reading copy, 12px metadata floor in active portfolio/product/legal styles and tracking limited to -0.04em |
| P2       | Legacy green root theme leaks into legal pages and browser surfaces                               | Unified root palette, selection and theme color with the graphite/periwinkle identity                                  |
| P2       | Image dialog claims every asset is a real screenshot                                              | Neutral enlargement caption; promotional visual labeling remains in the project data                                   |
| P2       | Portrait gallery assets become excessively tall in mobile project cards                           | Height-derived preview width while preserving source aspect ratios                                                     |
| P2       | Motion code interleaves element reads and writes and continues computing depth on compact screens | Batch geometry reads; reset depth and pointer offsets for compact/reduced-motion layouts                               |
| P3       | Repeated generic kickers, ordinal decorations and doubled frame elevation compete with the work   | Removed redundant section/feature labels and case-study numbers; simplified screenshot frame treatment                 |
| P3       | Source detector identifies an obsolete decorative grid in legacy CSS                              | Removed the unused `.stage-grid` rule                                                                                  |

## Verification

- Production build and TypeScript validation.
- HTTP route suite: twelve pages, metadata, responsive assets, sitemap, robots and 404 (15 checks).
- Headless Microsoft Edge: home, Workser, OnAuto and AirDown privacy at 320, 390, 768 and 1440px; no document-level horizontal overflow.
- Axe WCAG A/AA automated checks on the same four pages at 390 and 1440px: zero reported violations in these eight page/viewport combinations.
- Interactive checks: mobile menu opening, Escape and focus restoration; gallery selection by button and keyboard; native screenshot dialog opening, Escape and focus return; reduced-motion depth reset.
- Visual review of desktop/mobile home screenshots. Static composition and source aspect ratios preserved.
- Impeccable source detector: one advisory for the obsolete `.stage-grid`, removed. Detector output is not a visual-quality score.

Automated checks do not establish full WCAG conformance. Physical-device touch, screen-reader announcement quality, all browser engines and zoom-specific behavior were not comprehensively tested. Third-party application screenshots are product artifacts, not editable interface text. The existing framework remains Vinext/React; this pass does not claim an Astro migration or a measured bundle reduction.

## OnAuto real-image follow-up

Replaced the promotional AI artwork and older login image with five actual captures from the current native Windows Demo 1.0.6+9: dashboard, orders, reports, audit and reception settings. Captured the running app with the computer-use tool after the user signed in. The instance contains synthetic demo data; no customer account or credentials are included in the published captures. No generated imagery is used for OnAuto's gallery or social card. The native app's own AI-assistant controls are part of the real interface, not generated artwork.

Rebuilt responsive WebP variants and the social card, and removed obsolete OnAuto image sources and variants from the published asset set. The original captures retain the Windows title bar as evidence of the native application.
