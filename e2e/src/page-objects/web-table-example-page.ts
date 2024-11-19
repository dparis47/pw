import { Page } from "@playwright/test";

export class WebTableExamplePage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Function corresponding to a page feature
     * 
     * @param price 
     */
    async webTableFeature(price: string): Promise<number> {
        const fieldset = this.page.locator('fieldset', {hasText: 'Web Table Example'});
        const rows = await fieldset.locator('tr').filter({hasText: '35'}).all();

        return rows.length
    }

}