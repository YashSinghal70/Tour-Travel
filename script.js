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

// car1
$('#owl-carousel1').owlCarousel({
    loop: true,
    margin: 0,
        //default settings:
autoplay:true,
autoplayTimeout:2000,
autoplayHoverPause:false,
    responsiveClass: true,
    responsive: {
        0:{
            items: 1,
        },
        768:{
            items: 2,
        },
        1100:{
            items: 3,
        },
        1400:{
            items: 4,
            loop: false,
        }
    }
});

