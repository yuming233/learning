# String字符串数据类型
> 所有用单引号、双引号、反引号(撇 ES6模板字符串)包起来的都是字符串

### 把其他类型值转换为字符串
- [val].toString()
- 字符串拼接

```
let a = 12;
console.log(a.toString);  //=>'12'
console.log((NaN).toString()); //=>'NaN'

// null和undefined是禁止直接toSting的
// (null).toString() //=>报错
// 但是和undefined一样转换为字符串的结果就是'null'/'undefined'

// 普通对象.toString()的结果是"[object Object]" =>?=>Object.prototype.toString方法不是转换为字符串的，而是用来检测数据类型的


// ===================字符串拼接
// 四则运算法则中，除加法之外，其余都是数学计算，只有加法可能存在字符串拼接(一旦遇到字符串，则不是数学运算，而是字符串拼接)
console.log('10'+10); //=>'1010'
console.log('10'-10); //=>0
console.log('10px'-10);  //=>NaN


let a = 10 + null + true + [] + undefined + '水水' + null + [] + 10 + false;
console.log(a);
    解释
// 10 + null -> 10 + 0  => 10
// 10 + true -> 10 + 1  => 11
// 11 + [] -> 11 + ''  => '11'   空字符串变为数字，先要经历变为空字符串，遇到字符串，直接变为字符串拼接，然后一路往下拼接
// '11' + undefined -> '11undefined'
...
// 最终结果：'11undefined水水null10false'
// + NaN会变成NaN

```