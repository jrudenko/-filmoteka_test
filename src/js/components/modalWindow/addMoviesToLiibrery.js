const moviesWatched = [];
const movieQueue = [];

export function addtListenersToModal() {
  const modalAddWatched = document.querySelector('.js-addWatched');
  const modalDeleteWatched = document.querySelector('.js-deleteWatched');
  const modalAddQueue = document.querySelector('.js-addQueue');
  const modalDeleteQueue = document.querySelector('.js-deleteQueue');
  const modalImageRef = document.querySelector('.js-image');
  const idElem = modalImageRef.dataset.action;

  modalAddWatched.addEventListener('click', onClickToAddWathedMovie);
  modalDeleteWatched.addEventListener('click', onClickToDeleteWathedMovie);
  modalAddQueue.addEventListener('click', onClickToAddQueueMovie);
  modalDeleteQueue.addEventListener('click', onClickToDeleteQueueMovie);
  console.log(idElem);

  if (moviesWatched.includes(idElem)) {
    hideBtn(modalAddWatched, modalDeleteWatched);
  }

  if (movieQueue.includes(idElem)) {
    hideBtn(modalAddQueue, modalDeleteQueue);
  }

  function hideBtn(hide, show) {
    hide.classList.add('hide');
    show.classList.remove('hide');
  }

  function onClickToAddWathedMovie() {
    if (moviesWatched.includes(idElem)) return;
    hideBtn(modalAddWatched, modalDeleteWatched);

    moviesWatched.push(idElem);
    localStorage.setItem('moviesWatched', JSON.stringify(moviesWatched));
  }

  function onClickToDeleteWathedMovie() {
    hideBtn(modalDeleteWatched, modalAddWatched);

    moviesWatched.splice(moviesWatched.indexOf(idElem), 1);
    localStorage.removeItem('moviesWatched');
    localStorage.setItem('moviesWatched', JSON.stringify(moviesWatched));
  }

  function onClickToAddQueueMovie() {
    if (movieQueue.includes(idElem)) return;
    hideBtn(modalAddQueue, modalDeleteQueue);

    movieQueue.push(idElem);
    localStorage.setItem('movieQueue', JSON.stringify(movieQueue));
  }

  function onClickToDeleteQueueMovie() {
    hideBtn(modalDeleteQueue, modalAddQueue);

    movieQueue.splice(movieQueue.indexOf(idElem), 1);
    localStorage.removeItem('movieQueue');
    localStorage.setItem('movieQueue', JSON.stringify(movieQueue));
  }
}
