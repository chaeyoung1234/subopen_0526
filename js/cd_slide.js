/*cd slide*/

$(function(){

    var i=0; 
    $(".cd_prev").click(function(){

        i--;

        $(".cd_content1 > ul > li:last").prependTo(".cd_content1 > ul")
        $(".cd_content1 > ul").css({marginLeft:-345}); 
        $(".cd_content1 > ul").stop().animate({marginLeft:0},600); 

    })

    $(".cd_next").click(function(){

        i++; 
        
        $(".cd_content1 > ul").stop().animate({marginLeft:-345}, function(){

            $(".cd_content1 > ul > li:first").appendTo(".cd_content1 > ul"); 
            $(".cd_content1 > ul").css({marginLeft:0});


        }) 



    })


})