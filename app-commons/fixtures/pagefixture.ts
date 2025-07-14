import { test as fixture, expect } from "playwright/test";
import { LoginPage } from "../../app-commons/pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckOutPage";
import { Header } from "../pages/Header";
import Utils from "../Utils/Utils";

// Declare the type of the extended fixture
type MyFixtures = {
  Utils: Utils;
  loginPage:LoginPage;
  productPage:ProductsPage;
  cartPage:CartPage;
  checkOutPage:CheckoutPage;
  header:Header;

};

// Extend the test fixture with custom fixtures
const test = fixture.extend<MyFixtures>({
  Utils: async ({ page }, use) => {
    await use(new Utils(page)); // Provide the Utils instance
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page)); // Provide the LoginPage instance
  },
   productPage: async ({ page }, use) => {
    await use(new ProductsPage(page)); // Provide the LoginPage instance
  },
   cartPage: async ({ page }, use) => {
    await use(new CartPage(page)); // Provide the LoginPage instance
  },
   checkOutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page)); // Provide the LoginPage instance
  },
   header: async ({ page }, use) => {
    await use(new Header(page)); // Provide the LoginPage instance
  }
});
export default test;