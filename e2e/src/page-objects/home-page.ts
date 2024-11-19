import { Locator, Page } from "@playwright/test";

export default class HomePage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;

    }

}