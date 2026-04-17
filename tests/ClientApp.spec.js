const { test, expect } = require('@playwright/test');
 
test.only('Client App login', async ({ page }) => {
    // js file- Login js, DashboardPage
    // Values for Login 
    const email = "anshika@gmail.com";
    const productName = 'zara coat 3';
    const products = page.locator(".card-body");
    
    // Locator 
    const useremail = await page.locator("#userEmail");
    const password = await page.locator("#userPassword");
    const loginbtn = await page.locator("[value='Login']");
    const cardtitle = await page.locator(".card-body b");

    // Navigating to the website
    await page.goto("https://rahulshettyacademy.com/client");

    // Filling the details
    await useremail.fill(email);
    await password.type("Iamking@000");
    await loginbtn.click();

    // Waiting for page to load
    await page.waitForLoadState('networkidle'); // OR
    // await cardtitle.first().waitFor();
    
    //Returning all the title and printing
    const alltitles = await page.locator(".card-body b").allTextContents();
    console.log(alltitles); 
})