import { Given, When, Then } from '@cucumber/cucumber';
import { Browser,Page } from "playwright";

let browser: Browser;
let context: any; // Placeholder for the browser context
let page: Page; // Placeholder for the page object

Given('I navigate to the WebDriverUniversity.com homepage', async () => {
    console.log("Navigating to the WebDriverUniversity.com homepage");
});

When('I click on the Contact Us button', async () => {
    console.log("Clicking on the Contact Us button");
});
When('I enter a valid first name', function () {
    console.log("Entering a valid first name");
});

When('I enter a valid last name', function () {
    console.log("Entering a valid last name");
});

When('I enter a valid email address', function () {
    console.log("Entering a valid email address");
});

When('I enter a valid message', function () {
    console.log("Entering a valid message");
});

When('I click on the submit button', function () {
    console.log("Clicking on the submit button");
});

Then('I should see a success message confirming the form submission', function () {
    console.log("Checking for success message");
});