import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import dasiyui from 'daisyui';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://www.inmarket.online',
  integrations: [react(),tailwind({
    config: {
      path: './tailwind.config.cjs'
    },
    plugins: [dasiyui]
  }),  sitemap({  
    i18n: {
      defaultLocale: 'en', 
      locales: {
        en: 'en-US',  
        es: 'es-ES',
        fr: 'fr-CA',
      },
    },
  }),]
});