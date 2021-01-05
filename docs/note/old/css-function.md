# CSS 函数表达式用处大大的
>这是我很久以前写的文章，如果有什么不对的地方请指出，原文：https://ruizer.github.io/2019/06/03/css-function/

> CSS函数作用大大的，特别经常使用的calc()函数~~~

函数 | 	描述 
---|---
[attr()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/attr) | 返回选择元素的属性值。
[calc() ](https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc)| 	允许计算 CSS 的属性值，比如动态计算长度值。
[linear-gradient()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient) | 创建一个线性渐变的图像
[radial-gradient()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/radial-gradient) | 用径向渐变创建图像。
[repeating-linear-gradient()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/repeating-linear-gradient) | 用重复的线性渐变创建图像。

> CSS attr() 函数
<!-- more -->

```
attr(attribute-name) | 属性名


a:after {
    content: " (" attr(href) ")";
}
```

地址：https://codesandbox.io/s/b3pn9

> CSS calc() 函数


```
calc(expression) | 一个数学表达式，结果将采用运算后的返回值

#div1 {
    position: absolute;
    left: 50px;
    width: calc(100% - 100px);
    border: 1px solid black;
    background-color: yellow;
    padding: 5px;
    text-align: center;
}
```
地址：https://codesandbox.io/s/xpcpj

>CSS linear-gradient() 函数


```
以下实例演示了从头部开始的线性渐变，从红色开始，转为黄色，再到蓝色:

#grad {
    background: linear-gradient(red,yellow,blue);
}
```
地址：https://codesandbox.io/s/hqh6v

>CSS radial-gradient() 函数

```
以下实例演示了径向渐变 - 颜色结点均匀分布:
#grad {
  background: radial-gradient(red, green, blue);
}
```
地址：https://codesandbox.io/s/qlibn

>CSS repeating-linear-gradient() 函数

```
重复的线性渐变:
#grad {
  background: repeating-linear-gradient(red, yellow 10%, green 20%);
}
```
地址：https://codesandbox.io/s/qfsdk

本文完， 感谢阅读。
