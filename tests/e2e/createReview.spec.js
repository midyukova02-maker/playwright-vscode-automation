import { test, expect } from '@playwright/test';
import { ReviewFormPage } from '../../pages/ReviewFormPage.js';  
import { LoginPage } from '../../pages/LoginPage.js';
import urls from '../../constants/urls.js';
import { validUser } from '../../constants/credentials.js';

test.describe('Тесты создания и удаления отзыва', () => {
  test.beforeEach(async ({ page }) => {
    // Авторизуемся перед тестом
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(validUser.email, validUser.password);
    await expect(loginPage.Message).toBeVisible({ timeout: 10000 });
  });

  test('Создание и удаление отзыва к фильму', async ({ page }) => {
    const reviewForm = new ReviewFormPage(page);
    // Используем .first() для выбора первого элемента
    reviewForm.reviewPanelLink = page.locator('a:has-text("Автотестовый фильм")').first();
    const reviewData = "1111111111";
    await reviewForm.CreateDeleteReviewForm(reviewData);
    
    // Добавьте проверку, если нужно
    // await expect(page.locator('Отзыв успешно удален')).toBeVisible();
  });
});