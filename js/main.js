$(function() {
  this.isMuted = true;

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

  $("#owl-demo").owlCarousel({
  
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true
  
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
  });

  $('.speaker').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('mute');
    $('video#video-background').prop('muted', $(this).hasClass('mute'));
  });

  $("#owl").owlCarousel({
      navigation: false,
      slideSpeed: 100,
      paginationSpeed: 2000,
      singleItem: true,
      autoPlay: true
  });
});
