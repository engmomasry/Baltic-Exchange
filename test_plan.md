TEST PLAN

Project: QA Take-Home Assignment — SauceDemo + Restful Booker

Author: Mohamed Elmasry

Date: July 2025

Test Tools: Playwright, TestRail

Test Management: TestRail

Automation Coverage: API & UI (Smoke)

Link to TestRail Project: SauceDemo + Restful Booker TestRail Project

1. Test Items
Type	Application	Scope
Web UI	Sauce Demo	End-to-end shopping cart flows
REST API	Restful Booker API	Auth, Booking CRUD, Health

2. Features to be Tested
🔷 Sauce Demo (UI)
RF-01: Valid login with standard_user

RF-02: Locked out user login failure

RF-03: Add items to cart

RF-04: Remove items from cart

RF-05: Proceed to checkout and verify cart

🔷 Restful Booker API
RF-01: Create auth token with valid credentials

RF-03: Get all booking IDs

RF-04: Get booking details by ID

RF-06: Create booking with valid payload

RF-14: Health check (Ping)

🔎 3. Features Not to Be Tested
Full regression across all SauceDemo user types (e.g., problem_user, visual_user)

Advanced validations like sorting in SauceDemo

Security testing or rate-limiting for the API

API edge cases not described in documentation (e.g., malformed tokens)

👤 4. Test Approach
We follow a risk-based, layered testing strategy:

Manual Testing: All test cases were documented and prioritized in TestRail (smoke + regression)

Automated Testing: Smoke test coverage for both UI and API using Playwright

Each test has clear Preconditions, Steps, and Expected Results

Automated test results integrated and reported to TestRail using a custom Playwright reporter

Assertions ensure both status codes and key payload data are validated

5. Test Pass Criteria
Metric	Threshold
Smoke Test Pass Rate	100%
Regression Test Pass Rate	≥ 95%
Defects Found	0 Critical, ≤ 2 Major
API Latency	< 1s average on GET/POST

6. Suspension/Exit Criteria
Suspension: Major blocker found that prevents login, API token creation, or cart access

Exit: All test cases executed, all critical defects resolved or documented with workaround

7. Test Deliverables
Type	Description
README.md	Framework instructions, tooling, setup
TEST_PLAN.md	This test plan
*.spec.ts	All automated test specs
TestRailReporter.ts	Upload automation results to TestRail
caseMapping.json	Mapping of test IDs to TestRail
test-report.html	Playwright HTML report
TestRail Link	Test Cases

8. Test Execution Summary
Execution Type	Tool	Tag	Result
UI Automation	Playwright	@smoke	✅ All passed
API Automation	Playwright	@smoke-api	✅ All passed except for some Tcs where testrail.config.jason need to be revised on in order to integrate them successfully after mapping runIDs but the first tc has succeseded  
Manual Review	TestRail	UI / API sections	Documented

9. Defects / Issues Found
RF-02 (Locked out user) - Login fails as expected (test failed to validate error message properly) → Captured in TestRail defect report

10. How to Run Tests
Clone the repo and follow the instructions in README.md. TL;DR:


npm install
npx playwright install

# Run UI smoke tests
npx playwright test --grep @smoke

# Run API smoke tests
npx playwright test --grep @smoke-api

11. Assumptions
TestRail credentials and access is preconfigured

Internet access is available for testing endpoints

API is stateless and has no rate limits

Data cleanup isn’t required due to public API sandboxing

---

## 🔸 2. Sauce Demo (UI)

### Scope:

- Standard user login
- Product listing visibility
- Cart and logout behavior
- Error messages on invalid login

### Tools:

- Playwright with Page Object Model (POM)
- Custom TestRail reporter
- Tagged smoke tests (`@smoke`)

### Coverage:

- Valid and invalid login
- Add to cart
- Logout

---

## 🔸 3. Restful Booker (API)

### Scope:

- Authentication
- Booking creation, retrieval
- Health check endpoint

### Tools:

- Playwright API testing
- TestRail
- Tagged smoke tests (`@smoke-api`)

### Coverage:

- Auth token creation (valid/invalid)
- Booking CRUD operations
- Health ping endpoint

---

## 🔸 4. Test Execution

### Manual:

- Test cases are documented in TestRail:
  - [UI Cases](https://engmoelmasry.testrail.io/index.php?/suites/view/1)
  - [API Cases](https://engmoelmasry.testrail.io/index.php?/suites/view/1)

### Automated:

- UI Run ID: `1`
- API Run ID: `2`
- Reporter auto-detects test type by reference prefix (`SD-` or `RF-`).

---

## 🔸 5. Known Issue (Defect)

- `RF-04` (GetBooking for valid ID) failed intermittently due to delayed response from API.
- Logged in regression run in TestRail.

---

## 🔸 6. Next Steps

With more time:

- Add regression and edge case scenarios.
- CI integration via GitHub Actions.
- Add reporting dashboards.

---

## 📝 Assumptions

- API tokens and user credentials are stable.
- API data is not reset between test runs unless done via helper.

---

## 🔗 TestRail Access

- Project: https://engmoelmasry.testrail.io/index.php?/projects/overview/1
- Test Cases: https://engmoelmasry.testrail.io/index.php?/suites/view/1&group_by=cases:section_id