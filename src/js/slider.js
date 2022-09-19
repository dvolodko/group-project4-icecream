const swiper = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  loopedSlides: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
