import { Given, When, Then } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';

// Home page Cucumber step definitions.
// Placeholder steps currently log actions and use Playwright variables.
let browser: Browser; // Playwright browser instance
let context: any; // Browser context
let page: Page; // Page object

const url = 'https://webdriveruniversity.com'; // Home page URL

// Open the homepage.g
Given('I navigate to the WebDriverUniversity.com homepage', async () => {
    console.log('Navigating to the homepage');
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext({viewport: { width: 1920, height: 1080 }});
    page = await context.newPage();
    await page.goto(url);
});

// Click the Contact Us button.
When('I click on the Contact Us button', async () => {
    console.log('Clicking on the Contact Us button');
    //await page.pause();
    const contactUsButton = await page.getByRole('link', { name: 'CONTACT US Contact Us Form' });
    await contactUsButton.click();
});

When('I switch to the new tab', async () => {
    console.log('Switching to the new tab');
    page = await context.waitForEvent('page');
    await page.bringToFront();
});