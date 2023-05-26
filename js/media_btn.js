/*media btn*/ 

/*next*/ 
$(function(){

    var i=0; 

    $(".media_next").click(function(){
        var media = $(".media_box li")
        i++
        if(i>=media.length){
            i=0; 
        }

        $(".media_box li").eq(i).stop().fadeIn(); 
        $(".media_box li").eq(i-1).stop().fadeOut(); 


        $(".dot1 li").removeClass("on");
        $(".dot1 li").eq(i).addClass("on"); 

    })
})

/*prev*/ 
$(function(){

    var i=0; 
    var media2 = $(".media_box li")

    $(".media_prev").click(function(){

        i--
        if(i<0){
            i= media2.length -1
        }

        $(".media_box li").stop().fadeOut(); 
        $(".media_box li").eq(i).stop().fadeIn(); 

        $(".dot1 li").removeClass("on"); 
        $(".dot1 li").eq(i).addClass("on"); 
    })
})

/*실행*/ 

$(function(){

    $(".dot1").eq(0).click(function(){
        $(".media_box li").stop().fadeOut; 
        $(".media_box li").eq(0).stop().fadeIn;
        $(".dot1 li").removeClass("on"); 
        $(".dot1 li").eq(0).addClass("on"); 
    })

    $(".dot1").eq(1).click(function(){
        $(".media_box li").stop().fadeOut; 
        $(".media_box li").eq(1).stop().fadeIn;
        $(".dot1 li").removeClass("on"); 
        $(".dot1 li").eq(1).addClass("on"); 
    })

    $(".dot1").eq(2).click(function(){
        $(".media_box li").stop().fadeOut; 
        $(".media_box li").eq(2).stop().fadeIn;
        $(".dot1 li").removeClass("on"); 
        $(".dot1 li").eq(2).addClass("on"); 
    })
})
