# boolean布尔数据类型
> 只有两个值 true/false

### 把其他类型值转换为布尔类型
> 只有 0、NaN、""、null、undefined 五个值转换为FALSE，其余都转化哪位TRUE(而且没有任何的特殊情况)

- Boolean([val])
- !/!!
- 条件判断

```
// !:取反(先转为布尔，然后取反)
// !!:取反再取反，只相当于转换为布尔 <=> Boolean
console.log(!1); //=>false
console.log(!!1); //=>ture

// 如果调价只是一个值，不是==/===/!=/>= 等这些比较，是要把这个值先转换为布尔类型，然后验证真假
if(1){
    console.log("哈哈");
}
if('3px' + 3){
    console.log("嘿嘿");  //=>'3px3'=>true
}
if('3px' - 3){
    console.log("嘻嘻");  //=>NaN-3=>NaN=>false
}

```
