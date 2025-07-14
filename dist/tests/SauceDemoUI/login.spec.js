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
const pagefixture_1 = __importDefault(require("../../app-commons/fixtures/pagefixture")); // here i am using test as a fixture instead of inheriting from Pages directly 
const test_1 = require("@playwright/test");
const testData_json_1 = __importDefault(require("../../test-data/testData.json"));
pagefixture_1.default.describe('Login Tests', () => {
    pagefixture_1.default.beforeEach((_a) => __awaiter(void 0, [_a], void 0, function* ({ page, loginPage }) {
        yield loginPage.navigate();
    }));
    (0, pagefixture_1.default)('SD-01: Valid login @smoke', (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginPage }) {
        yield loginPage.login(testData_json_1.default.validUser.username, testData_json_1.default.validUser.password);
    }));
    (0, pagefixture_1.default)('SD-02: Invalid login @Regression', (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginPage }) {
        yield loginPage.login(testData_json_1.default.invalidUser.username, testData_json_1.default.invalidUser.password);
        const error = yield loginPage.getErrorText();
        (0, test_1.expect)(error).toContain('Username and password do not match');
    }));
    (0, pagefixture_1.default)('SD-03: Locked out user login @Regression', (_a) => __awaiter(void 0, [_a], void 0, function* ({ loginPage }) {
        yield loginPage.login(testData_json_1.default.lockedUser.username, testData_json_1.default.lockedUser.password);
    }));
});
