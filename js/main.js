$( document ).ready(function() {
    // slideshow
    $('.slideshowwrapper-sfeer .slideshow').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      dots: false,
      infinite: true,
      speed: 1000,
      fade: false,
      cssEase: 'ease-in-out',
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2000
    });
    $('.slideshowwrapper-prospectie .slideshow').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      arrows: false,
      dots: true,
      infinite: true,
      speed: 1000,
      fade: false,
      cssEase: 'ease-in-out',
      centerMode: false,
      autoplay: false,
      autoplaySpeed: 2000,
      responsive: [
      {
        breakpoint: 400,
        settings: {
          dots: false,
          arrows: true
        }
      }
    ]
    });
});
