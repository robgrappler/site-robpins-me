import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://vault.robpins.me',
  integrations: [tailwind({ applyBaseStyles: false })],
  vite: {
    ssr: {
      noExternal: ["robpins-match-db"]
    }
  }
});
