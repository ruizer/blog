# JavaScript相关知识点集锦(四)：this 、箭头函数、以及apply、call与bind

> 本文分为两部分：
> - 正确判断 `this`
> - 手写 `apply`、`call`、`bind`

## 正确判断 `this`

`this` 是个容易让人混淆的概念，但只要我们理清了思路就会很容易理解。

对于单个规则来说，我们可以按照下面的流程来进行判断：
<!--more-->

- 首先，判断函数类型
    - 若是箭头函数，`this` 就是包裹箭头函数的第一个普通函数的 `this`
    - 若是`apply`、`call`、`bind`，`this` 是第一个参数
    - 普通函数的话，要判断函数是如何被调用的
        - `new` 的方式，`this` 被固化在实例上面
        - 除了 `new` 方式以外，判断函数是直接调用（ `foo()` ）还是通过对象调用 （ `obj.foo()` ）
            - `foo()` 方式，`this` 为 `window`
            - `obj.foo()` 方式，`this` 为 `obj`

![image](../../images/old/javascriptBasis/4/this.webp)

通过这个流程，我们可以准确判断 `this`。当然，如果我们向改变 `this`，就可以采用以下方式：
1. 使用箭头函数
2. 使用 `apply`、`call`、`bind` 方法
3. 当然，构造函数也可以改变 `this`，通过对象调用也行

## 手写 `apply`、`call`、`bind`

关于 `apply`、`call`、`bind`，都可以改变 `this` 的指向，但稍稍有些不同。

1. `apply` 和 `call` 的区别
    其实 `apply` 和 `call` 基本类似，他们的区别主要是传参不同
    >`call` 的语法：
    > fun.call(thisArg[, arg1[, arg2[, ...]]])
    >`apply` 的语法：
    > fun.apply(thisArg, [argsArray])
    >所以 `apply` 和 `call` 的区别是 `call` 方法接受的是若干个参数列表，而 `apply` 接收的是一个包含多个参数的数组。
2. `bind` 和 `apply`、`call` 区别
    > bind()方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。
    >从这句话，我们可以看出，`bind` 是创建一个新的函数，需要我们手动去执行。
    >这是 `bind` 与 `apply` 、`call` 的主要区别。
3. 手写 `apply`、`call`、`bind`
```
    Function.prototype.myCall = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    const args = [...arguments].slice(1)
    const result = context.fn(...args)
    delete context.fn
    return result
}

Function.prototype.myApply = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    let result
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    return result
}

Function.prototype.myBind = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    const _this = this
    const args = [...arguments].slice(1)

    return function F() {
        if (this instanceof F) {
            return new _this(...args, ...arguments)
        }
        return _this.apply(context, args.concat(...arguments))
    }
}

var obj = {
    name: '这是'
}

function printName (fname, lname) {
    console.log(this)
    console.log(`${this.name} ${fname}${lname}`)
}

printName('liao', 'rui')
printName.myCall(obj, 'liao', 'rui')
printName.myApply(obj, ['liao', 'rui'])
printName.myBind(obj, 'liao', 'rui')()

```

本文完， 感谢阅读。