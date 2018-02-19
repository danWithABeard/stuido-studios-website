$(function() {
  console.log('JS LOADED')

  $( window ).scroll(function() {
    console.log('scroll')
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
})
