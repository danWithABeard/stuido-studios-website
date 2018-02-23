$(function() {
  $(window).scroll(function() {
    var scrollTop = $(document).scrollTop()
    if (scrollTop > 450) {
      $('.sticky-nav').addClass('sticky-nav--visible')
    } else {
      $('.sticky-nav').removeClass('sticky-nav--visible')
    }
  })

  $('.js-games-link').on('click', function() {
    $('.header').toggleClass('header--dropdown')
  })

  $('a[href*="#"]').click(function(event) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

    if (target.length) {
      event.preventDefault();
      $('html, body').animate({scrollTop: target.offset().top }, 1000)
    }
  })
})
