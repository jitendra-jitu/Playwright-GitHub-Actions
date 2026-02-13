import { test, expect } from '@playwright/test';

export class orderDetailsPage {


    constructor(page) {
        this.page = page;
        this.dropdown = page.locator(".ta-results");
        this.optBtns = this.dropdown.locator("button");
        this.selectCountry = page.locator("[placeholder='Select Country']");
        this.applyCouponBtn = page.locator("button:has-text('Apply Coupon')");

        this.userNameInput = page.locator('.user__name input[type="text"]');
        this.cvvInput = page.locator('.field.small:has-text("CVV Code") input');
        this.nameOnCardInput = page.locator('.field:has-text("Name on Card ") input');
        this.couponInput = page.locator('[name="coupon"]');
        this.placeOrderBtn = page.locator(".action__submit");


        this.acknowledgement=page.locator(".hero-primary");
        this.orderId=page.locator(".em-spacer-1 .ng-star-inserted");
    }

    async searchCountryAndSelect(keyword, wordToMatch) {

        await this.selectCountry.type(keyword, { delay: 100 });
        await this.dropdown.waitFor();
        let optCount = await this.optBtns.count();

        for (let i = 0; i < optCount; i++) {
            let currBtn = (await this.optBtns.nth(i).textContent());
            // @ts-ignore
            if (currBtn === wordToMatch) {
                await this.optBtns.nth(i).click();
                break;
            }
        }
    }


    async fillingOtherOrderDetails(userName, csv_code, NameOnCard, couponCode) {
        await expect(this.userNameInput).toHaveValue(userName);
        await this.cvvInput.fill(csv_code);
        await this.nameOnCardInput.fill(NameOnCard);
        await this.couponInput.fill(couponCode);
        await this.applyCouponBtn.click();
    }


    async placingOrder() {
        await this.placeOrderBtn.click();
    }


    async extractingOrderId() {
        await expect(this.acknowledgement).toHaveText(" Thankyou for the order. ");
        let orderId = await this.orderId.textContent();
        return orderId;
        console.log(orderId);
    }

}