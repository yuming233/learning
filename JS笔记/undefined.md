# null/undefined
> null和undefined都代表的是没有

- null:意料之中(一般都是开始不知道值，我们手动先设置为null，后期再给予赋值操作)
```
let num = null; //=>最好用null作为初始的空值，因为零不是空值，他在栈内存中有自己的存储空间(占了位置)
...
num = 12;

```

- undefined:意料之外(不是我能决定的)
```
let num; //=>创建一个变量没有赋值，默认值是undefined
...
num = 12;

```