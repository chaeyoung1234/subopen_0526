/*스페셜 slide*/

$(function(){

    $(".special_prev").click(function(){

        $(".special_slide > li:last").prependTo(".special_slide");
        $(".special_slide").css({marginLeft: -271})
        $(".special_slide").stop().animate({marginLeft:0});
    });

    $(".special_next").click(function(){

        $(".special_slide").stop().animate({marginLeft: -271}, function(){
            $(".special_slide > li:first").appendTo(".special_slide")
            $(".special_slide").css({marginLeft:0})

        }); 
    });
});