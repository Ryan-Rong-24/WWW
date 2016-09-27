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

  $('.speaker').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('mute');
    $('video#video-background').prop('muted', $(this).hasClass('mute'));
  });

  $("#owl").owlCarousel({
      navigation: false,
      slideSpeed: 5000,
      paginationSpeed: 1000,
      singleItem: true,
      autoPlay: 10000
  });
});
