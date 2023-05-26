/*field_ajax*/

/*문화*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"소설" },
    headers:{Authorization: "KakaoAK a652114899c9a2cf34bbc336baee1a3c"}
})
.done(function( msg ) {

    for(var i=0; i< $(".field_content").length; i++){

        $(".field_content").eq(0).children("li").eq(i).find("img").attr("src", msg.documents[i].thumbnail)
        $(".field_content").eq(0).find("h4").eq(i).text( msg.documents[i].title)
        $(".field_content").eq(0).find("span").eq(i).text( msg.documents[i].sale_price+"원")

    }
});


/*인문/교양*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"지식" },
    headers:{Authorization: "KakaoAK a652114899c9a2cf34bbc336baee1a3c"}
})
.done(function( msg ) {

    for(var i=0; i< $(".field_content").length; i++){

        $(".field_content").eq(1).children("li").eq(i).find("img").attr("src", msg.documents[i].thumbnail)
        $(".field_content").eq(1).find("h4").eq(i).text( msg.documents[i].title)
        $(".field_content").eq(1).find("span").eq(i).text( msg.documents[i].sale_price+"원")

    }
});

/*경제/실용*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"경제" },
    headers:{Authorization: "KakaoAK a652114899c9a2cf34bbc336baee1a3c"}
})
.done(function( msg ) {

    for(var i=0; i< $(".field_content").length; i++){

        $(".field_content").eq(2).children("li").eq(i).find("img").attr("src", msg.documents[i].thumbnail)
        $(".field_content").eq(2).find("h4").eq(i).text( msg.documents[i].title)
        $(".field_content").eq(2).find("span").eq(i).text( msg.documents[i].sale_price+"원")

    }
});


/*유아/아동*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"만화" },
    headers:{Authorization: "KakaoAK a652114899c9a2cf34bbc336baee1a3c"}
})
.done(function( msg ) {

    for(var i=0; i< $(".field_content").length; i++){

        $(".field_content").eq(3).children("li").eq(i).find("img").attr("src", msg.documents[i].thumbnail)
        $(".field_content").eq(3).find("h4").eq(i).text( msg.documents[i].title)
        $(".field_content").eq(3).find("span").eq(i).text( msg.documents[i].sale_price+"원")

    }
});

/*학습/어학*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"어학" },
    headers:{Authorization: "KakaoAK a652114899c9a2cf34bbc336baee1a3c"}
})
.done(function( msg ) {

    for(var i=0; i< $(".field_content").length; i++){

        $(".field_content").eq(4).children("li").eq(i).find("img").attr("src", msg.documents[i].thumbnail)
        $(".field_content").eq(4).find("h4").eq(i).text( msg.documents[i].title)
        $(".field_content").eq(4).find("span").eq(i).text( msg.documents[i].sale_price+"원")

    }
});


/*외국도서*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"해외" },
    headers:{Authorization: "KakaoAK a652114899c9a2cf34bbc336baee1a3c"}
})
.done(function( msg ) {

    for(var i=0; i< $(".field_content").length; i++){

        $(".field_content").eq(5).children("li").eq(i).find("img").attr("src", msg.documents[i].thumbnail)
        $(".field_content").eq(5).find("h4").eq(i).text( msg.documents[i].title)
        $(".field_content").eq(5).find("span").eq(i).text( msg.documents[i].sale_price+"원")

    }
});