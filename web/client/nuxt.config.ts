import pkg from './package.json';

// autoFix = true
const autoFix
  = process.env.VITE_AUTOFIX !== 'false'
  && process.env.VITE_AUTOFIX !== 'no';
// isProduction = true
const isProduction
  = process.env.PRODUCTION === 'production';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',

  devtools: { enabled: !isProduction },

  extends: [
    '@nuxt/ui-pro',
  ],

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
  ],

  eslint: {
    checker: {
      lintOnStart: autoFix,
    },
    config: {
      stylistic: true,
    },
  },

  runtimeConfig: {
    public: {
      version: pkg.version,
    },
  },

  typescript: {
    strict: true,
  },

  vite: {
    server: {
      strictPort: true,
    },
  },
});
