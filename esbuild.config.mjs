// esbuild.config.js
import { build } from "esbuild";

await build({
  entryPoints: ["src/visualizer.ts"],
  bundle: true,
  outfile: "dist/visualizer.js",
  format: "esm", // formato compatible con content scripts
  // format: "iife", // formato compatible con content scripts
  minify: true,
  sourcemap: true,
  target: ["chrome58"], // extensiones
});
