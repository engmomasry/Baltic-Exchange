# Baltic-Exchange

# ✅ Playwright Test Automation Framework with TestRail Integration

This framework is designed to test both **UI** and **API** functionalities using [Playwright](https://playwright.dev/) and is fully integrated with **TestRail** for automated test result reporting.

## 📁 Project Structure

├── tests/
│ ├── ui/ # UI test cases (e.g., SauceDemo)
│ └── api/ # API test cases (e.g., Restful Booker)
├── app-commons/
│ └── helpers/ # Shared helper files (e.g., createBooking)
├── utils/
│ └── TestRailReporter.ts # Custom Playwright Reporter for TestRail
├── caseMapping.json # Maps Reference codes (SD-01, RF-01, etc.) to TestRail Case IDs
├── testrail.config.json # Contains TestRail credentials and run mapping
├── playwright.config.ts # Playwright configuration
└── README.md # This file


---

## 🚀 Getting Started

> ⚠️ Prerequisite: Ensure Node.js (v18 or higher) and Git are installed.

### 1. Clone the Repository

git clone https://github.com/EngMoMasry/Baltic-Exchange.git

cd your local folder path

2. Install Dependencies

npm install

npm init playwright@latest


3. Install Playwright Browsers

npx playwright install



🧪 How to Run the Tests


✅ Run All UI Smoke Tests


These are labeled with @smoke and grouped under the TestRail Run ID 1.


npx playwright test --grep @smoke


✅ Run All API Smoke Tests


These are labeled with @smoke-api and grouped under the TestRail Run ID 2.


npx playwright test --grep @smoke-api

🛠 How TestRail Integration Works


Files Involved:

caseMapping.json

Maps your test titles (like SD-01, RF-01) to TestRail Case IDs.

testrail.config.json

Stores your TestRail URL, credentials, and a mapping for test run IDs.

TestRailReporter.ts

A custom Playwright reporter that reads test titles during execution and reports the result back to the correct TestRail run.

🧪 Test Naming Convention

Each test title must include a reference like:

SD-01 for UI test cases

RF-01 for API test cases

These references are looked up in caseMapping.json to determine the TestRail Case ID.


Please note this approach needs to be revised in order to execute API testcases as mapping would cause an error 

⚠️⚠️⚠️⚠️⚠️

You can simply run the UI Smoke test cases and they will be Integrated successfully with TestRail Run number 1 

Example:

You can find TestRail runs by simply navigating to 

⚠️⚠️⚠️⚠️
https://engmoelmasry.testrail.io/index.php?/runs/view/1&group_by=cases:section_id&group_order=asc

where block of Automated smoke UI testcases were executed using playwright and execution results was integrated automatically to TestRail Test Run Results Dashboard


🧾 TestRail Run Mapping Example

// testrail.config.json
{
  "url": "https://yourdomain.testrail.io",
  "username": "your-email@domain.com",
  "apiKey": "your-api-key",
  "runMapping": {
    "SD": "1",   // UI tests
    "RF": "2"    // API tests
  }
}


✅ TestRailReporter Logic
When a test finishes:

The reporter extracts the test's reference (e.g., SD-01).

Looks up the case ID in caseMapping.json.

Uses the runMapping in testrail.config.json to know which Test Run to update.

Sends the result (pass/fail) to TestRail via its API.

📂 Adding New Tests


Write a new test with a title like:
test('SD-10: Verify successful login @smoke @smoke-ui', ...)

Add its reference to caseMapping.json like:
"SD-10": "123" (where 123 is the TestRail Case ID)

Push changes and rerun with --grep as needed.

👥 For Testers New to Playwright


Tests live in .spec.ts files.

They use the test() function from Playwright.

Requests (API) are sent using Playwright’s request context.

Assertions are written with expect().

Example API Test:


test('RF-01: Create token with valid credentials @smoke-api', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/auth`, {
    data: {
      username: 'admin',
      password: 'password123'
    }
  });
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body).toHaveProperty('token');
});



✅ Summary of Tags

Tag	Description

@smoke	UI smoke tests only
@smoke-api	API smoke tests only
@Regression	UI regression tests (optional)
@reg-api	API regression tests (optional)

💡 Tips


Make sure all test titles follow the reference naming (SD-xx / RF-xx) for TestRail reporting.

When adding new tests, update caseMapping.json accordingly.

To debug TestRail integration, add console.log inside TestRailReporter.ts.

📞 Support


If you face any issues, reach out to the original author:Mohamed Elmasry or QA team lead.