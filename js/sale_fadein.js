/*세일 fadeIn*/
$(function(){


    $(".sale_1").mouseover(function(){
        $(".sale_on").stop().fadeOut("fast");
        $(".sale_on").eq(0).stop().fadeIn("slow");
        $(".sale_2").css({"border":"none", "border-bottom":"1px solid #000"})
        $(".sale_1").css({"border":"1px solid #000", "border-bottom":"none"})
    });

    $(".sale_2").mouseover(function(){
        $(".sale_on").stop().fadeOut("fast");
        $(".sale_on").eq(1).stop().fadeIn("slow");
        $(".sale_1").css({"border":"none", "border-bottom":"1px solid #000"})
        $(".sale_2").css({"border":"1px solid #000","border-bottom":"none"})
        $(".sale_2").css({"background-color":"#fff"})
    });
});