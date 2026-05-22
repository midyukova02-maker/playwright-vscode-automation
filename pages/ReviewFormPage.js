import selectors from '../constants/selectors.js';

class ReviewFormPage {
  constructor(page) {
    this.page = page;

    // Навигационные элементы (для перехода к форме)  
    this.reviewPanelLink = page.locator(selectors.reviewForm.reviewPanelLink);
    this.movieReviewInput = page.locator(selectors.reviewForm.movieReviewInput);
    this.movieSubmitButton = page.locator(selectors.reviewForm.movieSubmitButton);
    this.movieReviewActionsButton = page.locator(selectors.reviewForm.movieReviewActionsButton);
    this.movieReviewActionsDelete = page.locator(selectors.reviewForm.movieReviewActionsDelete);
  }

  // Отзыв, создание и удаление
  async CreateDeleteReviewForm(ReviewData) {
    await this.reviewPanelLink.click();
    if (ReviewData) await this.movieReviewInput.fill(ReviewData);
    await this.movieReviewInput.click();
    await this.movieSubmitButton.click();
    await this.movieReviewActionsButton.click();
  }
}

export { ReviewFormPage };