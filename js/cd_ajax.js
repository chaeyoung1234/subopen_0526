/*cd ajax*/ 

$(function(){

    $.ajax({

        url: "./json/cd.json",
        dataType : "json", 
        success : function(data){

            if(data.length > 0) {

                for(var i in data){

                    $(".cd_imgbox1").eq(i).find("img").eq(0).attr("src","img/" + data[i].url); 
                    $(".cd_textbox1").eq(i).find("p").eq(0).text(data[i].title); 
                    $(".cd_box > .cd_no_sale").eq(i).find("del").text(data[i].price); 
                    $(".cd_textbox1").eq(i).find(".cd_sale").text(data[i].saleprice);
                    $(".cd_textbox1").eq(i).find(".cd_point").text(data[i].point);

                    $(".cd_imgbox2").eq(i).find("img").eq(0).attr("src", "img/" + data[i].bottomurl);
                    $(".cd_textbox2 p").eq(i).find("a").text(data[i].bottom_title);
                }


            }


        }




    })







})