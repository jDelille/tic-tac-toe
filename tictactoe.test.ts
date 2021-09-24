const { Builder, Capabilities, By } = require ("selenium-webdriver")

require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    await driver.sleep(200);
});

test('Verify the top left corner works', async () => {
    await driver.sleep(2000)
    let topLeft = await driver.findElement(By.id('cell-0'))
    await topLeft.click()
});

test('Verify the top right corner works', async () => {
    await driver.sleep(2000)
    let topRight = await driver.findElement(By.id('cell-2'))
    await topRight.click();
});

test('Verify the middle works', async () => {
    await driver.sleep(2000)
    let middle = await driver.findElement(By.id('cell-4'))
    await middle.click();
})

test('Verify the bottom left corner works', async () => {
    await driver.sleep(2000)
    let bottomLeft = await driver.findElement(By.id('cell-6'))
    await bottomLeft.click();
    await driver.sleep(2000)
})

test('Verify that X is the winner', async () => {
    await driver.sleep(2000)
    let winnerText = await driver.findElement(By.xpath('/html/body/h1')).getText()
    expect(winnerText).toEqual('X won!');
    await driver.sleep(2000);
})