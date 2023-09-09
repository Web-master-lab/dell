const mainNavButton = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');
const body = document.body;

mainNavButton.addEventListener('click', () => {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');

    body.classList.add('page__body--darkness');
  } else {
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');

    body.classList.remove('page__body--darkness');
  }
});


const swiper = new Swiper('.swiper', {
  loop: true,
  watchSlidesProgress: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider__button-control'
  },
});
