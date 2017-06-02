$( document ).ready(function() {
    // slideshow
    $('.slideshow').slick({
      lazyLoad: 'progressive',
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      dots: false,
      infinite: true,
      speed: 1000,
      initialSlide: 0,
      fade: false,
      cssEase: 'ease-in-out',
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2000
    })
});

$(window).scroll(function() {
  if ($(this).scrollTop() > $('.pagehead').outerHeight()+1){
    $('.subhead').addClass("sticky");
  } else {
    $('.subhead').removeClass("sticky");
  }
});
