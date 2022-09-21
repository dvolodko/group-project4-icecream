function backToTop() {
  let button = $('.back-to-home');
  $(window).on('scroll', () => {
    if ($(this).scrollTop() >= 50) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on('click', e => {
    e.preventDefault();
    $('html').animate({ scrollTop: 0 }, 1000);
  });
}
backToTop();

var $page = $('html, body');
$('a[href*="#about"]').click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top,
    },
    300
  );
  return false;
});

var $page = $('html, body');
$('a[href*="#products"]').click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top,
    },
    500
  );
  return false;
});

var $page = $('html, body');
$('a[href*="#contacts"]').click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top,
    },
    1000
  );
  return false;
});
