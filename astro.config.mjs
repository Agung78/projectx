// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
const site = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://projectx-gold.vercel.app';

export default defineConfig({
  site,
  integrations: [icon(),
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", id: "id" } },
      serialize: (item) => ({ ...item, lastmod: new Date().toISOString() }),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    // Emit every script as a file so CSP can drop script-src 'unsafe-inline'.
    build: { assetsInlineLimit: 0 },
  },
});
