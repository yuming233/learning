# JS做客户端语言
> 按照相关的JS语法，去操作页面中的元素，有时还要操作浏览器里面的一些功能
- ECMAScript3/5/6...:JS的语法规范(变量、数据类型、操作语句等等)
- DOM (document object model):文档对象模型，提供一些JS的属性和方法，用来操作页面中的DOM元素
- BOM (browser object model):浏览器对象模型提供一些JS的属性和方法，用来操作浏览器的


# JS中的变量 variable
> 变量：可变的量，存储和代表不同值的东西

```
    //ES3
    var a = 12;
    console.log(a); //=>输出的是a代表的值是12

    //ES6
    let b = 100;
    b = 200;

    const c = 1000
    c = 2000； //=>报错: CONST创建的变量，存储的值不能被修改(可以理解为叫做常量)

    //创建函数也相当于在创建变量
    function fn(){}
    //创建类也相当于创建变量
    class A{}
    //ES6的模块导入也可以创建变量
    import B from './B.js'

    //Symbol创建唯一值(基本不用)
    Symbol C= (100);

```


# JS中的命名规范
- 严格区分大小写
```
    let Test = 100;
    console.log(test); //=>无法输出，因为第一个字母小写了    
```
- 使用数字、字母、下划线、$，数字不能违开头
```
    let $box; //=>一般用JQ获取的以$开头
    let _box; //=>一般公共变量都是_开头
    let 1box; //=>不可以，但是可以写box1

```

- 使用驼峰命名法：首字母小写，其余每一个有意义单词的首字母都要大写(命名尽可能语义化明显，用英语单词命名)
```
    let studentInformation;
    let studentInfo;
    
    //常用的缩写:add/insert/create/new(新增)、update(修改)、delete/del/remove/rm(删除)、sel/select/query/get(查询)、info(信息)...

    //不正确的写法
    let xueshengInfo;
    let xueshengxinxi;
    let xsxx;

```
- 不能使用关键字和保留字
```
    当下有特殊含义的是关键字，未来可能会成为关键字的叫做保留字(?)
    var let const function ... 

    var var = 10; //=>不行

```

# JS的数据类型分为两大类
- 基本数据类型
    + 数字number  常规数字和NAN
    + 字符串string 所有带双引号/单引号 'hello' "hello"
    + 布尔值boolean true/false
        - 特殊数据类型
            1. 空对象指针null
            2. 未定义undefined
- 引用数据类型
    + 对象数据类型object
        + {} 普通对象
        + [] 数组对象
        + /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/ 正则对象
        + Math 数学函数对象
        + 日期对象
        + ...
    + 函数数据类型 function


```
    console.log([val]):在控制台输出内容
    console.log('hello world');

    

```