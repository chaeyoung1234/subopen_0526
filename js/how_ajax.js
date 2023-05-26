/* 이 책 어때? */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"포토샵" },
    headers:{Authorization: "KakaoAK a652114899c9a2cf34bbc336baee1a3c"}
})
.done(function( msg ) {

    var how = $(".how_content");

    for(var i=0; i<how.length; i++){

        var document = msg.documents[i];

        $(how).eq(i).find("img").attr("src", document.thumbnail)
        $(how).eq(i).find("p").text("쉽게 배우는 그래픽 입문서")
        $(how).eq(i).find("span").text(document.title)


        // $(".how_content > div").eq(i).append("<img src='" + document.thumbnail + "'/><br>" + "<p>쉽게 배우는 그래픽 입문서</p>" + "<span>" + document.title + "</span>");

    }

});