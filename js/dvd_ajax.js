/*DVD ajax*/

$(function() {

    $.ajax({

        url: "./json/dvd.json",

        dataType: "json",

        success: function (data) {

            if (data.length > 0) {


                for (var i in data) {

                    $(".dvd_imgbox1").eq(i).find("img").attr("src", "img/" + data[i].url);
                    $(".cd_imgbox3").eq(i).find("img").attr("src", "img/" + data[i].bottomurl);
                    $(".dvd_textbox1").eq(i).find("p").text(data[i].title);
                    $(".dvd_box").eq(i).find("del").text(data[i].net_price);
                    $(".dvd_box").eq(i).find(".dvd_sale").text(data[i].price);
                    $(".dvd_box").eq(i).find(".dvd_point").text(data[i].point);

                    $(".cd_textbox3 p").eq(i).find("a").text(data[i].bottom_title);
                }

            }

        }

    });

});