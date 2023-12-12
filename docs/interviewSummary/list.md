## 2023 12月

### 上海朋熙半导体

### 一面
开始: 自我介绍

### css 
#### css 继承
1. 字体属性（font）
2. 文本属性（text）
3. 颜色属性（color）
4. 列表属性（list）
5. 表格属性（table）
6. 边框属性（border）
7. 背景属性（background）
8. 元素的可见性属性（visibility）
9. 元素的透明度属性（opacity）
10. 元素的文本装饰属性（text-decoration）
11. 元素的文本转换属性（text-transform）
12. 元素的文本对齐属性（text-align）
13. 元素的文本缩进属性（text-indent）
14. 元素的文本行高属性（line-height）
15. 元素的文本字间距属性（letter-spacing）
16. 元素的文本单词间距属性（word-spacing）
17. 元素的文本换行属性（word-wrap）
18. 元素的文本溢出属性（text-overflow）
19. 元素的文本换行方式属性（white-space）
20. 元素的文本溢出方式属性（overflow-wrap）
#### css 如何隐藏元素

**完全隐藏的方法 (元素 Dom 节点会从渲染树消失，更不会占据空间，也不可被点击触发 click 事件)**
- 设置display属性为 none，这样元素就被完全隐藏了。
- 这是 HTML5 新增属性，相当于 display: none，直接写在元素上面，如<div hidden></div>

**视觉上隐藏：元素依旧占据着位置，只是我们视觉上看不见而已, 但也可能会触发click事件**
- opacity属性作用于元素时，会将元素和其内容当作一个整体，从而设置整体的透明度，还可与 transition 搭配使用，从而达到一个动态变化的效果。
opacity:0；将元素整体透明度设置为 0，视觉上就会变得不可见，但依旧占据空间，而且可以被点击触发 click 事件

- visibility 属性可控制元素的显示与隐藏，且不更改文档的布局，依旧占据空间，但当visibility:hidden时不可点击触发 click 事件。

**其他 css 属性方法**

**绝对定位**
- 设置 posoition 为 absolute 或 fixed，再通过设置 top、left 等值，将其移出可视区域
```css
position: absolute;
left: -999px;
top: -999px;
```
**设置 margin**
- 通过设置 margin 值，将其移出可视区域范围（可视区域占位）。如：margin-left: -99999px;

**设置宽高为 0**
- 将元素的 margin、border、padding、height 和 width 等影响元素盒模型的属性设为 0。 如果元素内有子元素或内容，就设置其 overflow:hidden 来隐藏其子元素

```css
width: 0px;
height: 0px;
overflow: hidden; /*隐藏子元素*/

```


**裁剪元素**
- 通过clip-path属性来剪裁元素，但这个属性比较新，浏览器兼容性比较差，了解一下即可
```css
clip-path: polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px);

```

##### 分析比较 opacity: 0、visibility: hidden、display: none 的区别和优劣。


- display:none; : 会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击。
- visibility: hidden; ：不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击。
- opacity: 0; : 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击。


继承性：


- display 和 opacity 属性是非继承属性。

- display: none 元素的子孙节点消失的原因: 父元素从渲染树消失造成，从而子孙节点也无法显示。
- opacity: 0 元素的子孙节点消失的原因: opacity 属性会将元素和其内容当作一个整体来进行控制。


visibility 属性是继承属性。

- visibility: hidden 元素的子孙节点消失的原因是：子孙节点继承了 visibility: hidden。
我们可通过设置 visibility: visible;可以让子孙节点显式。


性能：

- display: none; : 修改元素会造成整个文档的回流，性能消耗较大 。
- visibility:hidden: 修改元素会造成重绘,性能消耗较少。
- opacity: 0 ： 修改元素会造成重绘，性能消耗较少。


#### z-index 如何隐藏元素,原理是什么
要隐藏元素，可以使用 `z-index` 属性。`z-index` 属性用于控制元素的堆叠顺序，即元素在层叠上下文中的显示顺序。

要隐藏元素，可以将其 `z-index` 设置为较低的值，比如负数。这样，被隐藏的元素就会被放置在其他元素的下方，从而实现隐藏效果。

例如，可以使用以下 CSS 代码隐藏一个元素：

```css
.element {
  z-index: -1;
}
```

这样设置后，该元素就会被放置在其他具有正数 `z-index` 值的元素下面，从而隐藏起来。

#### HTML5
1. 有哪些新增
2. localStore 的缺点
3. prefect 和 preload 区别

**js**
1. js 继承
2. this 的理解
3. 如何实现 call, apply
4. promise 如何终止

**vue**
1. vue3 有哪些更新
2. vue 如何实现继承
3. pinia 和 vuex 区别

**场景问答**
1. 多个 loading ,多个 http 请求, axios 如何在数据加载完后, 同时取消 多个loading


**前端工程化**
1. 前端如何做优化

结束: 有什么问题要问的


##### 二面

开始: 自我介绍


**项目经验**

1. qiankun 如何解决内存泄露
2. 如何解决跨域
3. 多个窗口如何传参
4. http 复杂请求的理解, 为什么触发复杂请求
5. app 容器化前端包如何防止拦截包
6. 中台项目如何做的优化
7. 为什么使用qiankun
8. 如何检测 app 离线包的性能
9. jsbrige 原理, 如何触发回调
10. jsonp 原理
11. 移动端如何做真机调试, v-console 如何做断点
12. 动画有哪些

结束: 有什么问题要问的