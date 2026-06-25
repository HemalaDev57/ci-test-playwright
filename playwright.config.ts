import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  reporter: [['json', { outputFile: 'playwright-results.json' }]],
  use: {
    headless: true,
    baseURL: 'https://example.com',
  },
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }],
});
