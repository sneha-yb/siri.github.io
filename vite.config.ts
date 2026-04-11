import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub project page: https://<user>.github.io/<repo>/
// If the repo is exactly <user>.github.io (user site), use base: "/" for build too.
const GH_PAGES_BASE = "/siri.github.io/";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? GH_PAGES_BASE : "/",
}));
