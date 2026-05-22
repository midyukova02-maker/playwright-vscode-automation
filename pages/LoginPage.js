mport selectors from '../constants/selectors.js';
import { baseUrl } from '../constants/urls.js';  // ✅ именованный импорт

class LoginPage {
  constructor(page) {
    this.page = page;
    this.openLoginButton = page.locator(selectors.openLoginButton);
    this.usernameInput = page.locator(selectors.usernameInput);
    this.passwordInput = page.locator(selectors.passwordInput);
    this.loginButton = page.locator(selectors.loginButton);
    this.toaster = page.locator(selectors.toaster);
    
    // Для совместимости с вашими тестами (loginPage.Message и loginPage.errorMessage)
    this.Message = this.toaster;
    this.errorMessage = this.toaster;
  }

  async goto() {
    await this.page.goto(baseUrl);  // 
    //await this.page.waitForLoadState('networkidle');
  }

  async login(username, password) {
    await this.openLoginButton.click();
    await this.usernameInput.waitFor({ state: 'visible'});
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

export { LoginPage };