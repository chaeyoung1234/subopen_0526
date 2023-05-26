/*special ajax*/

$(function(){

    $.ajax({

        url : "./json/special.json",
        dataType: "json",
        success : function(data){

            if(data.length > 0){

                for(var i in data){

                    $(".special_imgbox").eq(i).find("img").attr("src", "img/" +data[i].url)
                    $(".special_textbox").eq(i).find("h3").text(data[i].title)
                    $(".special_textbox > p").eq(i).find("a").text(data[i].subtitle)
                    $(".special_textbox > span").eq(i).find("del").text(data[i].net_price)
                    $(".special_textbox > span").eq(i).find("h5").text(data[i].price)

                }
            }
        }
    })
})