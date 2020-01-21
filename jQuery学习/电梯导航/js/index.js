$(function () {
    var toolTop = $('.recommend').offset().top; // 拿到今日推荐模块距离文档上面的距离
    $(window).scroll(function () {
        if ($(document).scrollTop() >= toolTop) {
            $('.fixedtool').fadeIn();
        } else {
            $('.fixedtool').fadeOut();
        }
    })
})