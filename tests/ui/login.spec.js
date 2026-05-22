import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { validUser, invalidUser } from '../../constants/credentials.js';
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from '../../constants/messages.js';

test.describe('UI тесты авторизации', () => {
  test('успешный вход', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(validUser.email, validUser.password);
    await expect(loginPage.Message).toContainText(SUCCESS_MESSAGES.loginSuccess, { timeout: 10000 });
  });

  test('ошибка при неверном пароле', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(invalidUser.email, invalidUser.password);
    await expect(loginPage.errorMessage).toContainText(ERROR_MESSAGES.invalidCredentials, { timeout: 10000 });
  });
});