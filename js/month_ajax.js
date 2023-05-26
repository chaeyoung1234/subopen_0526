/*이달의 책 ajax*/

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data:{ query:"소설" },
    headers:{Authorization: "KakaoAK a652114899c9a2cf34bbc336baee1a3c"}
})
.done(function(msg){

    var month= $(".month_img_box"); 
    var monthtitle = $(".month_title"); 

    for(var i=0; i < month.length; i++){
        $(month).eq(i).find("img").attr("src", msg.documents[i].thumbnail)
        $(month).eq(i).find("p").text(msg.documents[i].title)

    }

    for(var i=0; i<monthtitle.length; i++){
        $(monthtitle).eq(i).text(msg.documents[i].title)
        $(".month_price").eq(i).text(msg.documents[i].price)
    }

}); 