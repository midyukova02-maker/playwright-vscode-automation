import selectors from '../constants/selectors.js';
//12121
class MovieFormPage {
  constructor(page) {
    this.page = page;

    // Навигационные элементы (для перехода к форме)
    this.createMovieButton = page.locator(selectors.movieForm.createMovieButton);
    this.adminPanelLink = page.locator(selectors.movieForm.adminPanelLink);
    this.filmPanelLink = page.locator(selectors.movieForm.filmPanelLink);
    this.createButton = page.locator(selectors.movieForm.createButton);

    // Поля формы
    this.titleInput = page.locator(selectors.movieForm.titleInput);
    this.descriptionInput = page.locator(selectors.movieForm.descriptionInput);
    this.priceInput = page.locator(selectors.movieForm.priceInput);
    this.locationInput = page.locator(selectors.movieForm.locationInput);
    this.imageUrlInput = page.locator(selectors.movieForm.imageUrlInput);
    this.genreSelect = page.locator(selectors.movieForm.genreSelect);
    this.publishedCheckbox = page.locator(selectors.movieForm.publishedCheckbox);
    this.submitButton = page.locator(selectors.movieForm.submitButton);
    this.successToast = page.locator(selectors.movieForm.successToast);
  }

  // 1. Открыть форму создания фильма (весь путь)
  async navigateToCreateForm() {
    await this.createMovieButton.click();
    await this.adminPanelLink.click();
    await this.filmPanelLink.click();
    await this.createButton.click();
    // Дожидаемся появления формы (например, заголовка или любого поля)
    await this.titleInput.waitFor({ state: 'visible', timeout: 10000 });
  }

  // 2. Заполнить поля формы (принимает объект с данными)
  async fillMovieForm(movieData) {
    if (movieData.title) await this.titleInput.fill(movieData.title);
    if (movieData.description) await this.descriptionInput.fill(movieData.description);
    if (movieData.price) await this.priceInput.fill(String(movieData.price));
    // Комбобокс "Местоположение"
    if (movieData.location) {
      await this.locationInput.click();
      // Дожидаемся появления контейнера списка (может быть role="listbox")
      const dropdown = this.page.locator('[role="listbox"]');
      await dropdown.waitFor({ state: 'visible', timeout: 5000 });
      // Выбираем опцию с нужным текстом внутри списка
      const option = dropdown.locator(`text=${movieData.location}`);
      await option.click();
    } 
    if (movieData.imageUrl) await this.imageUrlInput.fill(movieData.imageUrl);
    // Комбобокс "Жанр" (аналогично)
    if (movieData.genre) {
      await this.genreSelect.click();   // здесь this.genreSelect — это кнопка комбобокса
      const dropdown = this.page.locator('[role="listbox"]');
      await dropdown.waitFor({ state: 'visible', timeout: 5000 });
      await dropdown.locator(`text=${movieData.genre}`).click();
    }

    if (movieData.published !== undefined) {
      const isChecked = await this.publishedCheckbox.isChecked();
      if (isChecked !== movieData.published) {
        await this.publishedCheckbox.click();
      }
    }
  }

  // 3. Отправить форму
  async submitForm() {
    await this.submitButton.click();
  }

  // 4. Получить текст сообщения об успехе (из тостера)
  async getSuccessMessage(expectedText = 'Фильм успешно добавлен') {
    // Ждём, когда внутри тостера появится нужный текст
    await this.successToast.getByText(expectedText).waitFor({ state: 'visible', timeout: 10000 });
    return await this.successToast.textContent();
  }

  // 5. Комбинированный метод: навигация + заполнение + отправка + получение сообщения
  async createMovie(movieData) {
    await this.navigateToCreateForm();
    await this.fillMovieForm(movieData);
    await this.submitForm();
    return await this.getSuccessMessage();
  }
}

export { MovieFormPage };