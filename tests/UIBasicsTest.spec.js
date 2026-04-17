import { expect, test } from '@playwright/test';

test('Login Page Practice - Test', async ({browser})=> // Using ananymous function to write test case
{ 
    const context = await browser.newContext(); // To open browser
    const page = await context.newPage(); // To open new tab in the browser
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/'); // Navigate to a website

    // Playwright Code 
    console.log("My First Playwright Test");
    console.log(await page.title());  // To get the title of the page
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy"); // To verify the title of the page

    // Locators
    const usernameField = await page.locator('#username'); // To locate the username field
    const passwordField = await page.locator('#password'); // To locate the password field
    const signInButton = await page.locator("#signInBtn"); // To locato the Sign in button
    await usernameField.fill('rahulshettyacademy'); // To fill the username field
    await passwordField.fill('Learning'); // To fill the password field
    await signInButton.click(); // To click the sign in button

    //wait for the error message to appear and verify its text
    const errorMessage = await page.locator("[style*='block']").textContent(); // To locate the error message element
    await console.log(errorMessage);

    // clearing the data from textbox
    await usernameField.fill(''); // To fill the username field
    await passwordField.fill(''); // To fill the password field

    await usernameField.fill('rahulshettyacademy'); // To fill the username field
    await passwordField.fill('Learning@830$3mK2'); // To fill the password field
    await signInButton.click(); // To click the sign in button

    // locator for product title
    const cardTitles = await page.locator(".card-body a");
    //  console.log(cardTitles); // printing locator value to console
    
    // returning first and second product title
    console.log(await cardTitles.first().textContent()); // first card title
    console.log(await cardTitles.nth(1).textContent()); // second card title

    // return all the title
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);

    // Close the browser
    await context.close(); 

});