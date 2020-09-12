$(document).ready(function(){
    //loading
    $(".preload").delay(1000).fadeOut("slow");
    //function previous button
    function slider(){
        var one=(parseInt($("#slide-1").css("left"))-1130).toString()+"px";
        var two=(parseInt($("#slide-2").css("left"))-1130).toString()+"px";
        var three=(parseInt($("#slide-3").css("left"))-1130).toString()+"px";
        $(".test>div:first-child").animate({
            "left" : "-=1130px"
        },500)
        $(".test>div:nth-child(2)").animate({
            "left" : "-=1130px"
        },500)
        $(".test>div:nth-child(3)").animate({
            "left" : "-=1130px" 
        },500)
        $(".test>div:last-child").animate({
            "left" : "-=1130px"
        },500)
        if (one=="-2260px")
        {
            $(".test>div:first-child").animate({
                "left" : "2260px"
            },0)
        }
        else if (two=="-2260px")
        {
            $(".test>div:nth-child(2)").animate({
                "left" : "2260px"
            },0)
        }
        else if (three=="-2260px")
        {
            $(".test>div:nth-child(3)").animate({
                "left" : "2260px"
            },0)
        }
        else
        {
            $(".test>div:last-child").animate({
                "left" : "2260px"
            },0)
        }
    }
    //slide auto
    var auto=setInterval(function(){
        slider();
    },4000)
    //button previous
    $(".prev").click(function(){
        clearInterval(auto);
        slider();
    })
    //button next
    $(".next").click(function(){
        clearInterval(auto);
        var one=(parseInt($("#slide-1").css("left"))+1130).toString()+"px";
        var two=(parseInt($("#slide-2").css("left"))+1130).toString()+"px";
        var three=(parseInt($("#slide-3").css("left"))+1130).toString()+"px";
        var four=(parseInt($("#slide-4").css("left"))+1130).toString()+"px";
        $(".test>div:first-child").animate({
            "left" : `${one}`
        },500)
        $(".test>div:nth-child(2)").animate({
            "left" : `${two}`
        },500)
        $(".test>div:nth-child(3)").animate({
            "left" : `${three}`
        },500)
        $(".test>div:last-child").animate({
            "left" : `${four}`
        },500)
        if (one=="3390px")
        {
            $(".test>div:first-child").animate({
                "left" : "-1130px"
            },0)
        }
        else if (two=="3390px")
        {
            $(".test>div:nth-child(2)").animate({
                "left" : "-1130px"
            },0)
        }
        else if (three=="3390px")
        {
            $(".test>div:nth-child(3)").animate({
                "left" : "-1130px"
            },0)
        }
        else
        {
            $(".test>div:last-child").animate({
                "left" : "-1130px"
            },0)
        }
    })
    //button back to top
    $(window).scroll(function(){
        if ($(this).scrollTop()>80){
            $("#gototop").fadeIn(500);
        }
        else{
            $("#gototop").fadeOut(500);
        }
    })
    $("#gototop").click(function(){
        $('html').animate({scrollTop: 0},700);
    })
})