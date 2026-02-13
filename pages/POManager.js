import { checkoutPage } from "./checkoutPage";
import { dashBoardPage } from "./dashBoardPage";
import { loginPage } from "./loginPage";
import { orderDetailsPage } from "./orderDetailsPage";
import { ordersHistoryPage } from "./ordersHistoryPage";


export class POManager{
    constructor(page){
        
        this.page=page;
        this.loginPage=new loginPage(this.page);
        this.dashBoardPage=new dashBoardPage(this.page);
        this.checkoutPage=new checkoutPage(this.page);
        this.orderDetailsPage=new orderDetailsPage(this.page);
        this.ordersHistoryPage=new ordersHistoryPage(this.page);

    }

    getLoginPage(){
        return this.loginPage;
    }

    getDashBoardPage(){
        return this.dashBoardPage;
    }

    getcheckoutPage(){
        return this.checkoutPage;
    }

    getOrderDetailsPage(){
        return this.orderDetailsPage;
    }

    getOrdersHistoryPage(){
        return this.ordersHistoryPage;
    }
    
}
