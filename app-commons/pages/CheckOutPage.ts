import { Page } from '@playwright/test';

export class CheckoutPage {
  page: Page;
  firstNameInput: any;
  lastNameInput: any;
  zipCodeInput: any;
  continueButton: any;
  finishButton: any;
  errorMessage: any;

  constructor(page: any) {
    this.page = page;

    this.firstNameInput = '[data-test="firstName"]';
    this.lastNameInput = '[data-test="lastName"]';
    this.zipCodeInput = '[data-test="postalCode"]';
    this.continueButton = '[data-test="continue"]';
    this.finishButton = '[data-test="finish"]';
    this.errorMessage = '[data-test="error"]';
  }

  async fillUserInfo(firstName: string, lastName: string, zipCode: string) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.zipCodeInput, zipCode);
    await this.page.click(this.continueButton);
  }

  async completeCheckout() {
    await this.page.click(this.finishButton);
  }

  async getErrorText() {
    const errorBox = this.page.locator(this.errorMessage);
    return await errorBox.textContent();
  }
}