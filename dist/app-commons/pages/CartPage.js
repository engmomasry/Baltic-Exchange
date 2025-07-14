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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartPage = void 0;
class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItems = '.cart_item';
        this.checkoutButton = '[data-test="checkout"]';
        this.cartIcon = '.shopping_cart_link';
    }
    navigateToCart() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.cartIcon);
        });
    }
    getCartItemCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.locator(this.cartItems).count();
        });
    }
    proceedToCheckout() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.checkoutButton);
        });
    }
}
exports.CartPage = CartPage;
