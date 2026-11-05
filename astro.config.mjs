// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
const site = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://www.kyronengineering.com';

const PAGE_DATES = {
  '/': new Date('2026-11-03T00:00:00Z'),
  '/about/': new Date('2026-11-05T00:00:00Z'),
  '/approach/': new Date('2026-11-03T00:00:00Z'),
  '/contact/': new Date('2026-11-03T00:00:00Z'),
  '/privacy/': new Date('2026-11-02T00:00:00Z'),
};

export default defineConfig({
  site,

  integrations: [icon(),
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", id: "id" } },
      serialize(item) {
        const pathname = new URL(item.url).pathname.replace(/^\/id(?=\/|$)/, '') || '/';
        item.lastmod = PAGE_DATES[pathname] || new Date('2026-11-03T00:00:00Z');
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    // Emit every script as a file so CSP can drop script-src 'unsafe-inline'.
    build: { assetsInlineLimit: 0 },
  },

  adapter: vercel(),
});