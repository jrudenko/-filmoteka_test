import { refs } from '../refs/refs';
import noPosterImage from '../../images/header/no-poster.jpeg';

let imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
const noPosterImg = noPosterImage;

export function renderMovieListMarkup(movies) {
  refs.moviesList.innerHTML = '';
  const moviesList = movies
    .map(movie => {
      if (movie.poster_path === null) {
        imgBaseUrl = '';
        movie.poster_path = noPosterImg;
      } else {
        imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
      }
      return moviesListTemplate(movie);
    })
    .join('');

  refs.moviesList.insertAdjacentHTML('beforeend', moviesList);
}

function moviesListTemplate({
  poster_path,
  title,
  genre_ids,
  vote_average,
  release_date,
  id,
}) {
  return `
        <li class="movie__item">
          <a hres="#" class="movie__link">
             <div class="thumb"> 
              <img class="movie__img" id="${id}"
              width="500"
              loading="lazy"
              alt="${title}"
              src="${imgBaseUrl}${poster_path}" 
              />
            </div>
            <p class="movie__title">${title}</p>
            <div class="movie__descr">
            <ul class="movie__descr--orange>
             <li class="card__genre"><a href="" class="movie__genre">Action,</a></li>
             <li class="card__genre"><a href="" class="movie__genre">Adventure,</a></li>
             <li class="card__genre"><a href="" class="movie__genre">Mystery</a></li>
             <li class="movie__genre">${genre_ids[0]}|${release_date.substr(
    0,
    4
  )}</li>
  <li class="movie__vote">${vote_average.toFixed(1)}</li>
            </ul>
            </div>
          </a>
        </li>
  `;
}
