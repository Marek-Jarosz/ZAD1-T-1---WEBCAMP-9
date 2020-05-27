
$('.slider1').slick({
	arrows: false,
});




$('.slider2').slick({

    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: '<button class="slick-next slick-arrow"></button>',
    prevArrow: '<button class="slick-prev slick-arrow"></button>',
    
    
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          autoplay: true,
            autoplaySpeed: 2000,
           
          
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
            autoplaySpeed: 2000,
          arrows: false,
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
           autoplaySpeed: 2000,
          arrows: false,
        }
      }
  
    ]
  });




$('.slider3').slick({

    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<button class="slick-next slick-arrow"></button>',
    prevArrow: '<button class="slick-prev slick-arrow"></button>',
    
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
            autoplaySpeed: 2000,
          
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
            autoplaySpeed: 2000,
          arrows: false,
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
           autoplaySpeed: 2000,
          arrows: false,
        }
      }
  
    ]
  });



