//  scroll

  
let nav = document.querySelector('.nav-background');
  
window.onscroll = function(){
  if(document.documentElement.scrollTop > 20){
    nav.classList.add('on-scroll');
  }
  else{
    nav.classList.remove('on-scroll');

  }
}

//testimonial
jQuery(function ($) {
  "use strict";
  var $window = $(window);
  var windowsize = $(window).width();
  var $root = $("html, body");
  var $this = $(this);


  /*Testimonials 3columns*/
  $("#testimonial-slider").owlCarousel({
     items: 3,
     autoplay: true,
     autoplayHoverPause: true,
     loop: true,
     margin: 30,
     dots: true,
     nav: false,
     responsive: {
        1280: {
           items: 3,
        },
        600: {
           items: 2,
        },
        320: {
           items: 1,
        },
     }
  });


});


