$(function(){

    $(".sub_banner_prev").click(function(){
        $(".left_slide li:last").prependTo(".left_slide")
        $(".left_slide").css({marginLeft: -90})
        $(".left_slide").stop().animate({marginLeft:0})
    })

    $(".sub_banner_next").click(function(){
        $(".left_slide").stop().animate({marginLeft : -90}, function(){
            $(".left_slide li:first").appendTo(".left_slide")
            $(".left_slide").css({marginLeft:0})
        })
        
    })

})