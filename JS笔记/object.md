# object对象数据类型
### 普通对象
> {[key]:[value],...} 任何一个对象都是有零到多组键值对(属性名:属性值)组成的(并且属性名不能重复)

```
let mike = {
    name: '谁谁谁',
    age: '20',
    height: '180CM',
    weight: '80kG',
    1: 100
};
// 删除属性名
// =>真删除:把属性彻底干掉
delete mike[age]; 
// =>假删除:属性还在，值为空
mike.name = null;
console.log(mike);

// 设置属性名属性值(增加 )
// 属性名不能重复，同样的属性属于修改
mike.y = '啥啥啥';
console.log(mike['y']);

// 获取属性名对应的属性值
// =>对象.属性名
// =>对像[属性名] 属性名是数字或者字符串格式的
// =>如果当前属性名不存在，默认的属性值是undefined
// =>如果属性名是数字，则不能使用点的方式获取属性值
console.log(mike.name);
console.log(mike['age']);
console.log(mike.sex); //=>undefined
console.log(mike[1]);
console.log(mike.1); //=>SyntaxError:语法错误
```

### 数组是特殊的对象数据类型
```
// 数组是特殊的对象
    1. 我们中括号中设置的属性值，它的属性名是默认生成的数字，从零开始递增，而且这个数字代表每一项的位置，我们把其称为‘索引’ =>从零开始，连续递增，代表每一项位置的数字属性名
    2. 天上默认一个属性名 length ，存储数组的长度

let ary = [122,'学习',true,13];
console.log(ary);
console.log(ary.length);
// 第一项索引是0  最后一项索引是 ary.length-1
console.log(ary[0]);
console.log(ary.length-1);

// 向数组末尾追加内容
ary[ary.length] = 100;
console.log(ary);
```