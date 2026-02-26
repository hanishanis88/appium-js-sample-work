class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    get usernameInput() { return $('~test-Username'); }
    get passwordInput() { return $('~test-Password'); }
    get loginButton() { return $('~test-LOGIN'); }
    get errorMessage() { return $('//android.widget.TextView[contains(@text,"locked")]'); }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = LoginPage;