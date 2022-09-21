$('.customer__item').slick({
  centerMode: false,
  centerPadding: '60px',
  slidesToShow: 1,
  autoplay: false,
  asNavFor:".customer__item2, .customer__item3",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesPerRow: 1,
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
$('.customer__item2').slick({
  centerMode: false,
  centerPadding: '60px',
  slidesToShow: 1,

  autoplay: false,
  asNavFor:".customer__item, .customer__item3",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesPerRow: 1,
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
$('.customer__item3').slick({
  centerMode: false,
  centerPadding: '60px',
  slidesToShow: 1,
  dots: true,
  appendDots:('.slick-dotees'),
  autoplay: false,
  asNavFor:".customer__item2, .customer__item",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesPerRow: 1,
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

$('.modal__slider').slick({
  centerMode: false,
  centerPadding: '60px',
  slidesToShow: 1,
  dots: true,
  appendDots:('.dotes-class'),
  autoplay: false,
   });

   $('.modal__slider').slick({
    centerMode: false,
    centerPadding: '60px',
    slidesToShow: 1,
    dots: true,
    appendDots:('.dotes-class'),
    autoplay: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesPerRow: 1,
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