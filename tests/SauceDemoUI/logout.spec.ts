import test from '../../app-commons/fixtures/pagefixture';
import { expect } from '@playwright/test';
import testData from '../../test-data/testData.json';

test.describe('Logout Flow ', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login(testData.validUser.username, testData.validUser.password);
  });

  test('SD-17: Logout successfully @smoke', async ({ header, page }) => {
    await header.logout();
    const loginButton = page.locator('[id="login-button"]');
    await expect(loginButton).toBeVisible();
  });
});