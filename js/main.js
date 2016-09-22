$(function() {
  $('.hamburger').on('click', function() {
    $('#global-nav').toggle();
  });

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.slider-testimonials').owlCarousel({
    stopOnHover:     !0,
    singleItem:      !0,
    autoHeight:      !0,
    slideSpeed:      400,
    paginationSpeed: 1000,
    goToFirstSpeed:  2000,
    autoPlay:        3000,
    navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  });
});
