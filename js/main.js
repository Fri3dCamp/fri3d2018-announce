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
    startPosition: 1,
    responsive:{
        600:{
            items:1,
            stagePadding: 50,
            dots: true
        }
    }
   });

   setTimeout(function () {
       $('.owl-carousel').trigger('prev.owl.carousel');
       set_owl_sizes();
   }, 500);



});

$('.owl-item').click(function() {
    if ($(this).next().hasClass('active')) {
        $('.owl-carousel').trigger('prev.owl.carousel');
    } else {
        $('.owl-carousel').trigger('next.owl.carousel');
    }
});

function set_owl_sizes() {
    $('.owl-carousel .active img').height('auto');
    $('.owl-carousel .owl-item').each(function(){
        $(this).children('img').height($(this).siblings('.active').height());
    });
}

$('.owl-carousel').on('resized.owl.carousel', function( event ){
     console.log('resized');
     set_owl_sizes();
});

$('.owl-carousel').on('translated.owl.carousel', function( event ){
     console.log('translated');
     set_owl_sizes();
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
