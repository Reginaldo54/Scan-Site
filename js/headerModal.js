
const buttonMaisGeneros = document.querySelector('.more-genre');
const modalMaisGeneros = document.querySelector('.show-more-genres');

function openModal() {
  modalMaisGeneros.style.top = '125px';
  modalMaisGeneros.style.opacity = '1';
  modalMaisGeneros.removeAttribute('inert');
  modalMaisGeneros.dataset.state = 'open';
}

function closeModal() {
  modalMaisGeneros.style.top = '-224px';
  modalMaisGeneros.style.opacity = '0';
  modalMaisGeneros.setAttribute('inert', '');
  modalMaisGeneros.dataset.state = 'close';
}

document.body.addEventListener('click', (click) => {
  
  if ( buttonMaisGeneros.contains(click.target) && modalMaisGeneros.dataset.state === 'close') {
    openModal();
  }
  else if (!modalMaisGeneros.contains(click.target)) {
    closeModal();
  }
});




// buttonMaisGeneros.addEventListener('click', () => {

// });

