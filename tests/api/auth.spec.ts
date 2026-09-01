import { test, expect } from '@playwright/test';

test.describe('FOMS Authentication API', () => {

  test('should login successfully with valid credentials', async ({ request }) => {
    const response = await request.post('http://localhost:5134/api/auth/login', {
      data: {
        username: 'admin',
        password: 'Password123'
      }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.success).toBe(true);
    expect(body.user.id).toBe(1);
    expect(body.user.username).toBe('admin');
    expect(body.user.role).toBe('Administrator');
  });


  test('should reject login with incorrect password', async ({ request }) => {
    const response = await request.post('http://localhost:5134/api/auth/login', {
      data: {
        username: 'admin',
        password: 'WrongPassword'
      }
    });

    expect(response.status()).toBe(401);

    const body = await response.json();

    expect(body.success).toBe(false);
    expect(body.message).toBe('Invalid credentials');
  });


  test('should reject login for unknown user', async ({ request }) => {
    const response = await request.post('http://localhost:5134/api/auth/login', {
      data: {
        username: 'unknown',
        password: 'Password123'
      }
    });

    expect(response.status()).toBe(401);

    const body = await response.json();

    expect(body.success).toBe(false);
    expect(body.message).toBe('Invalid credentials');
  });


  test('should reject login when password is missing', async ({ request }) => {
    const response = await request.post('http://localhost:5134/api/auth/login', {
      data: {
        username: 'admin'
      }
    });

    expect(response.status()).toBe(400);

    const body = await response.json();

    expect(body.success).toBe(false);
    expect(body.message).toBe('Username and password required');
  });


  test('should reject login when username is missing', async ({ request }) => {
    const response = await request.post('http://localhost:5134/api/auth/login', {
      data: {
        password: 'Password123'
      }
    });

    expect(response.status()).toBe(400);

    const body = await response.json();

    expect(body.success).toBe(false);
    expect(body.message).toBe('Username and password required');
  });

});