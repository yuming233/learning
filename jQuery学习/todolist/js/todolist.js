$(function () {
    // 1.按下回车 把完整数据 存储到本地存储里面
    // 存储的数据格式  var todolist = [{ title: 'xxx', done: false }]
    load(); // 预加载一次
    $('#title').on('keydown', function (e) {
        if (e.keyCode === 13) {
            // 先读取本地存储原来的数据
            var local = getDate();
            // 把local数组进行更新数据 把最新的数据追加给local数组
            local.push({ title: $(this).val(), done: false });
            // 把这个数据local存储给本地存储
            saveDate(local);

            // 2.toDolist 本地存储数据渲染加载到页面
            load();
        }
    });

    // 3.toDolist 删除操作
    $('ol').on('click', 'a', function () {
        // 先获取本地存储
        var data = getDate();
        // 修改数据
        var index = $(this).attr('id');
        data.splice(index, 1);  // 从第几个开始删 删几个
        // 保存到本地存储
        saveDate(data);
        // 重新渲染页面
        load();
    });



    // 读取本地存储的数据  用的较多 封装函数
    function getDate() {
        var data = localStorage.getItem('todolist');
        if (data !== null) {
            // 本地存储里面的数据是字符串格式的 但我们需要的是对象格式
            return JSON.parse(data);  // 转换为对象
        } else {
            return [];
        }
    }

    // 保存本地存储数据
    function saveDate(data) {
        localStorage.setItem('todolist', JSON.stringify(data));
    }

    // 渲染加载数据
    function load() {
        var data = getDate();
        // 遍历之前要先清空ol里面的元素内容
        $('ol').empty();
        // 遍历这个数据
        $.each(data, function (i, n) {
            $('ol').prepend("<li><input type='checkbox' ><p>" + n.title + "</p><a href='javascript:;' id=" + i + "></a></a></li>")
        })
    }
})