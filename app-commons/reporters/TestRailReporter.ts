// utils/TestRailReporter.ts
import { FullResult, Reporter, TestCase, TestResult } from '@playwright/test/reporter';
import axios from 'axios';
import fs from 'fs';
import path from 'path';


const caseMap = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, 'caseMapping.json'), 'utf-8')
);
const config = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, 'testrail.config.json'), 'utf-8')
);
export default class TestRailReporter implements Reporter {
  async onTestEnd(test: TestCase, result: TestResult) {
    const title = test.title;
    const match = title.match(/(SD-\d+)/);

    if (match) {
      const reference = match[1];
      const caseId = caseMap[reference];

      if (caseId) {
        await this.reportResultToTestRail(caseId, result.status);
      }
    }
  }

  async reportResultToTestRail(caseId: string, status: string) {
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

    await axios.post(url, payload, {
      auth: {
        username,
        password: apiKey
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async onEnd(result: FullResult) {
    console.log('✅ TestRail results uploaded.');
  }
}