# window.print 浏览器打印全集~

> 本文配套[Demo](https://ruizer.github.io/demo/#/print)

近日做了浏览器打印，这里总结下相关的知识点，并不保证准确性。

## 打印接口

首先浏览器打印已经是非常成熟的应用了，一般是不会存在一些兼容性问题

最简单的打印就是直接调用 `window.print()` ，当然用 `document.execCommand('print')` 也可以达到同样的效果
<!--more-->
一般直接在网页调用 `print` 方法是满足不了我们的业务需求：
- 打印的时候不同风格样式
- 特定纸张大小和方向
- 打印特定区域等等

所以我们需要一些特定的办法来帮助我们改善用户体验！

## 打印样式相关

### 样式引用方式

1. print style sheet (打印样式表)
引入 `link` 时，加个 `media="print"` 来标识这是打印机才会应用的样式：
```
<link href="/example.css" media="print" rel="stylesheet" />
```
这样，打印的时候就会默认将该样式应用到这些文档中

2. @media (媒介查询)
如果特定的打印样式并不是很多，我们完全没必要重新写个样式表，利用媒介查询就可以了：
```
@media print {
    // 这里面的样式，打印的时候才会生效
}
```

### 打印时颜色消失
打印时你可能会遇到背景颜色消失的情况，针对这个问题，`print-color-adjust ` 可以解决你的问题

属性 `print-color-adjust ` 用来设定浏览器打印背景颜色(或背景图片)的行为，它有两个比较重要的参数：
- economy（默认值）：允许浏览器自动调整
- exact：使用你设定好的样式颜色
代码如下
```
@media print {
    body {
        -webkit-print-color-adjust: exact !important;
    }
}
```
### 表格(或其他)被分页分割
针对这个问题，重点介绍以下三个属性：
- break-after（[MDN说明链接][BreakAfter]）
- break-before（[MDN说明链接][BreakBefore]）
- break-inside（[MDN说明链接][BreakInside]）

这三个属性与页面断点有关系，利用这些属性可以生产元素前后换页等效果，详细内容可以看 MDN 说明。
在这里我们主要用第三个属性 `break-inside`，元素内容中间，不可以被换页
代码如下，设定一个class no-break 给不想换页的元素
```
<p class="no-break">我不想被换页</p>
@media print {
    .no-break {
        break-inside: avoid;
    }
}
```

### 设定@page
利用 `@page` 可以设定纸张配置，有两个比较常用的属性
- size：指定目标纸张的尺寸（A4、A5）、以及页面方向（portrait / landscape）
- margin:：利用 `margin` 设定边距
```
@page {
   size: A4 portrait;
   margin: 10mm;
}
@page :first {
   margin-top: 20mm;
}
```

### 彩色打印
```
@media print and (color) {
    // 杂七杂八
}
```

### 杂七杂八

1. 表格相关
    如果表格分页了，表头`thead`、表尾`tfoot`是每页都会打印的
2. display:none
    ```
    // 不想打印出来的可以使用display：none
    @media print {
        .no-print {
            display:none
        }
    }
    ```

## 个性化定制打印区域/打印内容
如果我们只想打印某一区域又不想重新写样式表哈，什么的。可以直接使用[Print.js][PrintJs]、[jQuery.print][jQueryPrint]。
当然，你也可以自己写一个，大概的思路是创建一个 `iframe`，要打印的dom和样式表都丢进去，再调用iframe的打印事件。
```

/** 给打印增加默认样式 */
function myStyle(mode) {
  mode = mode.toLowerCase();
  mode = mode === 'landscape' ? mode : 'portrait';
  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = `@page { size: ${mode}; margin: 10mm;}`;
  return style;
}

/** @description 动态打印 */
export const printPartial = (
  dom,
  { title = document.title, mode = 'portrait' } = {},
) => {
  if (!(dom && dom.outerHTML)) return;
  let copyDom = document.createElement('span');
  const styleDom = document.querySelectorAll('style, link, meta');
  const titleDom = document.createElement('title');
  titleDom.innerText = title;
  copyDom.appendChild(titleDom);
  Array.from(styleDom).forEach(item => {
    copyDom.appendChild(item.cloneNode(true));
  });
  copyDom.appendChild(myStyle(mode));
  const headTemp = copyDom.innerHTML;
  copyDom = null;
  const iframeDom = document.createElement('iframe');
  const attrObj = {
    height: 0,
    width: 0,
    border: 0,
    wmode: 'Opaque',
  };
  const styleObj = {
    position: 'absolute',
    top: '-999px',
    left: '-999px',
  };
  Object.entries(attrObj).forEach(([key, value]) => {
    iframeDom.setAttribute(key, value);
  });
  Object.entries(styleObj).forEach(([key, value]) => {
    iframeDom.style[key] = value;
  });
  
  iframeDom.srcdoc = `<html><head>${headTemp}</head></head><body style="-webkit-print-color-adjust: exact;">${dom.outerHTML}</body></html>`;

  document.body.insertBefore(iframeDom, document.body.children[0]);
  const iframeWin = iframeDom.contentWindow;
  iframeDom.onload = () => {
    iframeWin.focus();
    iframeWin.print();
    document.body.removeChild(iframeDom);
  };
};

```

## 实现页面排版与打印一致
要实现页面排版与打印一致，首先要考虑的就是页面尺寸问题，但是 `web` 端大小单位并不是纸张大小距离单位（如cm、mm）。

这里就有了一个计算方式：
```
假如电脑分辨率是 `D` 像素/英寸，其中一英寸为 `25.4` 毫米 
纸张大小为 `I` 英寸（`M 毫米 / 25.4`）
直接用 ` D * I ` （`M 毫米 * D / 25.4`）就得到A4纸的像素宽了。

页边距： 0.75 inch
A4: 8.27x11.69 inch
屏幕DPI  : 96DPI
width　=　(8.27 - 0.75 * 2) * 96 = 650 px
height =  (11.69 - 0.75 * 2)* 96 = 978 px

这里得出：当页面width=650px, height=978px时，打印时，刚好能打印一页的A4纸

```
但是呢，光有计算方式没有用，主要是 `DPI` 电脑分辨率的 问题，不同设备分辨率不一样，这里提供一个方法（不保证靠谱）
```
// 计算分辨率
const arrDPI = []
const tmpNode = document.createElement('div')
tmpNode.style.cssText = 'width:1in;height:1in;position:absolute;left:0;top:0;z-index:99;visibility:hidde'
document.body.appendChild(tmpNode)
arrDPI[0] = parseInt(tmpNode.offsetWidth)
arrDPI[1] = parseInt(tmpNode.offsetHeight)
tmpNode.parentNode.removeChild(tmpNode)
const DPI = Math.min(...arrDPI)

```


[BreakAfter]:https://developer.mozilla.org/zh-CN/docs/Web/CSS/break-after
[BreakBefore]:https://developer.mozilla.org/zh-CN/docs/Web/CSS/break-before
[BreakInside]:https://developer.mozilla.org/zh-CN/docs/Web/CSS/break-inside
[jQueryPrint]:https://github.com/DoersGuild/jQuery.print
[PrintJs]:https://github.com/crabbly/print.js


本文完， 感谢阅读。