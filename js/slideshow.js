$(document).ready(function(){

    function sumwidths( elem ) {
        var tw = 0;
        $( elem ).children(".fri3d-slideshow").find("li").each(
            function(i) {
                tw += parseInt($(this).width(), 10);
                tw += parseInt($(this).css('margin-right'))*2; // 20px margin on each side per image
                console.log(parseInt($(this).css('margin-right'))*2);
            }
        );
        console.log(tw);

        return tw;
    }

    function slideshow_goto( elem, slideto = 1, animate = true ) {
        var viewportwidth = $( elem ).width();
        var imageslist = $( elem ).find( ".images" );
        var total = $( elem ).find(".images li").length;
        var slidefrom = $( elem ).find(".images li.selected").data("volgnr");
        if ( !slidefrom ) {
            slidefrom = 1;
        }
        $( elem ).find(".images li.selected").removeClass("selected");
        $( elem ).find(".images li.previtem").removeClass("previtem");
        $( elem ).find(".images li.nextitem").removeClass("nextitem");
        //console.log($( elem ).find(".images li").length);
        if (slideto > total) {
            slideto = slideto % total;
        }
        var curritem = $( elem ).find(".images li[data-volgnr="+slideto+"]");
        curritem.addClass("selected");
        var itemmargin = parseInt(curritem.css('margin-right'));
        console.log(itemmargin);
        var itemwidth = curritem.width()+(itemmargin*2);
        var leftpos = (viewportwidth - itemwidth) / 2;
        $( elem ).find(".images li").sort(function(a,b) {
             return a.dataset.volgnr > b.dataset.volgnr;
        }).appendTo( imageslist );
        if ( 1 == slideto ) {
            var previtem = $( elem ).find(".images li[data-volgnr="+total+"]");
            var nextitem = $( elem ).find(".images li[data-volgnr=2]");
            var shiftleft = leftpos - itemwidth*slideto;
            //previtem.prependTo( imageslist );
        } else if ( total == slideto ) {
            var previtem = $( elem ).find(".images li[data-volgnr="+(total-1)+"]");
            var nextitem = $( elem ).find(".images li[data-volgnr=1]");
            var shiftleft = leftpos - itemwidth*(slideto-2);
            //nextitem.appendTo( imageslist );
        } else {
            var previtem = curritem.prev("li");
            var nextitem = curritem.next("li");
            var shiftleft = leftpos - itemwidth*(slideto-1);
        }
        var shiftleft = leftpos - itemwidth*(slideto-1);
        var shiftdirection = 1;
        if ( (slidefrom == total && 1 == slideto) || -1 == slidefrom - slideto ){
            shiftdirection = -1;
        } else if (slidefrom == slideto) {
            shiftdirection = 0;
        }
        previtem.addClass("previtem");
        nextitem.addClass("nextitem");
        curritem.children("img").attr("src", curritem.children("img").data("src"));
        previtem.children("img").attr("src", previtem.children("img").data("src"));
        nextitem.children("img").attr("src", nextitem.children("img").data("src"));
        set_totalwidth( elem );
        //console.log(shiftleft);
        var speed = 0;
        if ( true == animate ) {
            imageslist.animate(
                { 'left' : '+='+ (itemwidth*shiftdirection) + 'px'},
                500,
                function( o = $(this) ) {
                    console.log("animated"+o.attr('class'));
                    slideshow_goto( $(this).parents(".fri3d-slideshowwrapper"), $(this).children(".selected").data("volgnr"), false );
                }
            )
        } else {
            imageslist.css('left',shiftleft);
        }
        //console.log( previtem );
    }

    function set_totalwidth( elem ) {
        $( elem ).find( ".images" ).width(sumwidths( elem ));
    }

    function setup_slideshows() {
        $(".fri3d-slideshowwrapper").each(
            function(){
                var volgnr = $(this).find(".images .selected").data("volgnr");
                if (!volgnr) {
                    volgnr = 1;
                }
                slideshow_goto( $(this), volgnr, false );
            }
        );
    }

    $(".fri3d-slideshowwrapper .images li").click(
        function(i){
            if (!$(this).hasClass("selected")) {
                slideshow_goto( $(this).parents(".fri3d-slideshowwrapper"), $(this).data("volgnr") );
            }
            //set_totalwidth( $(this) );
        }
    );
    $( window ).resize(function(){
        setup_slideshows();
    });
    setup_slideshows();
});
