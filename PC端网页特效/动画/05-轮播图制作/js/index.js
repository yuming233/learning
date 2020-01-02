window.addEventListener('load', function () {
    // 1.获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');

    // 2.鼠标经过focus 就显示隐藏左右按钮
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
    });

    // 3.动态生成小圆圈  有几张图片 就生成几个小圆圈
    var ul = focus.querySelector('ul');
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
    }
})