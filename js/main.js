$( document ).ready(function() {
    console.log( "ready!" );
    setClock();
    function setClock(target) {
      var then = new Date($(".countdown").data("totime"));
      var thenEpoch = then.getTime();
      var now = new Date();
      var nowEpoch = now.getTime();
      var timediff = then - now;
      if ( timediff <= 0 ) {
        console.log("event has passed");
      } else {
        var days = Math.floor( timediff/86400000 );
        var hours = Math.floor( (timediff - 86400000*days)/3600000);
        var minutes = Math.floor( (timediff-86400000*days-3600000*hours)/60000 );
        var seconds = Math.floor( (timediff-86400000*days-3600000*hours-60000*minutes)/1000 );
        /*console.log(days);
        console.log(hours);
        console.log(minutes);
        console.log(seconds);
        console.log(timediff);*/

        ("00" + 1234).slice (-3)

        $(".days .val").html(("000"+days).slice(-3));
        $(".hours .val").html(("00"+hours).slice(-2));
        $(".minutes .val").html(("00"+minutes).slice(-2));
        $(".seconds .val").html(("00"+seconds).slice(-2));
      }
    }
    //countdown timer
    setInterval(setClock, 1000);
    //slideshow
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
