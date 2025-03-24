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
// Owlcarousel
$(document).ready(function(){
  $("#owl-carouselfade").owlCarousel({
      loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    center: true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
});

// counter
let valueDisplays = document.querySelectorAll(".num");
//timing function
let interval = 3000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});







 
 
 
 