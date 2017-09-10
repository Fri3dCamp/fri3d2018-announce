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

$('.owl-carousel img').click(function() {
    console.log('click');
    if ($(this).parent().next().hasClass('active')) {
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

/* nav items */

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

var navtimers = [];

function show_submenu( container ) {
    console.log('show '+container);
    clearTimeout(navtimers[container]);
    $("#navitem-"+container).addClass('selected');
    $("#submenu-"+container).addClass('active');
}

function hide_submenu( container, delay = 500 ) {
    if ( delay > 0 ) {
        console.log('hide '+container+' '+delay);
        navtimers[container] = setTimeout( function() {
            $("#submenu-"+container).removeClass('active');
            $("#navitem-"+container).removeClass('selected');
        }, delay );
    } else {
        console.log('hide '+container+' immediately');
        for (navtimer in navtimers) {
            clearTimeout(navtimer);
        }
        $("#submenu-"+container).removeClass('active');
        $("#navitem-"+container).removeClass('selected');
    }
}

$(".menu-container li").has( ".menu-container" ).children("a").hover(
        function() {
            show_submenu($(this).parent().data("navitem"));
        },
        function() {
            hide_submenu($(this).parent().data("navitem"),200);
        }
);
$(".menu-container .menu-container li").hover(
        function() {
            show_submenu($(this).parent().data("parent"));
        },
        function() {
            hide_submenu($(this).parent().data("parent"),200);
        }
);
