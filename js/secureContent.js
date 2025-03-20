const buttonMat = document.querySelector('.button-mature');
const dot = document.querySelector('.dot');


function mature() {
  buttonMat.style.animation = 'mature 2s infinite ease-in-out';
  buttonMat.dataset.state = 'mature';
  buttonMat.title = 'Contéudo +18 Ativado';

  dot.style.background = 'rgb(109, 21, 5)';
}

function secure() {
  buttonMat.style.animation = 'secure 2s infinite ease-in-out';
  buttonMat.dataset.state = 'secure';
  buttonMat.title = 'Contéudo +18 Desativado';

  dot.style.background = 'rgba(10, 75, 1, 0.89)';
}

// Quando clicado alterar entre os tipos de contéudo.
buttonMat.addEventListener('click', () => {

  if (buttonMat.dataset.state === 'secure') {
    mature();
  } 
  else {
    secure();
  }

});
