// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  srcDir: 'src/',
  css: [
    '@/assets/css/main.scss'
  ],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', '@nuxt/icon'],
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  }
});