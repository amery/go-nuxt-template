// @ts-check
import withNuxt from './web/client/.nuxt/eslint.config.mjs';

export default withNuxt({
  files: [
    '**/*.{cjs,mjs,js,ts,vue}',
  ],
  rules: {
    'vue/multi-word-component-names': "off",
    '@stylistic/brace-style': ['error', '1tbs'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/semi': ['error', 'always'],
  },
});
