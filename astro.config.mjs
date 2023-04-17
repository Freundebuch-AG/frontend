import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

const config = defineConfig({
  integrations: [tailwind()],
});

export default defineConfig(config);
