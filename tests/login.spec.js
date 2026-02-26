const LoginPage = require('../pages/LoginPage');

describe('Login Tests', () => {
    let loginPage;

    before(() => {
        loginPage = new LoginPage(browser);
    });

    it('should login successfully', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        // Add assertion for home screen element
        const homeItem = await $('~test-Item');
        expect(await homeItem.isDisplayed()).toBe(true);
    });

    it('should show error for locked out user', async () => {
        await loginPage.login('locked_out_user', 'secret_sauce');
        expect(await loginPage.errorMessage.isDisplayed()).toBe(true);
    });
});