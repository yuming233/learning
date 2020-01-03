function animate(obj, target, callback) {
    // console.log(callback); callback = function(){} 调用的时候 callback()

    // 清除以前的定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 步长值写到定时器里面
        // 把我们步长值改为整数 不要出现小数的问题 正值往大取整 负值往小取整
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        // 如果 正值往大取整 负值往小取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        if (obj.offsetLeft == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);

            //  回调函数写到定时器结束里面
            callback && callback();
        }

        // 把每次加1 这个步长值改为一个慢慢变小的值 步长公式：(目标值 - 现在的位置) / 10
        obj.style.left = obj.offsetLeft + step + 'px';

    }, 15);
}