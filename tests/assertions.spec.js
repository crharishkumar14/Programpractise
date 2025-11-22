//import{test} from'@playwright/test'
const{test,expect} = require('@playwright/test');
test('asserrtionpractise', async({page})=>
    {
    await page.goto("https://www.playwright.dev");
   await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
    await expect(page).toHaveURL("https://playwright.dev/");
    await expect(page.locator('.getStarted_Sjon')).toHaveText('Get started');
    await expect(page.locator('.getStarted_Sjon')).toHaveText(/Get started/);
    await page.locator('.getStarted_Sjon').click();
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL("https://playwright.dev/docs/intro");
    await expect(page).toHaveTitle('Installation | Playwright');
    //headers
    await expect(page.locator('//h1[normalize-space()="Installation"]')).toHaveText(/^Installation$/);
    await page.locator('//a[normalize-space()="How to install Playwright"]').click();
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL("https://playwright.dev/docs/intro#installing-playwright");
     console.log("hello playwright learner: keep learning");
});