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
const test_1 = require("playwright/test");
class Utils {
    constructor(page) {
        this.page = page;
        this.page = page;
    }
    navigateTo(url) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.goto(url);
        });
    }
    maximizeWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.setViewportSize({ width: 1920, height: 1080 });
        });
    }
    wait(waitTimeInMiliSeconds) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.waitForTimeout(waitTimeInMiliSeconds);
        });
    }
    waitForPageLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.waitForLoadState('domcontentloaded');
        });
    }
    clickOn(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.click(selector);
        });
    }
    doubleClickOn(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.dblclick(selector);
        });
    }
    enterText(selector, text) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.fill(selector, text);
        });
    }
    selectValueFromDropdownList(selector, text) {
        return __awaiter(this, void 0, void 0, function* () {
            const dropdown = this.page.locator(selector);
            return yield dropdown.selectOption({ value: text });
        });
    }
    scrollDown(page_1) {
        return __awaiter(this, arguments, void 0, function* (page, scrollHeight = 1000) {
            yield page.evaluate((scrollHeight) => __awaiter(this, void 0, void 0, function* () {
                let currentScroll = 0;
                const maxHeight = document.documentElement.scrollHeight;
                // Scroll down until the bottom of the page or for a specific distance
                while (currentScroll < maxHeight) {
                    window.scrollBy(0, scrollHeight); // Scroll down by the given amount
                    currentScroll += scrollHeight;
                    yield new Promise(resolve => setTimeout(resolve, 300)); // Wait for 300ms to simulate scrolling delay
                }
            }), scrollHeight);
        });
    }
    setElementTextAsBufferedValue(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = this.page.locator(selector);
            const textContent = yield element.textContent();
            setBuffer('buffered text value', textContent);
        });
    }
    ;
    verifyValueExistsInTable(tableselector, value) {
        return __awaiter(this, void 0, void 0, function* () {
            //Construct the selector for specefic cell containing the value
            yield this.page.waitForSelector(tableselector);
            const cellSelector = `${tableselector} td`;
            //find all cells in the table
            const cells = yield this.page.$$(cellSelector);
            //check if any of the cells contain the specified value
            let isValueFound = false;
            for (const cell of cells) {
                const cellText = yield cell.textContent();
                if (cellText && cellText.includes(value)) {
                    isValueFound = true;
                    break;
                }
            }
            //If value is not found inside the table , throw an error
            if (!isValueFound) {
                throw new Error(`Value "${value}" not found in the table: ${tableselector}`);
            }
        });
    }
    //assertions
    isElementVisible(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = this.page.locator(selector);
            yield this.page.waitForSelector(selector);
            yield element.scrollIntoViewIfNeeded();
            try {
                const isVisible = yield element.isVisible();
                (0, test_1.expect)(isVisible).toBeTruthy();
            }
            catch (error) {
                throw new Error(`${error}`);
            }
        });
    }
    verifyElementToContainText(selector, text) {
        return __awaiter(this, void 0, void 0, function* () {
            const locatorText = this.page.locator(selector);
            return yield (0, test_1.expect)(locatorText).toContainText(text);
        });
    }
}
exports.default = Utils;
function setBuffer(arg0, textContent) {
    throw new Error('Function not implemented.');
}
