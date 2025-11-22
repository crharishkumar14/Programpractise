const{test,expect}= require('@playwright/test');
test('housecallpro', async({page})=>{
await page.goto("https://www.housecallpro.com/");
await page.locator('//a[label="Housecall Pro Logo"]').click();
await page.waitForTimeout(5000);
});
