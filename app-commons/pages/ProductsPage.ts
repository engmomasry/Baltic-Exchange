import { Page } from '@playwright/test';

export class ProductsPage {
  page: Page;
  addToCartButtons: any;
  cartBadge: any;
  sortDropdown: any;
  inventoryItems: any;

  constructor(page: any) {
    this.page = page;

    this.addToCartButtons = '.inventory_item button';
    this.cartBadge = '.shopping_cart_link';
    this.sortDropdown = '[data-test="product_sort_container"]';
    this.inventoryItems = '.inventory_item';
  }

  async addFirstProductToCart() {
    await this.page.locator(this.addToCartButtons).first().click();
  }

  async addProductToCartByIndex(index: number) {
    await this.page.locator(this.addToCartButtons).nth(index).click();
  }

  async removeFirstProductFromCart() {
    await this.page.locator(this.addToCartButtons).first().click();
  }

  async getCartBadgeCount(): Promise<number> {
    const badgeText = await this.page.locator(this.cartBadge).textContent();
    return badgeText ? parseInt(badgeText) : 0;
  }

  async selectSortOption(optionText: string) {
    await this.page.locator(this.sortDropdown).selectOption({ label: optionText });
  }

  async getInventoryItemCount(): Promise<number> {
    return await this.page.locator(this.inventoryItems).count();
  }

  async getInventoryItemNames(): Promise<string[]> {
    return await this.page.locator('.inventory_item_name').allTextContents();
  }
}