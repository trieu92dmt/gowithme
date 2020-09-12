$(document).ready(function(){
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
