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
exports.LoginPage = void 0;
class LoginPage {
    constructor(page) {
        this.page = page;
        //Main Website Address
        this.mainURL = process.env.BASE_URL;
        //Locators
        this.usernameInput = '[placeholder="Username"]';
        this.passwordInput = '[placeholder="Password"]';
        this.loginButton = '[id="login-button"]';
        this.errorMessage = '[data-test="error"]';
    }
    navigate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.goto('https://www.saucedemo.com');
        });
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.fill(this.usernameInput, username);
            yield this.page.fill(this.passwordInput, password);
            yield this.page.click(this.loginButton);
        });
    }
    getErrorText() {
        return __awaiter(this, void 0, void 0, function* () {
            const errorBox = this.page.locator(this.errorMessage);
            const errorMessage = yield errorBox.textContent();
            return errorMessage;
        });
    }
}
exports.LoginPage = LoginPage;
