import { Page } from '@playwright/test';

export class CartPage {
  page: Page;
  cartItems: any;
  checkoutButton: any;
  cartIcon: any;

  constructor(page: any) {
    this.page = page;

    this.cartItems = '.cart_item';
    this.checkoutButton = '[data-test="checkout"]';
    this.cartIcon = '.shopping_cart_link';
  }

  async navigateToCart() {
    await this.page.click(this.cartIcon);
  }

  async getCartItemCount(): Promise<number> {
    return await this.page.locator(this.cartItems).count();
  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }
}