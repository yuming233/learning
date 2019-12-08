## number数字类型
> 包含：常规数字

### NaN
> not a number:不是一个数，但它属于数字类型

NaN和任何值(包括自己)都不相等:NaN!=NaN，所以我们不能用相等的方式判断是否有效数字


### isNaN
> 检测一个值是否为非有效数字，如果不是有效数字返回TRUE，反之是有效数字返回FALSE
```
console.log(isNaN(10)); //=>FALSE
console.log(isNaN('AA')); //=>TRUE
console.log(isNaN('10')); //=>FALSE

再使用isNaN进行检测的时候，首先会验证检测的值是否为数字类型，如果不是，先基于Number()这个方法，把值转换为数字类型，然后再检测


Number('10') => 10
isNaN(10) => FALSE

```

### 把其它类型值转换为数字类型
- Number([val])
- parseInt/parseFloat([val],[进制]):也是转换为数字的方法，对于字符串来说，它是从左到右依次查找有效数字字符，直到遇到非有效数字字符，停止查找（不管后面是否还有数字，都不在找了），把找到的当做数字返回
- ==进行比较的时候，可能要出现把其它数值转换为数字


```
// 把字符串转换为数字，只要字符串中包含任意一个非有效数字字符(第一个点除外结果都是Nan，空字符串会变为数字零)
console.log(Number('12.5')); //=>12.5
console.log(Number('12.5px')); //=>NaN
console.log(Number('12.5.5')); //=>NaN
console.log(Number('')); //=>0

//布尔转换为数字
console.log(Number(true); //=>1
console.log(Number(false)); //=>0
console.log(isNaN(false)); //=>false

// null->0 undefined->NaN
console.log(Number('null')); //=>0
console.log(Number('undefined')); //=>NaN

// 把引用数据类型转换为数字，是先把他基于toString方法转换为字符串，然后在转换为数字
console.log(Number({name:'10'}); //=>NaN
console.log(Number({})); //=>NaN
console.log(Number([])); //=>0
console.log(Number(12)); //=>12
console.log(Number(12,12)); //=>NaN

let str = '12.5px'
console.log(Number(str)); //=>NaN
console.log(parseInt(str)); //=>12
console.log(parseFloat(str)); //=>12.5

```

