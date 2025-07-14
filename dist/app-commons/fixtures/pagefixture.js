"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("playwright/test");
const LoginPage_1 = require("../../app-commons/pages/LoginPage");
const ProductsPage_1 = require("../pages/ProductsPage");
const CartPage_1 = require("../pages/CartPage");
const CheckOutPage_1 = require("../pages/CheckOutPage");
const Header_1 = require("../pages/Header");
const Utils_1 = __importDefault(require("../Utils/Utils"));
// Extend the test fixture with custom fixtures
const test = test_1.test.extend({
    Utils: (_a, use_1) => __awaiter(void 0, [_a, use_1], void 0, function* ({ page }, use) {
        yield use(new Utils_1.default(page)); // Provide the Utils instance
    }),
    loginPage: (_a, use_1) => __awaiter(void 0, [_a, use_1], void 0, function* ({ page }, use) {
        yield use(new LoginPage_1.LoginPage(page)); // Provide the LoginPage instance
    }),
    productPage: (_a, use_1) => __awaiter(void 0, [_a, use_1], void 0, function* ({ page }, use) {
        yield use(new ProductsPage_1.ProductsPage(page)); // Provide the LoginPage instance
    }),
    cartPage: (_a, use_1) => __awaiter(void 0, [_a, use_1], void 0, function* ({ page }, use) {
        yield use(new CartPage_1.CartPage(page)); // Provide the LoginPage instance
    }),
    checkOutPage: (_a, use_1) => __awaiter(void 0, [_a, use_1], void 0, function* ({ page }, use) {
        yield use(new CheckOutPage_1.CheckoutPage(page)); // Provide the LoginPage instance
    }),
    header: (_a, use_1) => __awaiter(void 0, [_a, use_1], void 0, function* ({ page }, use) {
        yield use(new Header_1.Header(page)); // Provide the LoginPage instance
    })
});
exports.default = test;
