const fs = require('fs');
const path = require('path');

module.exports = {
    async takeScreenshot(driver, fileName) {
        const screenshotsDir = path.join(process.cwd(), 'screenshots');
        if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir);
        const screenshotPath = path.join(screenshotsDir, fileName);
        await driver.saveScreenshot(screenshotPath);
        console.log(`Screenshot saved: ${screenshotPath}`);
    },

    getRandomIndex(length) {
        return Math.floor(Math.random() * length);
    },

    calculateCartTotal(prices) {
        return prices.reduce((sum, p) => sum + p, 0);
    }
};