$('.customer__item').slick({
  centerMode: false,
  centerPadding: '60px',
  slidesToShow: 1,
  dots: true,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1,
      },
    },
  ],
});
