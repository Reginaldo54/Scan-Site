const buttonLightDark = document.querySelector('#light-dark-mode');
const iconLightDark   = document.querySelector('#light-dark-icon');
const toolTipTheme    = document.querySelector('#mode-container > .tool-tip');

const iconLight = '../images/icons/light-mode-icon.svg';
const iconDark  = '../images/icons/dark-mode-icon.svg';

buttonLightDark.addEventListener('click', () => {

  // Mudando Tema
  document.body.classList.toggle('light-theme'); 
  document.body.classList.toggle('dark-theme');


  if (iconLightDark.src.includes('light')) {
    iconLightDark.src = iconDark;
    toolTipTheme.innerText = 'Dark Mode';
    return;
  }

  if (iconLightDark.src.includes('dark')) {
    iconLightDark.src = iconLight;
    toolTipTheme.innerText = 'Light Mode';
    return; // é igual a usar return undefined;
  }
    
})












// console.log('a')
// lightDarkButton = document.querySelector('#light-dark-theme');

// // Header
// const searchHeaderInput = document.querySelector('.search-header-input');
// const searchHeaderButton = document.querySelector('.search-header-button > svg');
// const headerMain = document.querySelector('.header-main');
// const headerSub = document.querySelector('.header-sub');
// const buttonMature = document.querySelector('.button-mature');
// const scanlatorName = document.querySelector('.scanlator-name');
// const pageNav = document.querySelectorAll('.page-nav');
// const acessAccount = document.querySelectorAll('.acess-account');
// const specificSearch = document.querySelector('.specific-search');

// // Projetos
// const chapter = document.querySelectorAll('.chapter');
// const projectName = document.querySelectorAll('.project-name');
// const ratingNumber = document.querySelectorAll('.rating-value-container');
// const chapterDate = document.querySelectorAll('.chapter-date');
// const genre = document.querySelectorAll('.genre');
// const moreGenre = document.querySelector('.more-genre');
// const showMoreGenres = document.querySelector('.show-more-genres');

// // Project Aside
// const projectAside = document.querySelector('.project-aside');


// // Carrossel
// const carrosselImgContainer = document.querySelector('.carrossel-img-container');

// // title
// const titleSection = document.querySelectorAll('.title');

// // Cores
// const whiteColor = 'rgb(211, 214, 211)';
// const lightGreen = 'rgb(38, 179, 3)';
// const blackColor = 'rgb(12,12,12)';
// const bgColorWhite = 'rgb(245,245,245)';

// function darkTheme() {
//   //title
//   titleSection.forEach((e)=>{
//     e.style.color = whiteColor;
//   })
//   // Chapter
//   chapter.forEach((e) => {
//     e.style.borderColor = whiteColor;
//     e.style.color = whiteColor;
//   });

//   projectName.forEach((e) => {
//     e.style.color = whiteColor;
//   });

//   ratingNumber.forEach((e) => {
//     e.style.color = whiteColor;
//   });

//   chapterDate.forEach((e) => {
//     e.style.color = whiteColor;
//   });

//   // Header
//   genre.forEach((e) => {
//     e.style.color = whiteColor;
//   });

//   moreGenre.style.borderColor= `transparent transparent transparent ${whiteColor}`;


//   showMoreGenres.style.backgroundColor = 'black';


//   pageNav.forEach((e) => {
//     e.style.color = lightGreen;
//   });

//   scanlatorName.style.color = lightGreen;

//   acessAccount.forEach((e) => {
//     e.style.color = 'rgb(19, 85, 3)';
//     e.style.backgroundColor = whiteColor;
//   });

//   buttonMature.style.borderColor = whiteColor;
//   headerSub.style.backgroundColor = 'rgb(9, 68, 3)';
//   headerMain.style.backgroundColor = 'rgb(12, 12, 12)';
//   searchHeaderButton.style.fill = 'green';
  
//   searchHeaderInput.style.backgroundColor = 'rgb(27, 27, 27)';
//   searchHeaderInput.style.color = whiteColor;

//   document.body.style.backgroundColor = 'rgb(12, 12, 12)';
//   specificSearch.style.color = 'rgb(38, 179, 3)';


//   // Project aside
//   projectAside.style.animation = 'shine 4s infinite, light-border 12s infinite';

//   //Carrossel 
//   carrosselImgContainer.style.animation = 'shine 4s infinite';
// }

// function lightTheme() {

//   //title
//   titleSection.forEach((e)=>{
//     e.style.color = bgColorWhite;
//   })

//   // Chapter
//   chapter.forEach((e) => {
//     e.style.borderColor = blackColor;
//     e.style.color = blackColor;
//   });

//   projectName.forEach((e) => {
//     e.style.color = blackColor;
//   });

//   ratingNumber.forEach((e) => {
//     e.style.color = blackColor;
//   });

//   chapterDate.forEach((e) => {
//     e.style.color = blackColor;
//   });

//   // Header
//   genre.forEach((e) => {
//     e.style.color = blackColor;
//   });

//   // nem tá pegando o after....
//   moreGenre.style.borderColor= `transparent transparent transparent ${blackColor}`;

//   showMoreGenres.style.backgroundColor = bgColorWhite;

//   pageNav.forEach((e) => {
//     e.style.color = 'green';
//   });

//   scanlatorName.style.color = 'green';

//   acessAccount.forEach((e) => {
//     e.style.color = 'rgb(19, 85, 3)';
//     e.style.backgroundColor = whiteColor;
//   });

//   buttonMature.style.borderColor = blackColor;
//   headerSub.style.backgroundColor = 'rgb(21, 150, 6)';
//   headerMain.style.backgroundColor = bgColorWhite;
//   searchHeaderButton.style.fill = 'green';
  
//   searchHeaderInput.style.backgroundColor = 'rgb(225, 225, 225)';
//   searchHeaderInput.style.color = blackColor;

//   document.body.style.backgroundColor = bgColorWhite;
//   specificSearch.style.color = 'rgb(38, 179, 3)';


//   // Project aside
//   projectAside.style.animation = 'shine 4s infinite, dark-border 12s infinite';

//   //Carrossel 
//   carrosselImgContainer.style.animation = 'shine 4s infinite';
// }

