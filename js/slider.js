/* 메인 슬라이더 */

$(function() {
    

    var i = 0;
    $(".slider_list li").eq(i).css({borderTop:"1px solid red"})


    function slide(){
        i++;
        var li = $(".slide_page")
        if(i >= li.length){
            i=0;
        }
        $(".slide_page").css({"display":"none"});
        $(".slide_page").eq(i).stop().fadeIn();
    }

    var set =  setInterval(slide,3000);


    $(".slider_list li").mouseover(function(){
        var index = $(this).index();
        $(".slide_page").css({"display":"none"});
        $(".slide_page").eq(index).stop().fadeIn();
        $(".slider_list li").css({borderTop:"none"})
        $(".slider_list li").eq(index).css({borderTop:"1px solid red"})
        
    });

    
    $(".slider_list li").mouseover(function(){
        clearInterval(set)
    });

    $(".slider_list li").mouseout(function(){
        set =  setInterval(slide,3000);
    });


})