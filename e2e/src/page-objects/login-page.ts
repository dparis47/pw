import { Locator, Page } from "@playwright/test";

export default class LoginPage {
  
  private readonly page: Page;
  private readonly loginInput: Locator;
  private readonly pwdInput: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.loginInput = this.page.locator("#email");
    this.pwdInput = this.page.locator("#passwd");
    this.loginButton = this.page.locator("#submit_login");
  }

  /**
   * 
   * @param login 
   * @param pwd 
   * @param url 
   */
  async login(login: string, pwd: string, url: string): Promise<void> {
    // await this.loginInput.fill(login);
    // await this.loginInput.fill(login);

    // await this.loginButton.click();
    // await this.page.waitForURL(url, {waitUntil: 'domcontentloaded'});
  }
}
