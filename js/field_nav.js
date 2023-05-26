/*field fadeIn*/

$(function(){

    $(".field_box:not(:first)").css("display", "none");

    $("#field_nav li:first").css({borderBottom : "1px solid red"})
    $("#field_nav li:first").css({color : "red"})

    $("#field_nav li").mouseover(function(){

        var index = $(this).index(); 

        $(".field_box").stop().fadeOut("fast"); 
        $(".field_box").eq(index).stop().fadeIn("slow"); 
        $("#field_nav li").css({borderBottom : "none"})
        $("#field_nav li").css({color: "black"})
        $("#field_nav li").eq(index).css({borderBottom : "1px solid red"})
        $("#field_nav li").eq(index).css({color: "red"})


    });
});