import test from '../../app-commons/fixtures/pagefixture';// here i am using test as a fixture instead of inheriting from Pages directly 
import {expect} from "@playwright/test";
import testData from "../../test-data/testData.json";



test.describe('Login Tests', () => {
 

  test.beforeEach(async ({ page,loginPage }) => {
    
    await loginPage.navigate();
  });

  test('SD-01: Valid login @smoke', async ({loginPage}) => {
    await loginPage.login(testData.validUser.username, testData.validUser.password);
   
  });

  test('SD-02: Invalid login @Regression', async ({loginPage}) => {
    await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);
    const error = await loginPage.getErrorText();
    expect(error).toContain('Username and password do not match');
  });

  test('SD-03: Locked out user login @Regression', async ({loginPage}) => {
    await loginPage.login(testData.lockedUser.username, testData.lockedUser.password);
  });
});