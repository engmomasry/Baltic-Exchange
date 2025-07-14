import test from '../../app-commons/fixtures/pagefixture';
import { expect } from '@playwright/test';
import testData from '../../test-data/testData.json';

test.describe('Checkout Flow - Valid', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login(testData.validUser.username, testData.validUser.password);
  });

  test('SD-14: Checkout with Valid Details @smoke', async ({ productPage, cartPage, checkOutPage, page }) => {
    await productPage.addFirstProductToCart();
    await cartPage.navigateToCart();
    await cartPage.proceedToCheckout();
    await checkOutPage.fillUserInfo('John', 'Doe', '12345');
    await checkOutPage.completeCheckout();

    const confirmationText = await page.locator('.complete-header').textContent();
    expect(confirmationText).toContain('Thank you for your order!');
  });
});