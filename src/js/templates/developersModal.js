import { developers } from '../templates/developersCard';

const refs = {
  footer: document.querySelector('.footer'),
    
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdropTeam: document.querySelector('.js-backdrop'),

  team: document.querySelector('.dev-set'),
}

const developersBoard = document.querySelector('.js-dev-set');
developersBoard.innerHTML = personalCard(developers);

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.backdropTeam.addEventListener('click', onBackdropClick);
refs.closeModalBtn.addEventListener('click', onCloseModal);

function personalCard(developers) {
  const markup = developers
    .map(({ img, name, position }) => {
      return `
        <li class='devcont-item'>
  <a href="#" class='devcont-link'>
    <div class='devcont-imgbox'>
      <img src="${img}" alt='${name}' class='devcont-img' />
    </div>

    <div class='devcont-description'>
      <p class='devcont-name'>${name}</p>
      <p class='devcont-position'>${position}</p>
    </div>

</li>
        `
    })
    .join('')
  return markup
};

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.backdropTeam.classList.remove('is-hidden');
  refs.backdropTeam.classList.remove('show-modal');
  refs.body.classList.add('overhidden');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.backdropTeam.classList.remove('show-modal');
  refs.backdropTeam.classList.add('is-hidden');
  refs.body.classList.remove('overhidden');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}



