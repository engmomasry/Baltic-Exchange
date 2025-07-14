import test from '../../app-commons/fixtures/pagefixture';
import { expect } from '@playwright/test';
import testData from '../../test-data/testData.json';

test.describe('Checkout Flow - Missing Fields', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login(testData.validUser.username, testData.validUser.password);
  });

  test('SD-15: Checkout with Missing Required Fields @Regression', async ({ productPage, cartPage, checkOutPage }) => {
    await productPage.addFirstProductToCart();
    await cartPage.navigateToCart();
    await cartPage.proceedToCheckout();
    await checkOutPage.fillUserInfo('John', '', '');
    
    const errorText = await checkOutPage.getErrorText();
    expect(errorText).toContain('Error:');
  });
});