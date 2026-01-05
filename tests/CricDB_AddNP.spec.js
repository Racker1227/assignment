import { test, expect} from '@playwright/test';

test("Add new Player", async({page}) => {

    //goto link
    await page.goto("http://localhost:3000/");
    //locate and click on login button
    await page.getByTestId("header-login-button").click();
    //locate email filed
    await page.locator("//label[text()='Email Address']/following-sibling::div/input").fill("admin@cricketdb.com");
    //locate password filed
    await page.locator("//label[text()='Password']/following-sibling::div/input").fill("admin123");
    //locate SIGNIN button and click
    await page.locator("//button[text()='Sign In']").click();
    //validate URL after login
    await expect(page).toHaveURL("http://localhost:3000/players");


    //Add Player 
    //locate and click on Add Player button
    await page.locator("//button[text()='Add Player']").click();
    //validate Add Player pop up
    await expect(page.locator("//h2[text()='Add New Player']")).toBeVisible();
    //locate Name field and fill value
    await page.locator("//label[text()='Player Name']/following-sibling::div/input").fill("Rishi Dhawan");
    //locate Country field and fill value
    await page.getByTestId("country-select").selectOption("India");
    //locate Starting Year field and fill value
    await page.locator("//label[text()='Start Year']/following-sibling::div/input").fill("2010");
    //locate Role field and fill value
    await page.getByTestId("role-select").selectOption("Batsman");
    //locate Gender Checkbox and select value
    await page.locator("//input[@value='MALE']").click();
    //locate Add Player button and click
    await page.locator("//div[@role='dialog']//button[text()='Add Player']").click();



} );