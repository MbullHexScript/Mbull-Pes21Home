import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://mbull-pes21-home.vercel.app',
  integrations: [sitemap(), react()],
  markdown: {},
  vite: {
    plugins: [tailwindcss()]
  }
})

