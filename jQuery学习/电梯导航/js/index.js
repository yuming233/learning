$(function () {
    // 1.显示隐藏电梯导航栏
    var toolTop = $('.recommend').offset().top; // 拿到今日推荐模块距离文档上面的距离
    toggleTool();       // 先调用
    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $('.fixedtool').fadeIn();
        } else {
            $('.fixedtool').fadeOut();
        }
    }
    $(window).scroll(function () {
        toggleTool()
    });


    // 2.点击电梯导航页面可以滚动到相应内容区域
    $('.fixedtool li').click(function () {
        // 当我们每次点击小li  就需要计算出页面要去往的位置
        // 选出对应索引号的内容区的盒子  计算它的.offset().top
        var current = $('.floor .w').eq($(this).index()).offset().top;
        // 页面动画滚动效果
        $('body,html').stop().animate({
            scrollTop: current
        });
        // 点击之后，让当前的小li 添加current类名，其他移除current类名
        $(this).addClass('current').siblings().removeClass();
    });


})