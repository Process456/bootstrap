$(function(){
    $(".flexslider").flexslider();
    $('.box').hover(function(){
        $(this).find(".iconfont").addClass('animated fadeInUp');
        $(this).find("p").addClass('animated fadeInUp');

    },
    function(){
        $(this).find(".iconfont").removeClass('animated fadeInDown');
        $(this).find("p").removeClass('animated fadeInDown');
    }
    )

})