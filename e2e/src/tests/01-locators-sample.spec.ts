import { test, expect } from '@playwright/test';

test.describe('e2e test', () => {
  
  test.beforeEach(async({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  });

  test('@radio Radio fields', async ({ page }) => {
    await expect(page).toHaveTitle('Practice Page');
   
    const radio1 = await page.locator('#radio-btn-example').locator('[value=radio1]');
    await radio1.check();
    const status = await radio1.isChecked();
    expect(status).toBeTruthy();
  
    await expect(page.locator('#radio-btn-example').locator('[value=radio1]')).toBeChecked();
    await expect(page.locator('#radio-btn-example').locator('[value=radio2]')).not.toBeChecked();
    await expect(page.locator('#radio-btn-example').locator('[value=radio3]')).not.toBeChecked();
  });
  
  test('@checkbox Checkbox fields', async ({ page }) => {
    await page.locator('#checkBoxOption1').check();
    await page.locator('#checkBoxOption2').check();
    await page.locator('#checkBoxOption3').uncheck();
  
    //All checkbox
    const allCheckboxes = page.locator('#checkbox-example').getByRole('checkbox');
    for(const chechbox of await allCheckboxes.all()) {
      await chechbox.check();
      await expect(chechbox).toBeChecked();
    }
  });
  
  test('@dropdown Dropdown fields', async ({ page }) => {
    const dropDownMenu = page.locator('#dropdown-class-example');
    await dropDownMenu.click();
  
    // page.getByRole('list')// when list has a UL tag
    // page.getByRole('listitem')// when list has a LI tag
    // not working here

    const dropDownOptionsList = dropDownMenu.locator('option');-
    await expect(dropDownOptionsList).toHaveText(['Select','Option1','Option2','Option3']);
  
    // const option1 = dropDownOptionsList.filter({hasText: 'Option2'});
    // await option1.hover();
    // await option1.click();
  });

})

