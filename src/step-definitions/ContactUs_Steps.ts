import { Given, When, Then } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';

// Home page Cucumber step definitions.
// Placeholder steps currently log actions and use Playwright variables.
let browser: Browser; // Playwright browser instance
let context: any; // Browser context
let page: Page; // Page object

When('I enter a valid first name', async () => {
    console.log('Entering a valid first name');
    // await page.pause();
    await page.getByRole('textbox', { name: 'First Name' }).fill('John');
});