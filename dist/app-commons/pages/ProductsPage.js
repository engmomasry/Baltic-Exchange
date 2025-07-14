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
exports.ProductsPage = void 0;
class ProductsPage {
    constructor(page) {
        this.page = page;
        this.addToCartButtons = '.inventory_item button';
        this.cartBadge = '.shopping_cart_link';
        this.sortDropdown = '[data-test="product_sort_container"]';
        this.inventoryItems = '.inventory_item';
    }
    addFirstProductToCart() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.locator(this.addToCartButtons).first().click();
        });
    }
    addProductToCartByIndex(index) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.locator(this.addToCartButtons).nth(index).click();
        });
    }
    removeFirstProductFromCart() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.locator(this.addToCartButtons).first().click();
        });
    }
    getCartBadgeCount() {
        return __awaiter(this, void 0, void 0, function* () {
            const badgeText = yield this.page.locator(this.cartBadge).textContent();
            return badgeText ? parseInt(badgeText) : 0;
        });
    }
    selectSortOption(optionText) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.locator(this.sortDropdown).selectOption({ label: optionText });
        });
    }
    getInventoryItemCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.locator(this.inventoryItems).count();
        });
    }
    getInventoryItemNames() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.locator('.inventory_item_name').allTextContents();
        });
    }
}
exports.ProductsPage = ProductsPage;
