
const { Builder, By } = require('selenium-webdriver');

async function example() {

    // Launch Chrome browser
    let driver = await new Builder()
        .forBrowser('chrome')
        .build();

    // Open Google website
    await driver.get('https://www.google.com');

    // Print page title
    let title = await driver.getTitle();

    console.log("Hello World!");
    console.log("Page Title:", title);

    // Close browser
    await driver.quit();
}

example();
