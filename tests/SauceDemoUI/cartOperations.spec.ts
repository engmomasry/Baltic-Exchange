import test from '../../app-commons/fixtures/pagefixture';
import { expect } from '@playwright/test';
import testData from '../../test-data/testData.json';

test.describe('Cart Operations', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login(testData.validUser.username, testData.validUser.password);
  });

  test('SD-06: Add single product to cart @Regression', async ({ productPage }) => {
    await productPage.addFirstProductToCart();
    const count = await productPage.getCartBadgeCount();
    expect(count).toBe(1);
  });

  test('SD-07: Remove product from cart @Regression', async ({ productPage }) => {
    await productPage.addFirstProductToCart();
    await productPage.removeFirstProductFromCart();
    const badge = await productPage.getCartBadgeCount();
    expect(badge).toBe(0);
  });

  test('SD-08: Verify cart badge count @Regression', async ({ productPage }) => {
    await productPage.addProductToCartByIndex(0);
    await productPage.addProductToCartByIndex(1);
    const count = await productPage.getCartBadgeCount();
    expect(count).toBe(2);
  });
});