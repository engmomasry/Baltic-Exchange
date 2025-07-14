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
exports.CheckoutPage = void 0;
class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstNameInput = '[data-test="firstName"]';
        this.lastNameInput = '[data-test="lastName"]';
        this.zipCodeInput = '[data-test="postalCode"]';
        this.continueButton = '[data-test="continue"]';
        this.finishButton = '[data-test="finish"]';
        this.errorMessage = '[data-test="error"]';
    }
    fillUserInfo(firstName, lastName, zipCode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.fill(this.firstNameInput, firstName);
            yield this.page.fill(this.lastNameInput, lastName);
            yield this.page.fill(this.zipCodeInput, zipCode);
            yield this.page.click(this.continueButton);
        });
    }
    completeCheckout() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.finishButton);
        });
    }
    getErrorText() {
        return __awaiter(this, void 0, void 0, function* () {
            const errorBox = this.page.locator(this.errorMessage);
            return yield errorBox.textContent();
        });
    }
}
exports.CheckoutPage = CheckoutPage;
