import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

const config = defineConfig({
  output: "server",
  integrations: [tailwind()],
});

export default defineConfig(config);
