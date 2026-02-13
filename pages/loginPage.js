export class loginPage{

    constructor(page){
        this.page=page;
        this.loginEmail = page.locator("#userEmail");
        this.loginuserPassword = page.locator("#userPassword");
        this.loginBtn = page.locator("#login");  
    }

    async goto(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async validLoginDetails(email,password){

        await this.loginEmail.fill(email);
        await this.loginuserPassword.fill(password);
        await this.loginBtn.click();
    }



}