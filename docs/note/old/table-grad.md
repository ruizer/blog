# 原生JS实现table表格列宽拖拽
>这是我很久以前写的文章，如果有什么不对的地方请指出，原文：https://ruizer.github.io/2019/07/22/table-grad-表格列宽拖拽/

> 本文配套[Demo](https://ruizer.github.io/demo/#/table-drag)

实现表格列宽拖拽功能，主要使用鼠标事件：`mousedown`、`mouseup`、`mousemove`
事件 | 描述
--- | ---
[mousedown] | 事件在指针设备（如：鼠标）按钮按下时触发
[mouseup] | 事件在指针设备（如：鼠标）按钮抬起时触发
[mousemove] | 当指针设备( 通常指鼠标 )在元素上移动时, `mousemove` 事件被触发
当然，这些事件都是绑定在表头上面的，大致流程就是：
<!-- more -->
```
graph LR
鼠标按下记录单元格-->鼠标移动调整列宽
鼠标移动调整列宽-->鼠标抬起结束宽度调整
```

### 按下鼠标 mousedown
当鼠标按下时，记录单元格
```
    /** 鼠标按下 */
    mouseDown(e) {
      // 记录单元格
      if (!(e && e.target)) return;
      this.localTd = e.target;
      if (e.offsetX > this.localTd.offsetWidth - 10) {
        this.localTd.mouseDown = true;
        this.localTd.oldX = e.x;
        this.localTd.oldWidth = this.localTd.offsetWidth;
      }
    }
```
### 移动鼠标 mousemove
当鼠标移动时，根据暂存的单元格及宽度信息，调整列宽
```
    /** 鼠标移动 */
    mouseMove(e) {
      if (!(e && e.target)) return;
      const vm = e.target;
      // 更改鼠标样式
      if (e.offsetX > vm.offsetWidth - 10) {
        vm.style.cursor = "col-resize";
      } else {
        vm.style.cursor = "default";
      }
      // 取出暂存的Table Cell
      if (!this.localTd) this.localTd = vm;
      if (this.localTd.mouseDown !== null && this.localTd.mouseDown === true) {
        this.localTd.style.cursor = "default";
        if (this.localTd.oldWidth + (e.x - this.localTd.oldX) > 0) {
          this.localTd.width =
            this.localTd.oldWidth + (e.x - this.localTd.oldX);
        }
        // 调整列宽
        this.localTd.style.width = this.localTd.width;
        this.localTd.style.cursor = "col-resize";
        // 调整该列中的每个Cell
        let table = this.localTd;
        while (table.tagName !== "TABLE") table = table.parentElement;
        for (let j = 0; j < table.rows.length; j++) {
          table.rows[j].cells[
            this.localTd.cellIndex
          ].width = this.localTd.width;
        }
      }
    }
```
### 鼠标抬起 mouseup
鼠标抬起，结束宽度调整
```
    /** 鼠标抬起 */
    mouseUp(e) {
      // 结束宽度调整
      if (!(e && e.target)) return;
      if (!this.localTd) this.localTd = e.target;
      this.localTd.mouseDown = false;
      this.localTd.style.cursor = "default";
    }
```
本文完， 感谢阅读。

[mousedown]:https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mousedown_event
[mouseup]:https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mouseup_event
[mousemove]:https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mousemove_event
