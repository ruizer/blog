# JavaScript相关知识点集锦(三)：类型转换

首先，类型转换是我们经常遇到的知识点，一般在 JS 类型转换当中只有三种情况：

> 这是我很久以前写的文章，如果有什么不对的地方请指出，原文：https://ruizer.github.io/2019/07/15/javascript-basis-javascript-basis-类型转换/

- 转换成布尔值
- 转换成数字
- 转换成字符串

所有的转换规则都在以下表格：
<!--more-->

原始值 | 转换目标 | 结果
--- | --- | ---
number                 |  布尔值   | 除了0、-0、NaN都为true
string                 |  布尔值   | 除了空字符串('')都为true
undefined、null        |  布尔值   | false
引用类型                |  布尔值   | true
number                 |  字符串   | 8 => '8'
Boolean、函数、Symbol   |  字符串   | true => 'true'
数组                   |  字符串   | [1, 2] => '1, 2'
对象                   |  字符串   | {} => '[object Object]'
string                 |  数字     | '8' => 8，'a' => NaN
数组                   |  数字     | 空数组为0，存在一个元素且为数字转成数字，其它情况NaN
null                   |  数字    | 0
除了数组的引用类型      |  数字     | NaN
Symbol                 |  数字    | 抛错

## 转Boolean
在条件判断时，除了`0`， `-0`， `NaN`，`undefined`，`null`，`false`，`''`，
其它所以值都为true，包括对象。

## 对象转原始类型
对象在转类型的时候，会调用内置的 `Symbol.toPrimitive` 函数，大概的逻辑是这样的：

如果已经是原始类型了，那就不需要转换了

调用 `x.valueOf()`，如果转换为基础类型，就返回转换的值

调用 `x.toString()`，如果转换为基础类型，就返回转换的值

如果都没有返回原始类型，就会报错

当然，你也可以重写 `Symbol.toPrimitive`，该方法在转原型类型时优先级最高
```
let obj = {
    valueOf() {
        return 1
    },
    toString() {
        return '2'
    },
    [Symbol.toPrimitive]() {
        return 3
    }
}

console.log(1 + obj) // 4
```

## 四则运算符

首先，先来说下加法运算符，会有两个特点：
- 其中一方是字符串，那么就会把另一方也转为字符串

- 如果一方不是字符串或者数字，那么会将它转成字符串或者数字

然后就是非加法运算符，只要其中一方是数字，那么另一方就会被转为数字

## 比较运算符

1. 如果是对象，就通过 `Symbol.toPrimitive` 转换对象
2. 如果是字符串，就通过 `unicode` 字符索引来比较

## == vs ===
对于 `==` 来说，如果对比双方的类型不一样的话，就会进行类型转换，而 `===` 不会

假如我们需要对比 `x` 和 `y` 的值是否相等，就会进行如下流程：

1. 首先判断两者类型是否相等，是的话比较大小
2. 类型不相同的就会进行类型转换
3. 会先判断是否在对比 `undefined` 和 `null`，是的话就会返回 `true`
4. 判断两者类型是否为 `string` 和 `number`，是的话就会将字符串转换成 `number`
5. 判断其中一方是否为 `boolean`，是的话就把 `boolean` 转成 `number` 再进行判断
6. 判断其中一方是否为 `object` 且另一方为 `string`、`number` 或者 `symbol`，是的话就会把 `object` 转为原始类型再进行判断 


本文完， 感谢阅读。