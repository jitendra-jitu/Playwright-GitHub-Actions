import { test, expect } from '@playwright/test';

export class checkoutPage{

    constructor(page){
        this.page=page;  
        this.cartItemsList=page.locator("div li");
        this.checkOut=page.locator("text='Checkout'");
    }

    async checkProductName(productName){
        await this.cartItemsList.first().waitFor();
        let bool = this.page.locator(`h3:has-text('${productName}')`).isVisible();
        expect(bool).toBeTruthy();
    }

    async ClickCartCheckoutBtn(){
        await this.checkOut.click();
    }

}