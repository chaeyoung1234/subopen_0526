/*이달의 책 슬라이드*/

$(function(){

    $(".month_prev_span").click(function(){
        $("#month_ul li:last").prependTo("#month_ul"); 
        $("#month_ul").css({marginLeft:-375}); 
        $("#month_ul").stop().animate({marginLeft:0})

    })

    $(".month_next_span").click(function(){

        $("#month_ul").stop().animate({marginLeft:"-375px"}, function(){

            $("#month_ul li:first").appendTo("#month_ul"); 
            $("#month_ul").css({marginLeft:0}); 
        })
    })

    function slide(){
        $("#month_ul").stop().animate({marginLeft:"-375px"}, function(){

            $("#month_ul li:first").appendTo("#month_ul"); 
            $("#month_ul").css({marginLeft:0})
        })
    }

    setInterval(slide,5000)






})