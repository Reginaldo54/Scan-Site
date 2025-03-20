const imgs = ['../images/carrosel-images/img-1.jpg','../images/carrosel-images/img-2.jpg','../images/carrosel-images/img-3.jpg','../images/carrosel-images/img-4.jpg','../images/carrosel-images/img-5.jpg']
const imgsLength = imgs.length -1;

const carrosselImg = document.querySelector('.js-carrossel-img');
const allImgs = document.querySelectorAll('.carrossel-img');
const carrosselImgsLength = allImgs.length;



// setas no HTML
const arrowLeft = document.querySelector('.carrossel-arrow-container-one');
const arrowRight = document.querySelector('.carrossel-arrow-container-two');

function outraConfiguracao() {
  let index = 0;
  arrowLeft.addEventListener('click', () => {
    allImgs[index].style.marginLeft = '-100%';
    allImgs[index+1].style.animation = "aparecendoImgNova 4s 1s"
    allImgs[index+1].addEventListener('animationend', ()=>{
      allImgs[index+1].style.opacity = '1';
      index = index > 0? index-1 : imgsLength;
      
    })
  })

  let zIndex = [0,1,2,3,4];
  arrowRight.addEventListener('click', () => {
    allImgs[index].style.marginLeft = '100%';
    console.log("Before: "+index)
  
    console.log("After: "+index)
    allImgs[(index + 1) % allImgs.length].style.animation = "aparecendoImgNova 4s 1s"
    console.log("margin-left: " + allImgs[(index + 1) % allImgs.length].style.marginLeft)
    allImgs[(index + 1) % allImgs.length].addEventListener('animationend', ()=>{
      allImgs[index].style.opacity = '0';
      setTimeout(()=>{ const newIndex = index <= 0?imgsLength:index-1; allImgs[newIndex].style.marginLeft = '0'; allImgs[newIndex].style.animation =''}, 1500);
      

      allImgs[(index + 1) % allImgs.length].style.opacity = '1';
      index = (index + 1) % allImgs.length;
      console.log("Next: "+index)
    })
  })

}

// Automáticamente.
function girarCarrosel() {



  function returnInterval() {
    
    return setInterval(() => {
        count = (count + 1) % carrosselImgsLength;

        carrosselImg.style.marginLeft = `-${count}00%`;

  }, intervalDelay);
  }

  // obtendo o indexAtual.
  let count =  0;

  let intervalId;
  let timeoutId;

  const timeoutDelay = 1500;
  const intervalDelay = 6000;

  // seta Esquerda
  arrowLeft.addEventListener('click', ()=>{

    clearInterval(intervalId);
    clearTimeout(timeoutId);

    timeoutId = setTimeout(()=>{intervalId = returnInterval(); console.log('rodei1')}, timeoutDelay) // delay para iniciar o interval
    
    
    count = count <= 0 
      ? carrosselImgsLength-1 
      : count - 1;
      console.log('a: '+count);
    carrosselImg.style.marginLeft = `-${count}00%`;
    console.log(carrosselImg.style.marginLeft);
  })
  
  // Seta direita.
  arrowRight.addEventListener('click', ()=>{
    clearInterval(intervalId);
    clearTimeout(timeoutId);

    timeoutId = setTimeout(()=>{intervalId = returnInterval(); console.log('Rodei2')}, timeoutDelay)// delay

    count = (count + 1) % carrosselImgsLength;
    if (count === 0) {
      carrosselImg.style.marginLeft = `0%`;
    }
    //carrosselImg.src = imgs[count];
    carrosselImg.style.marginLeft = `-${count}00%`;
    
    console.log(carrosselImg.style.marginLeft);
    
  })

  
  if (!intervalId) {
   
    intervalId = returnInterval();
  }
}
girarCarrosel();



