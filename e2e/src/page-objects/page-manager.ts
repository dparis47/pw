import { Page } from "@playwright/test";
import HomePage from "./home-page";
import LoginPage from "./login-page";
import { WebTableExamplePage } from "./web-table-example-page";


export class PageManager {

    private readonly page: Page;
    private readonly loginPage: LoginPage;
    private readonly homePage: HomePage;
    private readonly webTablePage: WebTableExamplePage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage =  new LoginPage(page);
        this.homePage = new HomePage(page);
        this.webTablePage = new WebTableExamplePage(page);
    }

    onLoginPage(): LoginPage {
        return this.loginPage;
    }

    fromHomePage(): HomePage {
        return this.homePage;
    }

    fromWebTableExamplePage(): WebTableExamplePage {
        return this.webTablePage;
    }
}

