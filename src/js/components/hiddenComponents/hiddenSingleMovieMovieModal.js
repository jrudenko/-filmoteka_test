import { refs } from '../../refs/refs';

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.singleMovieModal.classList.add('is-hidden');
}

export function visibleSingleMovieModal(bool) {
  if (bool) {
    refs.singleMovieModal.classList.remove('is-hidden');

    window.addEventListener('keydown', onEscKeyPress);
  } else if (!bool) {
    onCloseModal();
  }
}

export function closeButtonListener() {
  const closeSingleMovieModalButton = document.querySelector('#button-close');
  closeSingleMovieModalButton.addEventListener('click', () => {
    onCloseModal();
  });
}
export function clickBackdropListener() {
  refs.moviesBackdrop.addEventListener('click', onBackdropClick);
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
}
