export class dashBoardPage {


    constructor(page) {
        this.page=page;
        this.products = page.locator(".card-body");
        this.productText=page.locator(".card-body b");
        this.cartNavigationBtn=page.locator("[routerlink*='cart']");
        this.orderNavigationBtn=page.locator("button[routerlink*='/myorders']");
    }

    async searchProductAndAddToCart(productName) {

        await this.productText.first().waitFor();

        let allTitles = await this.productText.allTextContents();
        console.log(allTitles);
        await this.page.waitForTimeout(5000);

        let count = await this.products.count();

        for (let i = 0; i < count; i++) {
            if (await this.products.nth(i).locator("b").textContent() === productName) {
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
    }

    async navigateToCartPage(){
        await this.cartNavigationBtn.click();
    }


    async navigateToOrdersPage() {
        await this.orderNavigationBtn.click();
    }

}