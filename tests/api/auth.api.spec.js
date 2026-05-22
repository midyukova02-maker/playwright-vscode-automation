import { test, expect } from '@playwright/test';
import { authApi } from '../../constants/urls.js';
import { validUser, invalidUser } from '../../constants/credentials.js';

test.describe('API тесты авторизации', () => {
  test('POST /login - верно', async ({ request }) => {
    const response = await request.post(`${authApi}/login`, {
      data: {
        email: validUser.email,
        password: validUser.password,
      },
    });
    expect(response.status()).toBe(201);
  });

  test('POST /login - ошибка при неверном пароле', async ({ request }) => {
    const response = await request.post(`${authApi}/login`, {
      data: {
        email: invalidUser.email,
        password: invalidUser.password,
      },
    });
    expect(response.status()).toBe(401);
  });
});