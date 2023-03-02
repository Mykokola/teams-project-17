$('.hotel-hero-slider').slick({
    slide: '.hotel-hero-slider-item',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
    variableWidth: true,
    prevArrow: $('.hotel-hero-prev'),
    nextArrow: $('.hotel-hero-next'),
  });
  $('.hotel-hero-slider').on(
    'afterChange',
    function (event, slick, currentSlide) {
      if (currentSlide === 0) {
        $('.hotel-hero-prev').css('opacity', '0.3');
      } else {
        $('.hotel-hero-prev').css('opacity', '1');
      }
      if (currentSlide === slick.slideCount - 1) {
        $('.hotel-hero-next').css('opacity', '0.3');
      } else {
        $('.hotel-hero-next').css('opacity', '1');
      }
    }
  );
  $('.restaurant-hero-slider').slick({
    slide: '.restaurant-hero-slider-item',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
    variableWidth: true,
    prevArrow: $('.restaurant-hero-prev'),
    nextArrow: $('.restaurant-hero-next'),
  });
  $('.restaurant-hero-slider').on(
    'afterChange',
    function (event, slick, currentSlide) {
      if (currentSlide === 0) {
        $('.restaurant-hero-prev').css('opacity', '0.3');
      } else {
        $('.restaurant-hero-prev').css('opacity', '1');
      }
      if (currentSlide === slick.slideCount - 1) {
        $('.restaurant-hero-next').css('opacity', '0.3');
      } else {
        $('.restaurant-hero-next').css('opacity', '1');
      }
    }
  );
  $('.home-restaurantdetails-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(document).ready(function () {
    $('.menu-slider').slick({
      adaptiveHeight: true,
      speed: 500,
      infinite: false,
      slidesToShow: 4,
      arrows: false,

      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 1,
            arrows: true,
          },
        },
      ],
      appendArrows: $('.btn-arrows'),
    });
  });
  $('.hero-room-slider').slick({
    slide: '.hero-room-slider-item',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
    variableWidth: true,
    prevArrow: $('.hero-room-prev'),
    nextArrow: $('.hero-room-next'),
  });
  $('.hero-room-slider').on(
    'afterChange',
    function (event, slick, currentSlide) {
      if (currentSlide === 0) {
        $('.hero-room-prev').css('opacity', '0.3');
      } else {
        $('.hero-room-prev').css('opacity', '1');
      }
      if (currentSlide === slick.slideCount - 1) {
        $('.hero-room-next').css('opacity', '0.3');
      } else {
        $('.hero-room-next').css('opacity', '1');
      }
    }
  );
  $(document).ready(function () {
    $('.home-hotel-details-slider').slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 2,
      variableWidth: true,
    });
  });