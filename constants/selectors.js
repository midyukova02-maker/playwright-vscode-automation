// constants/selectors.js
const selectors = {
  openLoginButton: '[data-qa-id="login_page_button"]',
  usernameInput: '[data-qa-id="login_email_input"]',
  passwordInput: '[data-qa-id="login_password_input"]',
  loginButton: '[data-qa-id="login_submit_button"]',
  toaster: '[id="_rht_toaster"]',   // один локатор для сообщений
  
  movieForm: {
    createMovieButton: '[data-qa-id="profile_page_button"]',
    adminPanelLink: 'a:has-text("Админ панель")',
    filmPanelLink: 'a:has-text("Фильмы")',
    createButton: '[data-qa-id="movie_create_button"]',
    // Поля формы добавления фильма
    titleInput: '[data-qa-id="movie_name_input"]',          // поле "Название"
    descriptionInput: '[data-qa-id="movie_description_input"]', // "Описание"
    priceInput: '[data-qa-id="movie_price_input"]',          // "Цена"
    locationInput: '[data-qa-id="movie_location_select"]',    // "Местоположение"
    imageUrlInput: '[data-qa-id="movie_image_url_input"]',   // "Ссылка на изображение"
    genreSelect: '[data-qa-id="movie_genre_select"]',        // "Жанр" (select)
    publishedCheckbox: '[data-qa-id="movie_published_checkbox"]', // "Опубликован"
    submitButton: '[data-qa-id="movie_submit_button"]',      // "Отправить"
    successToast: '[id="_rht_toaster"]',                     // сообщение об успехе Фильм успешно добавлен
  },
  
  // Создание и удаление отзыва
  reviewForm: {
    reviewPanelLink: 'a:has-text("Автотестовый фильм")',
    movieReviewInput: '[data-qa-id="movie_review_input"]',
    movieSubmitButton: '[data-qa-id="movie_review_submit_button"]',
    movieReviewActionsButton: '[data-qa-id="movie_review_actions_button"]',
    movieReviewActionsDelete: '[data-qa-id="movie_review_action_delete_button"]',
  }
};

export default selectors;



