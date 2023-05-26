/*인터파크 추천*/

$(function(){

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"자바스크립트" },
        headers:{Authorization: "KakaoAK a652114899c9a2cf34bbc336baee1a3c"}
    })
        .done(function( msg ) {
            for(var i=0; i< msg.documents.length;  i++){

                var document = msg.documents[i];
                
                $(".inter_imgbox").eq(i).find("img").attr("src", document.thumbnail);
                
                $(".inter_content").eq(i).find("p").eq(0).text(document.title); 
                
                var content = document.contents.substring(0,60);
                $(".content").eq(i).find("p").text(content)


            }


        });

});