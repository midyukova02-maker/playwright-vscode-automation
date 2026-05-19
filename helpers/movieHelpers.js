// helpers/movieHelpers.js
import { MovieFormPage } from '../pages/MovieFormPage.js';

export async function createTestMovie(page) {
  const movieForm = new MovieFormPage(page);
  const uniqueId = Date.now();
  const movieTitle = `Автотестовый фильм ${uniqueId}`;
  
  const newMovie = {
    title: movieTitle,
    description: 'Описание автотестового фильма',
    price: 100,
    location: 'MSK',
    imageUrl: 'https://avatars.mds.yandex.net/get-ott/1672343/2a0000017802c0cfb57b427a3d58690d4a51/orig',
    genre: 'Драма',
    published: true,
  };
  
  const successMsg = await movieForm.createMovie(newMovie);
  return { movieTitle, successMsg };
}