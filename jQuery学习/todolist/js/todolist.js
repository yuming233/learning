$(function () {
    // 1.按下回车 把完整数据 存储到本地存储里面
    // 存储的数据格式  var todolist = [{ title: 'xxx', done: false }]
    $('#title').on('keydown', function (e) {
        if (e.keyCode === 13) {
            // 先读取本地存储原来的数据
            var local = getData();

        }
    });





    // 读取本地存储的数据  用的较多 封装一个函数
    function getData() {
        var data = localStorage.getItem('todolist');
        if (data !== null) {
            // 本地存储里面的数据是字符串格式的 但我们需要的是对象格式
            return JSON.parse(data);  // 转换为对象
        } else {
            return [];
        }
    }
})