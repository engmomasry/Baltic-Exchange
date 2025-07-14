// playwright/tests/api/health.spec.ts
import { test, expect } from '@playwright/test';

const BASE_URL = 'https://restful-booker.herokuapp.com';

test.describe('Health API Smoke Tests', () => {

  test('RF-14: API HealthCheck returns 201 @reg-api', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/ping`);
    expect(response.status()).toBe(201);
  });

});