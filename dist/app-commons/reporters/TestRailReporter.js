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
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const caseMap = JSON.parse(fs_1.default.readFileSync(path_1.default.resolve(__dirname, 'caseMapping.json'), 'utf-8'));
const config = JSON.parse(fs_1.default.readFileSync(path_1.default.resolve(__dirname, 'testrail.config.json'), 'utf-8'));
class TestRailReporter {
    onTestEnd(test, result) {
        return __awaiter(this, void 0, void 0, function* () {
            const title = test.title;
            const match = title.match(/(SD-\d+)/);
            if (match) {
                const reference = match[1];
                const caseId = caseMap[reference];
                if (caseId) {
                    yield this.reportResultToTestRail(caseId, result.status);
                }
            }
        });
    }
    reportResultToTestRail(caseId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const testRailUrl = config.url;
            const username = config.username;
            const apiKey = config.apiKey;
            const runId = config.runId;
            const statusId = status === 'passed' ? 1 : 5;
            const url = `${testRailUrl}/index.php?/api/v2/add_result_for_case/${runId}/${caseId}`;
            const payload = {
                status_id: statusId,
                comment: `Automated test ${status === 'passed' ? 'passed' : 'failed'} via Playwright.`
            };
            yield axios_1.default.post(url, payload, {
                auth: {
                    username,
                    password: apiKey
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        });
    }
    onEnd(result) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('✅ TestRail results uploaded.');
        });
    }
}
exports.default = TestRailReporter;
