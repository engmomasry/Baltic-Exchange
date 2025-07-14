import { expect, Page } from '@playwright/test';
import Utils from '../Utils/Utils';




export class LoginPage {
page:Page 
usernameInput:any
passwordInput:any
loginButton:any
errorMessage:any
mainURL:any

  constructor(page: any) {
  this.page = page;


  //Main Website Address

  this.mainURL=process.env.BASE_URL as string;

  //Locators

  this.usernameInput = '[placeholder="Username"]';
  this.passwordInput = '[placeholder="Password"]';
  this.loginButton = '[id="login-button"]';
  this.errorMessage = '[data-test="error"]';
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
 

  }

  async getErrorText() {
    const errorBox=this.page.locator(this.errorMessage);
    const errorMessage=await errorBox.textContent();
    return errorMessage;
  }
}
