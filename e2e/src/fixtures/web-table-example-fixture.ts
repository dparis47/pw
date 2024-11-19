import {expect, test as base} from '@playwright/test';
import { PageManager } from '../page-objects/page-manager';

export type WebTableFixture = {
    navigateTo: string,
    pm: PageManager
}

export const webTableExample  = base.extend<WebTableFixture>({
    navigateTo: async({page}, use) => {
        const pm: PageManager = new PageManager(page);

        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        await pm.onLoginPage().login('admin@amlfactory.com', 'aml', 'url');

        //do something in the home page
        // pm.fromHomePage().
        const status = await page.locator('#radio-btn-example').locator('[value=radio1]').check();

        await use('');
    },

    pm: async({page, navigateTo}, use) => {
        await expect(page).toHaveTitle('Practice Page');
        
        const pageManager = new PageManager(page);
        await use(pageManager);
    }
})