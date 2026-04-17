// @ts-check
import { defineConfig, devices } from '@playwright/test';
/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // Directory where the test files are located.
  testDir: './tests',

  // to over write the default timeout of 30 seconds for each test
  timeout: 60 * 1000, // 1 minute

  /* Run tests in files in parallel */
  fullyParallel: true,

  // to over write detault timeout for assertions.
  expect: {
    /* Maximum time expect() should wait for the condition to be met. */
    timeout: 5000 // 5 seconds
  },

  // Reporter to use for test results in HTML format. See https://playwright.dev/docs/test-reporters
  reporter: 'html',

  use: {
    browserName: 'chromium', // To run tests in firefox browser. By default it runs in chromium browser.
    headless: false, // To run tests in headed mode. By default it runs in headless(true) mode. set it to false to see the browser while running tests.
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    }
});

