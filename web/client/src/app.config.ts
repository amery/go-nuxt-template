const primary = 'blue';
const gray = 'neutral';

export default defineAppConfig({
  myThing: {
    something: 'a string value',
  },
  ui: {
    primary,
    gray,

    variables: {
      light: {
        background: 'var(--color-gray-100)',
        foreground: 'var(--color-gray-900)',
      },
      dark: {
        background: 'var(--color-gray-900)',
        foreground: 'var(--color-gray-200)',
      },
    },
  },
});
