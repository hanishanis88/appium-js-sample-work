const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const helpers = require('../utils/helpers');

describe('Inventory Tests', () => {
    let loginPage, inventoryPage;

    before(async () => {
        loginPage = new LoginPage(browser);
        inventoryPage = new InventoryPage(browser);

        // Login first
        await loginPage.login('standard_user', 'secret_sauce');
    });

    it('should add random item and validate total', async () => {
        await inventoryPage.addRandomItemToCart();
        await inventoryPage.clickCart();

        const itemAdded = await inventoryPage.verifyItemAdded();
        expect(itemAdded).toBe(true);

        const prices = await inventoryPage.getPrices();
        const total = helpers.calculateCartTotal(prices);
        expect(total).toBeGreaterThan(0);

        await helpers.takeScreenshot(browser, 'cart_screenshot.png');
    });
});