# Dependency audit notes

The redesign updates Next to 16.3.8, Sharp to 0.35.5, Vinext and its Cloudflare adapter to 1.0.1, the Cloudflare Vite plugin to 1.62.5 and Wrangler to 4.147.0. The lockfile captures the complete dependency graph.

Satori's transitive `fflate` dependency is overridden to 0.8.3 to remove the malformed-ZIP64 advisory. This website generates its social cards ahead of time with Sharp, rather than exposing an ImageResponse endpoint. Build and route checks validate the updated tree.

## Remaining upstream advisory

`npm audit` reports seven high-severity package entries from one underlying issue: [GHSA-vfj7-8cjw-p6xm in braces](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). The chain is `@vinext/cloudflare → vinext → vite-plugin-commonjs → vite-plugin-dynamic-import → fast-glob → micromatch → braces`.

At review time, the advisory lists no patched version of braces. The project does not provide a user-facing glob-pattern input. This reduces the relevant exposure, but does not remove the advisory from the installed dependency tree.

`npm audit fix --force` suggests downgrading the framework; this is not a compatible patch for this application and has not been applied. Update when an upstream fix or a compatible dependency replacement becomes available, then run formatting, types, build and route checks.
