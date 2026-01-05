import { test, expect} from '@playwright/test';


test("testcase1 - CricDB URL validation", async({page}) => {
    //goto link
    await page.goto("http://localhost:3000/analytics");
});


test("testcase2 - CricDB Login validation", async({page}) => {

    //goto link
    await page.goto("http://localhost:3000/analytics");

    //locate and click on login button
    await page.getByTestId("header-login-button").click();

    //locate username filed
    await page.locator("//input[@id='email']").fill("admin@cricketdb.com");

    //locate password filed
    await page.locator("//input[@id='password']").fill("admin123");

    //locate SIGNIN button and click
    await page.getByTestId('login-submit').click();
});


test("testcase3 - CricDB Invalid Login validation", async({page}) => {

    //goto link
    await page.goto("http://localhost:3000/analytics"); 

     //locate and click on login button
    await page.getByTestId("header-login-button").click();

    //locate username filed
    await page.locator("//input[@id='email']").fill("Admin@cr.com");

    //locate password filed
    await page.locator("//input[@id='password']").fill("Admin@123");

    //locate SIGNIN button and click
    await page.locator("//button[text()='Sign In']").click();

});

test("testcase4 - CricDB Empty Login validation", async({page}) => {

    //goto link
    await page.goto("http://localhost:3000/analytics");

    //locate and click on login button
    await page.getByTestId("header-login-button").click();

    //locate username filed
    await page.locator("//input[@id='email']").fill("");

    //locate password filed
    await page.locator("//input[@id='password']").fill("");

    //locate SIGNIN button and click
    await page.getByTestId('login-submit').click();

});

test("testcase5 - After Successfully Login to locate dashboard", async({page}) => {

    //goto link
    await page.goto("http://localhost:3000"); 

     //locate and click on login button
    await page.getByTestId("header-login-button").click();

    //locate username filed
    await page.locator("//input[@id='email']").fill("admin@cricketdb.com");

    //locate password filed
    await page.locator("//input[@id='password']").fill("admin123");

    //locate SIGNIN button and click
    await page.locator("button[type='submit']").click();    

    // Wait for navigation to the dashboard page
     await page.waitForURL('http://localhost:3000/players');

     // Locate the dashboard title element
     // Use a reliable locator strategy (CSS selector, text, etc.)
        const dashboardTitle = page.locator("//div[text()='Cricket Database Management System']"); // Example selector

    // Assert the title's visibility or text content
    await expect(dashboardTitle).toBeVisible();
    await expect(dashboardTitle).toHaveText('Cricket Database Management System');

    // You can also assert the page's overall title (the <title> tag)
    await expect(page).toHaveTitle('CricketDB');


});



test("testcase6 - Add new player in Cricket Database", async({page}) => {

    //goto link
    await page.goto("http://localhost:3000"); 

     //locate and click on login button
    await page.getByTestId("header-login-button").click();

    //locate username filed
    await page.locator("//input[@id='email']").fill("admin@cricketdb.com");

    //locate password filed
    await page.locator("//input[@id='password']").fill("admin123");

    //locate SIGNIN button and click
    await page.locator("button[type='submit']").click();    

    // Locate and click on Add Player button
    await page.getByTestId('add-player-button').click();

    // Fill in player details
    //locate player name field
    await page.locator("//label[text()='Player Name']").fill("Amit Ghushey");

    //locate player country field
    await page.getByTestId("country-select").selectOption("Bangladesh");
    
    //locate start year field
    await page.getByRole('spinbutton', { name: 'Start Year' }).click();
    await page.getByRole('spinbutton', { name: 'Start Year' }).fill('2024');

  
    // locate Select Role field
    await page.getByTestId("role-select").selectOption("Bowler");
    await page.locator("//span[text()='Male']").check();

    //Locate and write in Note field
    await page.locator("//label[text()='Notes (Optional)']").fill("Specialist in Fast bowling");

    // Locate and click on Submit button to add player
    await page.locator("//button[text()='Cancel']/following-sibling::button[text()='Add Player']").click();


});


test.only("testcase7 - Add Statistics for new player", async({page}) => {

    //goto link
    await page.goto("http://localhost:3000"); 

     //locate and click on login button
    await page.getByTestId("header-login-button").click();

    //locate username filed
    await page.locator("//input[@id='email']").fill("admin@cricketdb.com");

    //locate password filed
    await page.locator("//input[@id='password']").fill("admin123");

    //locate SIGNIN button and click
    await page.locator("button[type='submit']").click();

      
    //When we tackel customized drop down we have to click on drop down to see options 
    // Locate ALL Drop Down button and click
    await page.getByTestId("country-filter").click();
    //waiting for options
    await page.locator("//li[@data-value='Bangladesh']").click();

    //locate newly added player row and click on edit button
    await page.locator("//div[text()='Amit Ghushey']/ancestor::div[@role='row']//button[starts-with(@data-testid,'edit')]").click();
   
    



    
 


});