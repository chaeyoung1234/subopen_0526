/*이책 어때*/

$(function (){
    
    var i=0; 
    $(".how_prev").click(function(){

        i--;
        var circle = $(".dot2 li");

        $(".how_content:last").prependTo("#how_slide_ul");
        $("#how_slide_ul").css({marginLeft:-150});
        $("#how_slide_ul").stop().animate({marginLeft:0})

        if(i < 0){
            i =  circle.length -1
        }

        $(".dot2 li").removeClass("on");
        $(".dot2 li").eq(i).addClass("on");

    })

    $(".how_next").click(function(){

        i++;
        var circle = $(".dot2 li");
        
        if(i >= circle.length){
            i =  0;
        }
        
        $("#how_slide_ul").stop().animate({marginLeft:-150}, function(){
            
            $(".how_content:first").appendTo("#how_slide_ul"); 
            $("#how_slide_ul").css({marginLeft:0});  
    
            $(".dot2 li").removeClass("on");
            $(".dot2 li").eq(i).addClass("on");

        })
    })

})