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
