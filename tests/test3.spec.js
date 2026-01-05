import { test, expect} from '@playwright/test';

test("testcase1 - demo", async({page}) => {
    await page.goto("http://localhost:3000/analytics");

    //locate login button
    await page.getByTestId("header-login-button").click();

    await page.waitForSelector("#email",
                {state: "visible", timeout: 10000});

    //locate login field
    await page.locator("id=email").fill("admin@cricketdb.com");

    //locate password field
    await page.locator("id=password").fill("admin123");

    //click sign in button
    await page.getByTestId("login-submit").click();


});

