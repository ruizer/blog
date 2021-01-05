# JavaScript相关知识点集锦(二)：typeof 与 instanceof

> 本章主要分为两部分：typeof 是否能正确的判断类型、instanceof 能正确判断类型的原理

## typeof 能否正确判断类型

当然，`typeof` 对于原始类型来说，除了`null`都能准备判断类型
<!--more-->
```
typeof 123 // 'number'
typeof '123' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // symbol
```
`typeof` 对于对象来说，除了函数都会输出`object`，所以`typeof` 并不能准确判断变量类型
```
typeof {} // 'object'
typeof [] // 'object'
typeof console.log // 'function'
```
那当我们需要准确判断对象类型时，就可以使用`instanceof`，因为其内部机制是通过原型来判断的
```
function Person() {}
const p = new Person()
p instanceof Person // true

const str = 'hello world'
str instanceof String // false

const str1 = new String('hello world')
str1 instanceof String // true
```
我们可以看到，对于原始类型`instanceof` 并不能准确判断其类型，但是我们利用`Symbol.hasInstance`来实现
```
class PrimitiveString {
    static [Symbol.hasInstance](instance) {
        return typeof instance === 'string'
    }
}
console.log('hello world' instanceof PrimitiveString) // true
```
[Symbol.hasInstance][SymbolHasInstance] 可以让我们自定义 `instanceof` 操作符在某个类上的行为，
所以 `'hello world' instanceof PrimitiveString` 就相当于 `typeof 'hello world' === 'string'`

## instanceof 的原理是什么？
上面提到过 `instanceof` 能够准确判断对象类型，因为其内部机制是通过判断对象的原型链中能不能找到类型的 `prototype`，
下面是简单的实现：
```
function myInstanceof(left, right) {
    let prototype = right.prototype
    left = left.__proto__
    while(true) {
        if (left === null || left === undefined) {
            return false
        }
        if (prototype === left) {
            return true
        }
        left = left.__proto__
    }
}
```
大体实现思路：
- 首先获取类型的原型
- 然后获取对象的原型
- 然后一直循环判断类型的原型是否等于对象的原型，直到对象的原型为`null`

本文完， 感谢阅读。

[SymbolHasInstance]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
