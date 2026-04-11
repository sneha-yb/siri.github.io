import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base fixes asset URLs on GitHub Pages project sites
// (https://<user>.github.io/<repo>/) without hard-coding the repo name.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "./" : "/",
}));
