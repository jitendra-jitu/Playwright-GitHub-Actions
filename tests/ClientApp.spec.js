// @ts-check
import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { dashBoardPage } from '../pages/dashBoardPage';
import { POManager } from "../pages/POManager";
import { ordersHistoryPage } from '../pages/ordersHistoryPage';
import dataSet from "../data/testData.json"
import { customTestBase } from '../utils/testBase';

let wholeTestData = JSON.parse(JSON.stringify(dataSet))


for (let testData of wholeTestData) {

    test(`test for ${testData.productName}`, async ({ page }) => {

        let productName = testData.productName;
        let email = testData.email;
        let password = testData.password;

        const POManagerObj = new POManager(page);

        let loginPageObj = POManagerObj.getLoginPage();
        await loginPageObj.goto();
        await loginPageObj.validLoginDetails(email, password);

        let dashboardPageObj = POManagerObj.getDashBoardPage();
        await dashboardPageObj.searchProductAndAddToCart(productName);
        await dashboardPageObj.navigateToCartPage();

        let checkoutPage = POManagerObj.getcheckoutPage();
        await checkoutPage.checkProductName(productName);
        await checkoutPage.ClickCartCheckoutBtn();


        let keyword = "ind";
        let wordToMatch = " India";

        let csv_code = "csv";
        let NameOnCard = "Gudela Jitendra";
        let couponCode = "rahulshettyacademy";

        let orderDetailsPage = POManagerObj.getOrderDetailsPage();
        await orderDetailsPage.searchCountryAndSelect(keyword, wordToMatch);
        await orderDetailsPage.fillingOtherOrderDetails(email, csv_code, NameOnCard, couponCode);
        await orderDetailsPage.placingOrder();
        let orderId = await orderDetailsPage.extractingOrderId();

        await dashboardPageObj.navigateToOrdersPage();

        let ordersHistoryPageObj = POManagerObj.getOrdersHistoryPage();
        await ordersHistoryPageObj.selectOrder(orderId);
        await ordersHistoryPageObj.verifyOrderId(orderId);

    });

}



// @ts-ignore
customTestBase.only("test for ClientApp", async ({ page, testDataForOrder }) => {

    let productName = testDataForOrder.productName;
    let email = testDataForOrder.email;
    let password = testDataForOrder.password;

    const POManagerObj = new POManager(page);

    let loginPageObj = POManagerObj.getLoginPage();
    await loginPageObj.goto();
    await loginPageObj.validLoginDetails(email, password);

    let dashboardPageObj = POManagerObj.getDashBoardPage();
    await dashboardPageObj.searchProductAndAddToCart(productName);
    await dashboardPageObj.navigateToCartPage();

    let checkoutPage = POManagerObj.getcheckoutPage();
    await checkoutPage.checkProductName(productName);
    await checkoutPage.ClickCartCheckoutBtn();


    let keyword = "ind";
    let wordToMatch = " India";

    let csv_code = "csv";
    let NameOnCard = "Gudela Jitendra";
    let couponCode = "rahulshettyacademy";

    let orderDetailsPage = POManagerObj.getOrderDetailsPage();
    await orderDetailsPage.searchCountryAndSelect(keyword, wordToMatch);
    await orderDetailsPage.fillingOtherOrderDetails(email, csv_code, NameOnCard, couponCode);
    await orderDetailsPage.placingOrder();
    let orderId = await orderDetailsPage.extractingOrderId();

    await dashboardPageObj.navigateToOrdersPage();

    let ordersHistoryPageObj = POManagerObj.getOrdersHistoryPage();
    await ordersHistoryPageObj.selectOrder(orderId);
    await ordersHistoryPageObj.verifyOrderId(orderId);

});



