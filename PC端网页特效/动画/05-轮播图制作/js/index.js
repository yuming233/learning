window.addEventListener('load', function () {
    // 1.获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;  // 图片宽度

    // 2.鼠标经过focus 就显示隐藏左右按钮
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;  // 清除定时器变量
    });
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            arrow_r.click();   // 手动调用右侧按钮点击事件
        }, 1000)
    });

    // 3.动态生成小圆圈  有几张图片 就生成几个小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        // 创建小li
        var li = document.createElement('li');
        // 记录当前小圆圈的索引号 通过自定义属性来做
        li.setAttribute('index', i);
        // 把小li插入到ol 里面
        ol.appendChild(li);
        // 4.小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function () {
            // 把所有小li清除 current 类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 当前的小li 设置current 类名
            this.className = 'current';
            // 5. 点击小圆圈，移动图片 当然移动的是ul
            // ul 的移动距离就是小圆圈的索引号乘以图片的宽度 注意是负值
            //当我们点击了某个小li 就拿到当前小li 的索引号
            var index = this.getAttribute('index');
            // 当我们点击了某个小li就要把这个li的索引号给num
            num = index;
            // 当我们点击了某个小li就要把这个li的索引号给circle
            circle = index;

            animate(ul, -index * focusWidth);
        })
    }
    // 把ol里面的第一个小li设置类名为current
    ol.children[0].className = 'current';

    // 6.克隆第一张图片(li)放到ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    // 7.点击右侧按钮，图片滚动一张
    var num = 0;
    // circle 控制小圆圈的播放
    var circle = 0;


    // 右侧按钮做法
    // flag 节流阀
    var flag = true;
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false;  // 关闭节流阀
            // 如果走到了最后复制的一张图片，此时 我们的ul 要快速复原 left 改为0
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });

            // 8.点击右侧按钮，小圆圈跟随一起变化，可以声明一个变量控制小圆圈的播放
            circle++;
            // 如果circle == 4 说明走到最后克隆的这张图片了 我们就复原
            // if (circle == ol.children.length) {
            //     circle = 0;
            // }
            circle = circle == ol.children.length ? 0 : circle; // 三元表达式

            // 调用函数
            circleChange();
        }
    });



    // 9.左侧按钮做法
    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = num * focusWidth + 'px';

            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });

            // 8.点击左侧按钮，小圆圈跟随一起变化，可以声明一个变量控制小圆圈的播放
            circle--;
            // 如果circle < 0 说明第一张图片  则小圆圈要改为第四个小圆圈
            // if (circle < 0) {
            //     circle = ol.children.length - 1;
            // }
            circle = circle < 0 ? ol.children.length - 1 : circle;  // 三元表达式
            // 调用函数
            circleChange();
        }

    });


    // 创建个函数调用简洁代码
    function circleChange() {
        // 先清除其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前的小圆圈的current类名
        ol.children[circle].className = 'current';
    }


    // 10.自动播放轮播图
    var timer = setInterval(function () {
        arrow_r.click();   // 手动调用右侧按钮点击事件
    }, 1000)
})