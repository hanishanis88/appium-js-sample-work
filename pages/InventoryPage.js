class InventoryPage {
    constructor(driver) {
        this.driver = driver;
    }

    get items() { return $$('~test-Item'); }
    get prices() { return $$('~test-Price'); }
    get cartButton() { return $('~test-Cart'); }
    get cartItems() { return $$('~test-CartItem'); }

    async addRandomItemToCart() {
        const allItems = await this.items;
        const index = Math.floor(Math.random() * allItems.length);
        const button = await allItems[index].$('~test-ADD TO CART');
        await button.click();
    }

    async clickCart() {
        await this.cartButton.click();
    }

    async verifyItemAdded() {
        return (await this.cartItems).length > 0;
    }

    async getPrices() {
        const priceElements = await this.prices;
        return Promise.all(priceElements.map(async el => parseFloat(await el.getText().replace('$', ''))));
    }
}

module.exports = InventoryPage;