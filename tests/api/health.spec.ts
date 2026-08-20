import { test, expect } from '@playwright/test';

test.describe('FOMS Health API', () => {

  test('should return a healthy application status', async ({ request }) => {

    const response = await request.get('http://localhost:3000/api/health');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.status).toBe('OK');
    expect(body.application).toBe('Finance & Order Management System');
    expect(body.version).toBe('1.0.0');
  });

});