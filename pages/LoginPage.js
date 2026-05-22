import { baseUrl } from '../constants/urls.js';

class LoginPage {
  constructor(page) {
    this.page = page;
    this.toaster = page.locator('[id="_rht_toaster"]');
    this.Message = this.toaster;
    this.errorMessage = this.toaster;
  }

  async goto() {
    console.log('🔍 Открываем главную страницу:', baseUrl);
    await this.page.goto(baseUrl);
    console.log('✅ Страница загружена, заголовок:', await this.page.title());
  }

  async login(username, password) {
    console.log('🔍 Шаг 1: Ищем кнопку "Войти"');
    await this.page.locator('a[href="/login"]').waitFor({ state: 'visible', timeout: 10000 });
    console.log('✅ Кнопка "Войти" найдена');
    
    console.log('🔍 Шаг 2: Кликаем по кнопке "Войти"');
    await this.page.locator('a[href="/login"]').click();
    
    console.log('🔍 Шаг 3: Ждём перехода на страницу /login');
    await this.page.waitForURL('**/login', { timeout: 10000 });
    console.log('✅ Текущий URL:', this.page.url());
    
    console.log('🔍 Шаг 4: Ищем поле для ввода email');
    await this.page.locator('input[type="email"]').waitFor({ state: 'visible', timeout: 10000 });
    console.log('✅ Поле email найдено');
    
    console.log('🔍 Шаг 5: Вводим email:', username);
    await this.page.locator('input[type="email"]').fill(username);
    
    console.log('🔍 Шаг 6: Вводим пароль');
    await this.page.locator('input[type="password"]').fill(password);
    
    console.log('🔍 Шаг 7: Кликаем по кнопке "Войти"');
    await this.page.locator('button[type="submit"]').click();
    console.log('✅ Форма отправлена');
  }
}

export { LoginPage };