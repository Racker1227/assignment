import { test, expect} from '@playwright/test';

test("testcase1 - CricDB URL validation", async({page}) => {
    //goto link
    await page.goto("http://localhost:3000/analytics");
});