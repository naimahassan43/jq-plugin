$(document).ready(function(){

      // counter up plugin

      $('.counter').counterUp({
        delay: 10,
        time: 1000
      });
     // Owl Carousal
     $(".owl-carousel").owlCarousel({
      autoplay: true,
      autoplayTimeout: 2000,
      smartSpeed: 300,
      loop:true,
      margin:10,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:5,
              nav:true,
              loop:false
          },
          1200:{
              items:6,
              nav:true,
              loop:false
          }
        }
     });

     // Slick slider 
     $('.autoplay').slick({
      dots: true,
      infinite: true,
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      margin:10,
      autoplaySpeed: 2000
    });

    });