import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://useduanly.github.io",
  base: "/my-astro-basico",
  integrations: [react()],
});
