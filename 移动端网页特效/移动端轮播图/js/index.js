window.addEventListener('load', function () {
    // 1. 获取元素
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    // 获取focus的宽度
    var w = focus.offsetWidth;
    // 2.利用定时器自动轮播图图片
    var index = 0;
    var timer = this.setInterval(function () {
        index++;
        var translatex = -index * w;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translatex(' + translatex + 'px)';
    }, 2000);

})