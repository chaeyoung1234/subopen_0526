/*dvd slide*/

$(function(){

    var i=0; 
    $(".dvd_prev").click(function(){

        i--;

        $(".dvd_content1 > ul > li:last").prependTo(".dvd_content1 > ul")
        $(".dvd_content1 > ul").css({marginLeft:-320}); 
        $(".dvd_content1 > ul").stop().animate({marginLeft:0},600); 

    })

    $(".dvd_next").click(function(){

        i++; 
        
        $(".dvd_content1 > ul").stop().animate({marginLeft:-320}, function(){

            $(".dvd_content1 > ul > li:first").appendTo(".dvd_content1 > ul"); 
            $(".dvd_content1 > ul").css({marginLeft:0});


        }) 



    })


})