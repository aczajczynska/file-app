import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    video: false,
    viewportWidth: 1920, 
    viewportHeight: 1080, 
    supportFile: 'cypress/support/index.ts',
    chromeWebSecurity: false
  },
});
