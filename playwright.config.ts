import { defineConfig, devices } from '@playwright/test';
import { env as processEnv } from 'process';

// Playwright config for test discovery, browsers, retries, and reports.

/**
 * Optional env file loading.
 * Uncomment to use a .env file for configuration.
 */

export default defineConfig({
  // Location of Playwright tests.
  testDir: './e2e',

  // Run tests in parallel.
  fullyParallel: true,

  // Fail fast on CI when `test.only` is present.
  forbidOnly: !!processEnv.CI,

  // Retry failed tests only on CI.
  retries: processEnv.CI ? 2 : 0,

  // Reduce parallel workers on CI.
  workers: processEnv.CI ? 1 : undefined,

  // HTML report output.
  reporter: 'html',

  use: {
    // Uncomment to use a shared base URL.
    // baseURL: 'http://localhost:3000',

    // Capture trace on the first retry.
    trace: 'on-first-retry',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },

    // Example mobile project.
    // { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
  ],

  // Optional local server launch before tests.
  // webServer: { command: 'npm run start', url: 'http://localhost:3000' },
});
