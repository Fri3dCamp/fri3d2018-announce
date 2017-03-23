$( document ).ready(function() {
    console.log( "ready!" );
    // slideshow
    $('.slideshow').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      dots: false,
      infinite: true,
      speed: 1000,
      fade: false,
      cssEase: 'ease-in-out',
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });
});
