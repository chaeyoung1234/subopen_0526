/*세일 ajax*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"카카오프렌즈" },
    headers:{Authorization: "KakaoAK a652114899c9a2cf34bbc336baee1a3c"}
})
.done(function(msg){

    var saleimg = $(".sale_imgbox1");

    for(var i=0; i<saleimg.length; i++){
        $(saleimg).eq(i).find("img").eq(0).attr("src",msg.documents[i].thumbnail)
    }

    var textimg = $(".sale_textbox1");

    for(var i=0; i<textimg.length; i++){
        $(textimg).eq(i).find("h4").text(msg.documents[i].title)
        $(textimg).eq(i).find("p").text(msg.documents[i].price+"원")
    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"콩순이" },
    headers:{Authorization: "KakaoAK a652114899c9a2cf34bbc336baee1a3c"}
})
.done(function(msg){

    var saleimg = $(".sale_imgbox2");

    for(var i=0; i<saleimg.length; i++){
        $(saleimg).eq(i).find("img").eq(0).attr("src",msg.documents[i].thumbnail)
    }

    var textimg = $(".sale_textbox2");

    for(var i=0; i<textimg.length; i++){
        $(textimg).eq(i).find("h4").text(msg.documents[i].title)
        $(textimg).eq(i).find("p").text(msg.documents[i].price+"원")
    }
});
