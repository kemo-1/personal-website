// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      allowedHosts:["wpm2df91hnqe.share.zrok.io"]

    },
    plugins: [tailwindcss(
   
    )]
  }
});