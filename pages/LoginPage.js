import selectors from '../constants/selectors.js';
import { baseUrl } from '../constants/urls.js';

class LoginPage {
  constructor(page) {
    this.page = page;
    this.openLoginButton = page.locator(selectors.openLoginButton);
    this.usernameInput = page.locator(selectors.usernameInput);
    this.passwordInput = page.locator(selectors.passwordInput);
    this.loginButton = page.locator(selectors.loginButton);
    this.toaster = page.locator(selectors.toaster);
    
    this.Message = this.toaster;
    this.errorMessage = this.toaster;
  }

  async goto() {
    console.log('🔍 Открываем главную страницу:', baseUrl);
    await this.page.goto(baseUrl);
    console.log('✅ Страница загружена, заголовок:', await this.page.title());
    await this.page.screenshot({ path: '01-homepage.png' });
  }

  async login(username, password) {
    console.log('🔍 Шаг 1: Ищем кнопку "Войти"');
    await this.openLoginButton.waitFor({ state: 'visible', timeout: 10000 });
    console.log('✅ Кнопка "Войти" найдена');
    
    console.log('🔍 Шаг 2: Кликаем по кнопке "Войти"');
    await this.openLoginButton.click();
    
    console.log('🔍 Шаг 3: Ждём перехода на страницу /login');
    await this.page.waitForURL('**/login', { timeout: 10000 });
    console.log('✅ Текущий URL:', this.page.url());
    await this.page.screenshot({ path: '02-login-page.png' });
    
    console.log('🔍 Шаг 4: Ищем поле для ввода email');
    console.log('   Селектор:', selectors.usernameInput);
    await this.usernameInput.waitFor({ state: 'visible', timeout: 10000 });
    console.log('✅ Поле email найдено');
    
    console.log('🔍 Шаг 5: Вводим email:', username);
    await this.usernameInput.fill(username);
    
    console.log('🔍 Шаг 6: Вводим пароль');
    await this.passwordInput.fill(password);
    
    console.log('🔍 Шаг 7: Кликаем по кнопке "Войти"');
    await this.loginButton.click();
    console.log('✅ Форма отправлена');
    
    await this.page.screenshot({ path: '03-after-login.png' });
  }
}

export { LoginPage };