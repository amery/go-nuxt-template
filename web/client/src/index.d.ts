import type { myThingAppConfig } from './types';

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myThing?: myThingAppConfig
  }
}

export {};
