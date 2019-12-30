window.addEventListener('load', function () {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    // 1.当我们鼠标经过preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    // 鼠标离开
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })

    // 2.鼠标移动的时候，让黄色的盒子跟着鼠标来走
    preview_img.addEventListener('mousemove', function (e) {
        // (1).先计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;

        // (2).盒子的高度300 的一就是150  活写
        // (3).我们mask 移动的距离
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        // (4) 如果x坐标小于0 就让他停在0的位置
        var maxX = preview_img.offsetWidth - mask.offsetWidth;
        var maxY = preview_img.offsetHeight - mask.offsetHeight;
        // 如果宽在最左边0的坐标就等于0 最右边就用盒子的宽减去子盒子的宽
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maxX) {
            maskX = maxX;
        }

        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maxY) {
            maskY = maxY;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
    })
})