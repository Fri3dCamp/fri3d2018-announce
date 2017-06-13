$( document ).ready(function() {
    // slideshow
    $('.slideshow').slick({
      lazyLoad: 'ondemand',
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

$(".menu-access a").click(function(e){
  e.preventDefault();
  $(this).toggleClass("menu-open");
  $("#mainmenu").toggleClass("collapsed");
  /*if ($(this).hasClass("menu-open")) {
    $(this).children(".label").text("Menu verbergen");
  } else {
    $(this).children(".label").text("Menu tonen");
  }*/
});
