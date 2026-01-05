import { test, expect} from '@playwright/test';


test("testcase2 - demo", async({page}) => {
    //goto link
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //locate username filed
    await page.getByPlaceholder("Username").fill("Admin");

    //locate password filed
    await page.getByPlaceholder("Password").fill("admin123");

    // locate login button to xpath
    const ele = page.locator("//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button");
    await ele.click();
});