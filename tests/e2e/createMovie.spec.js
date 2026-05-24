import { test, expect } from '@playwright/test';
import { MovieFormPage } from '../../pages/MovieFormPage.js';
import { LoginPage } from '../../pages/LoginPage.js';
import urls from '../../constants/urls.js';
import { validUser } from '../../constants/credentials.js';

test.describe('Тесты создания фильма', () => {
  test.beforeEach(async ({ page }) => {
    // Авторизуемся перед каждым тестом
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(validUser.email, validUser.password);
    
    // Ждём успешной авторизации (появления тостера с успешным сообщением)
    await expect(loginPage.Message).toBeVisible({ timeout: 10000 });
  });

  test('Создание фильма', async ({ page }) => {
    const movieForm = new MovieFormPage(page);
    const newMovie = {
      title: 'Автотестовый фильм123',
      description: 'Описание автотестового фильма',
      price: 100,
      location: 'MSK',
      imageUrl: 'https://avatars.mds.yandex.net/get-ott/1672343/2a0000017802c0cfb57b427a3d58690d4a51/orig',
      genre: 'Драма',
      published: true,
    };
    
    const successMsg = await movieForm.createMovie(newMovie);
    expect(successMsg).toContain('Фильм успешно добавлен');
  });
});  
