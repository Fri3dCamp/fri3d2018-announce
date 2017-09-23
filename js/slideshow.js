$(document).ready(function(){

    function sumwidths( elem ) {
        var tw = 0;
        $( elem ).children(".fri3d-slideshow").find("li").each(
            function(i) {
                tw += parseInt($(this).width(), 10);
                tw += parseInt($(this).css('margin-right'))*2; // 20px margin on each side per image
            }
        );

        return tw;
    }

    function slideshow_init( elem, focusnr = 1 ) {
        var viewportwidth = $( elem ).width();
        var imageslist = $( elem ).find( ".images" );
        var total = $( elem ).find(".images li").not(".clone").length;
        if (focusnr > total) {
            focusnr = focusnr % total;
        }
        var itemmargin = parseInt($( elem ).find(".images li[data-volgnr=1]").css('margin-right'));
        var itemwidth = $( elem ).find(".images li[data-volgnr=1]").width()+(itemmargin*2);
        var leftpos = (viewportwidth - itemwidth) / 2;
        imageslist.data('total',total);
        imageslist.data('viewportwidth',viewportwidth);
        imageslist.data('itemmargin',itemmargin);
        imageslist.data('itemwidth',itemwidth);
        imageslist.data('leftpos',leftpos);
        imageslist.data('focusnr',focusnr);
        imageslist.children().remove( ".clone" );
        $( elem ).find(".images li[data-volgnr="+focusnr+"]").addClass("selected");
        $( elem ).find(".images li[data-volgnr=1]").clone(true).appendTo( imageslist ).addClass( "clone" );
        $( elem ).find(".images li[data-volgnr=2]").clone(true).appendTo( imageslist ).addClass( "clone" );
        $( elem ).find(".images li[data-volgnr="+total+"]").clone(true).prependTo( imageslist ).addClass( "clone" );
        $( elem ).find(".images li[data-volgnr="+(total-1)+"]").clone(true).prependTo( imageslist ).addClass( "clone" );
        set_totalwidth( elem );
        set_srcs( elem, focusnr );
        set_leftpos ( elem, focusnr );
        imageslist.css('opacity',1);
    }

    function set_leftpos ( elem, focusnr = 1 ) {
        var imageslist = $( elem ).find( ".images" );
        var shiftleft = imageslist.data('leftpos') - imageslist.data('itemwidth')*focusnr - imageslist.data('itemwidth');
        imageslist.css('left',shiftleft);
        set_navclasses( elem, focusnr );
    }

    function set_navclasses( elem, focusnr ) {
        clear_tempclasses( elem );
        curritem = $( elem ).find("li[data-volgnr="+focusnr+"]").addClass("selected");
        curritem.prev("li").data('dir','left');
        curritem.next("li").data('dir','right');
    }

    function clear_tempclasses( elem ){
        $( elem ).find("li").removeClass("selected");
        $( elem ).find("li").removeClass("left");
        $( elem ).find("li").removeClass("right");
    }

    function set_srcs( elem, center = 1 ) {
        var imageslist = $( elem ).find(".images");
        centeritem = $( elem ).find("li[data-volgnr="+center+"]");
        if ( 1 == center ) {
            leftitem = $( elem ).find("li[data-volgnr="+ imageslist.data('total') +"]");
        } else {
            leftitem = $( elem ).find("li[data-volgnr="+( center-1 )+"]");
        }
        if ( imageslist.data('total') == center ) {
            rightitem = $( elem ).find("li[data-volgnr=1]");
        } else {
            rightitem = $( elem ).find("li[data-volgnr="+( center+1 )+"]");
        }
        centeritem.children("img").attr("src", centeritem.children("img").data("src"));
        leftitem.children("img").attr("src", leftitem.children("img").data("src"));
        rightitem.children("img").attr("src", rightitem.children("img").data("src"));
    }

    function slideshow_slide( elem, dir = 'right' ) {
        $( elem ).addClass("noclick");
        var shiftdirection = -1;
        if ( 'left' == dir ) {
            var shiftdirection = 1;
        }
        var distance = $( elem ).data('itemwidth')*shiftdirection;
        $( elem ).animate(
            { 'left' : '+='+ ($( elem ).data('itemwidth')*shiftdirection) + 'px'},
            500,
            function( o = $(this).parents(".fri3d-slideshowwrapper") ) {
                set_leftpos( o, o.find(".images").data('nextnr') );
                o.find(".images").removeClass('noclick');
            }
        );
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
                slideshow_init( $(this), volgnr );
            }
        );
    }

    $(".fri3d-slideshowwrapper .images li").click(
        function(i){
            if (!$(this).hasClass("selected") && !$(this).parents(".images").hasClass("noclick")) {
                $(this).parents(".images").data('nextnr', $(this).data('volgnr'));
                set_srcs( $(this).parents(".fri3d-slideshowwrapper"), $(this).data('volgnr') );
                slideshow_slide( $(this).parents(".images"), $(this).data('dir') );
            }
        }
    );
    $( window ).resize(function(){
        setup_slideshows();
    });
    setup_slideshows();
});
