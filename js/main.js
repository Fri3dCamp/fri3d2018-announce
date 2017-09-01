/*$( document ).ready(function() {
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
});*/

$(document).ready(function(){
 // $(".owl-carousel").owlCarousel();

  $('.owl-carousel').owlCarousel({
    center: true,
    items:1,
    lazyLoad:true,
    loop:true,
    margin:10,
    stagePadding: 30,
    dots: false,
    responsive:{
        600:{
            items:1,
            stagePadding: 50,
            dots: true
        }
    }
   });
   $('.owl-item').click(function() {
       if ($(this).next().hasClass('active')) {
           $('.owl-carousel').trigger('prev.owl.carousel');
       } else {
           $('.owl-carousel').trigger('next.owl.carousel');
       }
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
