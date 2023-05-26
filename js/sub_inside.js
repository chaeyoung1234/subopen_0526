$(function(){

    $(".inside_ul li").eq(0).css({"backgroundColor" : "#ff4040"})

    $(".inside_ul li").mouseover(function(){
        var index = $(this).index(); 
        $(".inside_fade").hide(); 
        $(".inside_fade").eq(index).show(); 
        $(".inside_ul li").css({"backgroundColor" : "#555"})
        $(".inside_ul li").eq(index).css({"backgroundColor" : "#ff4040"})

    })
})