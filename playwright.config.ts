import { defineConfig } from '@playwright/test';

const BASE = process.env.BASE_PATH || '/propel-lab-website';

export default defineConfig({
  webServer: {
    command: 'npm run preview',
    port: 4321,
    reuseExistingServer: true,
  },
  use: {
    baseURL: `http://localhost:4321${BASE}`,
  },
});
