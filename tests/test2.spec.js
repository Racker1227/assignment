import { test, expect,chromium } from '@playwright/test';

test("testcase1 - demo", async({page}) => {
    await page.goto("https://www.google.com");
});

test("testcase2 - demo", async({page}) => {
    await page.goto("https://www.gmail.com");
});

test.only("testcase3 - demo", async({page}) => {  // if we want run only 1-testcase
    await page.goto("https://www.facebook.com");
});

test("testcase4 - demo", async({page}) => {
    await page.goto("https://www.amazone.com");
});