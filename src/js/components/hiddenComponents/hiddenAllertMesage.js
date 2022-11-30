import { refs } from '../../refs/refs';

function hiddenAllertMessage(bool) {
  if (bool) {
    refs.alertMessage.classList.remove('is-hidden');
  } else if (!bool) {
    refs.alertMessage.classList.add('is-hidden');
  }
}

export function lengthCheck(lenght) {
  if (lenght === 0) {
    hiddenAllertMessage(true);
  } else if (lenght !== 0) {
    hiddenAllertMessage(false);
  }
}
