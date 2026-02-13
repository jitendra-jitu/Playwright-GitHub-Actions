import { expect } from '@playwright/test';

export class ordersHistoryPage {

    constructor(page) {
        this.page = page;
        this.tableBody = page.locator("tbody");
        this.rows = page.locator("tbody tr");
        this.orderIdDetails = page.locator(".col-text");
    }

    async selectOrder(orderId) {
        await this.tableBody.waitFor();
        const rowCount = await this.rows.count();

        for (let i = 0; i < rowCount; i++) {
            const rowOrderId = await this.rows.nth(i).locator("th").textContent();
            if (orderId.includes(rowOrderId)) {
                await this.rows.nth(i).locator("button").first().click();
                break;
            }
        }
    }

    async verifyOrderId(orderId) {
        const orderIdDetails = await this.orderIdDetails.textContent();
        expect(orderId?.includes(orderIdDetails)).toBeTruthy();
    }

    
}
