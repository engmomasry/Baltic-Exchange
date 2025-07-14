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
const pagefixture_1 = __importDefault(require("../../app-commons/fixtures/pagefixture"));
const test_1 = require("@playwright/test");
const testData_json_1 = __importDefault(require("../../test-data/testData.json"));
pagefixture_1.default.describe('Cart Operations', () => {
    pagefixture_1.default.beforeEach((_a) => __awaiter(void 0, [_a], void 0, function* ({ loginPage }) {
        yield loginPage.navigate();
        yield loginPage.login(testData_json_1.default.validUser.username, testData_json_1.default.validUser.password);
    }));
    (0, pagefixture_1.default)('SD-03: Add single product to cart @Regression', (_a) => __awaiter(void 0, [_a], void 0, function* ({ productPage }) {
        yield productPage.addFirstProductToCart();
        const count = yield productPage.getCartBadgeCount();
        (0, test_1.expect)(count).toBe(1);
    }));
    (0, pagefixture_1.default)('SD-04: Remove product from cart @Regression', (_a) => __awaiter(void 0, [_a], void 0, function* ({ productPage }) {
        yield productPage.addFirstProductToCart();
        yield productPage.removeFirstProductFromCart();
        const badge = yield productPage.getCartBadgeCount();
        (0, test_1.expect)(badge).toBe(0);
    }));
    (0, pagefixture_1.default)('SD-05: Verify cart badge count', (_a) => __awaiter(void 0, [_a], void 0, function* ({ productPage }) {
        yield productPage.addProductToCartByIndex(0);
        yield productPage.addProductToCartByIndex(1);
        const count = yield productPage.getCartBadgeCount();
        (0, test_1.expect)(count).toBe(2);
    }));
});
