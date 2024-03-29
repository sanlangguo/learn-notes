#### BFC理解

```
  块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。
```

  [1.参考链接](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

  [2.参考链接](https://zhuanlan.zhihu.com/p/25321647)

#### 盒模型理解 BFC 实现方式 解决了哪些问题

CSS中组成一个块级盒子需要:
  Content box: 这个区域是用来显示内容，大小可以通过设置 width 和 height.
  Padding box: 包围在内容区域外部的空白区域； 大小通过 padding 相关属性设置。
  Border box: 边框盒包裹内容和内边距。大小通过 border 相关属性设置。
  Margin box: 这是最外面的区域，是盒子和其他元素之间的空白区域。大小通过 margin 相关属性设置。
  
产生BFC的方法：
  float有值且不为空。
  overflow有值且不为visible。
  display有值为：inline-block，table-cell，flow-root，table-caption，inline-flex中的一个。
  position有值为absolute或者fixed。
  
BFC可以解决哪些问题：
  1、BFC全称：Block Formatting Context，译为块级格式化上下文，它是CSS2.1规范定义的，关于CSS渲染定位的一个概念
  2、能够解决因浮动造成的父元素塌陷问题
  3、能够解决div浮动造成的遮盖问题【overflow:hidden; 触发bfc来解决遮挡问题】
  4、解决margin塌陷问题【overflow:hidden; 产生bfc来解决】

##### css居中的方式

  [1.参考链接](https://juejin.im/post/5a7a9a545188257a892998ef#heading-2)

##### flex

* flex 主轴的理解

  [参考链接](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

* flex-basis 具有更高的优先级 
  ```
    当一个元素同时被设置了 flex-basis (除值为 auto 外) 和 width (或者在 flex-direction: column 情况下设置了height) , flex-basis 具有更高的优先级.
  ```
  
###  标准盒模型

在标准模型中，如果你给盒设置 width 和 height，实际设置的是 content box。 padding 和 border 再加上设置的宽高一起决定整个盒子的大小。
```
.box {
  width: 350px;
  height: 150px;
  margin: 25px;
  padding: 25px;
  border: 5px solid black;
}
```

如果使用标准模型宽度 = 410px (350 + 25 + 25 + 5 + 5)，高度 = 210px (150 + 25 + 25 + 5 + 5)，padding 加 border 再加 content box。

注: margin 不计入实际大小 —— 当然，它会影响盒子在页面所占空间，但是影响的是盒子外部空间。盒子的范围到边框为止 —— 不会延伸到margin。


box-sizing 属性可以被用来调整这些表现:

- content-box 是默认值。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px 宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
- border-box 告诉浏览器：你想要设置的边框和内边距的值是包含在width内的。也就是说，如果你将一个元素的width设为100px，那么这100px会包含它的border和padding，内容区的实际宽度是width减去(border + padding)的值。大多数情况下，这使得我们更容易地设定一个元素的宽高。




###  画一条 0.5px 的线

- 采用 meta viewport 的方式
```
<meta name="viewport" content="initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no" />
```
这样html的宽高就是设备的2倍，此时依然使用css board为1像素的话，肉眼看到页面线条就相当于transform:scale(0.5)的效果，即为0.5像素.
但是这种方式涉及到页面整体布局规划以及图片大小的制作，所以若采用这个方式还是事先确定为好.


- 采用 border-image 的方式

这个其实就比较简单了，直接制作一个0.5像素的线条和其搭配使用的背景色的图片即可

- 采用 transform: scale()的方式
就是将绘制出来的线条的高度进行半倍的缩放
```
p {
  width: 100%;
  left: 0;
  bottom: 0;
  height: 1px;
  background-color: red;
  -webkit-transform: scale(1,0.5);
  transform: scale(1,0.5);
}
```

### transition 和 animation 的区别
Animation和transition大部分属性是相同的，他们都是随时间改变元素的属性值，他们的主要区别是transition需要触发一个事件才能改变属性，而animation不需要触发任何事件的情况下才会随时间改变属性值，并且transition为2帧，从from .... to，而animation可以一帧一帧的。

- CSS的transition只有两个状态：开始状态 和 结束状态；但animation可能是多个状态，有帧的概念
- CSS的transition需要借助别的方式来触发，比如CSS的状态选择器（如:hover）或 借助JavaScript来触发；animation可以自动触发

### 关于js动画和css3动画的差异性你了解吗？请简单谈一下

- transform: css transform 属性允许你旋转，缩放，倾斜或平移给定元素。这是通过修改CSS视觉格式化模型的坐标空间来实现的。
- requestAnimationFrame: window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行.
- 当你准备更新动画时你应该调用此方法。这将使浏览器在下一次重绘之前调用你传入给该方法的动画函数(即你的回调函数)。回调函数执行次数通常是每秒60次，但在大多数遵循W3C建议的浏览器中，回调函数执行次数通常与浏览器屏幕刷新次数相匹配。为了提高性能和电池寿命，因此在大多数浏览器里，当requestAnimationFrame() 运行在后台标签页或者隐藏的<iframe> 里时，requestAnimationFrame() 会被暂停调用以提升性能和电池寿命。

[参考 MDN requestAnimationFrame ](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)


- css3动画：css3之后添加了transform动画计算函数，所以实现动画更为简单方便，并且transform矩阵是C++级的计算，所以速度会快很多。但是动画控制上不是特别灵活，部分动画无法实现（比如轮播图，视差滚动都需要js去参与）并且兼容性也存在一定问题。

- js动画：一般可以使用requestAnimationFrame去实现，js动画相对css3动画来说，控制力更强一些，可以单帧的控制变换，同时可以兼容到IE6版本的浏览器，并且功能非常强大，但是它编码较为繁琐，并且运算预渲染性能都不如css3动画。

- 所以，综合考虑，简单的交互动画就用css3实现，控制比较复杂、比较繁琐的交互动画可以交由js实现。

### 浮动清除
  
- 方法一：使用带 clear 属性的空元素 在浮动元素后使用一个空元素如
```
  <div class="clear"></div>，并在CSS中赋予.clear{clear:both;}属性即可清理浮动。亦可使用<br class="clear" />或<hr class="clear" /> 
来进行清理。 
```
- 方法二：使用 CSS 的 overflow 属性 给浮动元素的容器添加 overflow:hidden;或 overflow:auto;可以清除浮动，另外在 IE6 中还 需要触发 hasLayout ，例如为父元素设置容器宽高或设置 zoom:1。 在添加 overflow 属性后，浮动元素又回到了容器层，把容器高度撑起，达到了清理浮动 的效果。 
- 为什么加入overflow:hidden,即可清除浮动呢？那是因为overflow:hidden属性相当于是让父级紧贴内容，这样即可紧贴其对象内内容（包括使用float的div盒子），从而实现了清除浮动
- 方法三：给浮动的元素的容器添加浮动 给浮动元素的容器也添加上浮动属性即可清除内部浮动，但是这样会使其整体浮动，影响布局，不推荐使用。 
- 方法四：使用邻接元素处理 什么都不做，给浮动元素后面的元素添加 clear 属性。 
- 方法五：使用 CSS 的:after 伪元素 结合:after 伪元素（注意这不是伪类，而是伪元素，代表一个元素之后最近的元素）和 IEhack ，可以完美兼容当前主流的各大浏览器，这里的 IEhack 指的是触发 hasLayout。 给浮动元素的容器添加一个 clearfix 的 class，然后给这个 class 添加一个:after 伪元素实 现元素末尾添加一个看不见的块元素（Block element）清理浮动。 参考 https://www.cnblogs.com/ForEvErNoME/p/3383539.html

### CSS3新增的属性有哪些：
CSS 用于控制网页的样式和布局。

CSS3 是最新的 CSS 标准。

CSS3新增了很多的属性，下面一起来分析一下新增的一些属性：

- CSS3边框：

border-radius：CSS3圆角边框。在 CSS2 中添加圆角矩形需要技巧，我们必须为每个圆角使用不同的图片，在 CSS3 中，创建圆角是非常容易的，在 CSS3 中，border-radius 属性用于创建圆角。border：2px solid;
box-shadow：CSS3边框阴影。在 CSS3 中，box-shadow 用于向方框添加阴影。box-shadow:10px 10px 5px #888888;
border-image：CSS3边框图片。通过 CSS3 的 border-image 属性，您可以使用图片来创建边框。border-image：url(border.png) 30 30 round;
- CSS3背景：

background-size： 属性规定背景图片的尺寸。在 CSS3 之前，背景图片的尺寸是由图片的实际尺寸决定的。在 CSS3 中，可以规定背景图片的尺寸，这就允许我们在不同的环境中重复使用背景图片。您能够以像素或百分比规定尺寸。如果以百分比规定尺寸，那么尺寸相对于父元素的宽度和高度。
background-origin ：属性规定背景图片的定位区域。背景图片可以放置于 content-box、padding-box 或 border-box 区域。
- CSS3文字效果：

text-shadow：在 CSS3 中，text-shadow 可向文本应用阴影。text-shadow:5px 5px 5px #FFFFFF;
word-wrap :单词太长的话就可能无法超出某个区域，允许对长单词进行拆分，并换行到下一行：p{word-wrap:break-word;}
- CSS3 2D转换：

　　transform：通过 CSS3 转换，我们能够对元素进行移动、缩放、转动、拉长或拉伸。

translate()：元素从其当前位置移动，根据给定的 left（x 坐标） 和 top（y 坐标） 位置参数：transform：translate（50px,100px）;值 translate(50px,100px) 把元素从左侧移动 50 像素，从顶端移动 100 像素。
rotate()：元素顺时针旋转给定的角度。允许负值，元素将逆时针旋转。transform:rotate(30deg);值 rotate(30deg) 把元素顺时针旋转 30 度。
scale():元素的尺寸会增加或减少，根据给定的宽度（X 轴）和高度（Y 轴）参数：transform:scale(2,4);值 scale(2,4) 把宽度转换为原始尺寸的 2 倍，把高度转换为原始高度的 4 倍。
skew():元素转动给定的角度，根据给定的水平线（X 轴）和垂直线（Y 轴）参数：transform:skew(30deg,20deg);值 skew(30deg,20deg) 围绕 X 轴把元素转动 30 度，围绕 Y 轴转动 20 度。
matrix() :
matrix() 方法把所有 2D 转换方法组合在一起。

matrix() 方法需要六个参数，包含数学函数，允许您：旋转、缩放、移动以及倾斜元素。

- CSS3 3D转换：

rotateX()：元素围绕其 X 轴以给定的度数进行旋转。transform：rotateX(120deg);
rotateY()：元素围绕其 Y 轴以给定的度数进行旋转。transform：rotateY(120deg);
- CSS3 过渡：当元素从一种样式变换为另一种样式时为元素添加效果。

- CSS3动画：通过 CSS3，我们能够创建动画，这可以在许多网页中取代动画图片、Flash 动画以及 JavaScript。

- CSS3多列：

column-count：属性规定元素应该被分隔的列数。
column-gap：属性规定列之间的间隔。
column-rule ：属性设置列之间的宽度、样式和颜色规则。
- CSS3用户界面：

resize：属性规定是否可由用户调整元素尺寸。
box-sizing：属性允许您以确切的方式定义适应某个区域的具体内容。
outline-offset ：属性对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。


### position 相关属性

- 固定定位 fixed： 元素的位置相对于浏览器窗口是固定位置，即使窗口是滚动的它也不会移动。Fixed 定 位使元素的位置与文档流无关，因此不占据空间。 Fixed 定位的元素和其他元素重叠。 
- 相对定位 relative： 如果对一个元素进行相对定位，它将出现在它所在的位置上。然后，可以通过设置垂直 或水平位置，让这个元素“相对于”它的起点进行移动。 在使用相对定位时，无论是 否进行移动，元素仍然占据原来的空间。因此，移动元素会导致它覆盖其它框。 
- 绝对定位 absolute： 绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那 么它的位置相对于<html>。absolute 定位使元素的位置与文档流无关，因此不占据空间。 absolute 定位的元素和其他元素重叠。 
- 粘性定位 sticky： 元素先按照普通文档流定位，然后相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位。而后，元素定位表现为在跨越特定阈值前为相对定 位，之后为固定定位。 
- 默认定位 Static： 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声 明）。 
- inherit: 规定应该从父元素继承 position 属性的值。

### visibility=hidden, opacity=0，display:none 区别

- opacity=0，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定一些 事件，如 click 事件，那么点击该区域，也能触发点击事件的 
- visibility=hidden，该元素 隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件 
- display=none， 把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删除掉一样。

  [参考链接](https://github.com/sanlangguo/learn-notes/wiki/display-none-visibility-hidden-opacity-0-%E5%8C%BA%E5%88%AB)
  
### 双边距重叠问题（外边距折叠）
- 多个相邻（兄弟或者父子关系）普通流的块元素垂直方向 marigin 会重叠 折叠的结果为： 两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。 
- 两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。 
- 两个外边距一正一负时，折叠结果是两者的相加的和。
  
### 多行元素的文本省略号

- 方法一,对于多行文本，一种方法是使用webkit的css扩展属性，该方法适用于Safari、chrome和大多数移动端浏览器。

```
p {
  width: 300px;
  overflow: hidden;
  /*将对象作为弹性伸缩盒子模型显示*/
  display: -webkit-box;
  /*设置子元素排列方式*/
  -webkit-box-orient: vertical;
  /*设置显示的行数，多出的部分会显示为...*/
  -webkit-line-clamp: 3;
}
```
- 方法二,使用伪元素实现，将伪元素放在最后一个字的上方，达到显示省略号的目的。该方法兼容性较好，但文字未超出的情况下也会出现省略号。
```
p {
  position: relative;
  line-height: 1.2em;
  max-height: 3.6em;
  width: 300px;
  /*设置文本为两端对齐*/
  text-align: justify;
  overflow: hidden;
}

p::after {
  content: "...";
  position: absolute;
  bottom: 0;
  right: 0;
  /*将省略号的大小设置为1个字体大小*/
  width: 1em;
  /*设置背景，将最后一个字覆盖掉*/
  background: #fff;
}
```
- 方法三：使用插件jQuery.dotdotdot，下载及详细文档地址：http://dotdotdot.frebsite.nl/。
```
p {
  width: 300px;
  max-height: 3em;
  text-align: justify;
  overflow: hidden;
}

// js部分代码
$(document).ready(function() {
  $("p").dotdotdot();
});
```

### 说一下块元素和行元素
 
- 块元素：独占一行，并且有自动填满父元素，可以设置 margin 和 pading 以及高度和宽度
- 行元素：不会独占一行，width 和 height 会失效，并且在垂直方向的 padding 和 margin 会失效。

### calc 属性, support 属性
- calc() 函数用于动态计算长度值。 calc()函数支持 "+", "-", "*", "/" 运算；
- support 主要是用于检测浏览器是否支持CSS的某个属性，其实就是条件判断，如果支持某个属性，你可以写一套样式，如果不支持某个属性，你也可以提供另外一套样式作为替补。

```
@supports (display: grid) {
  div {
    display: grid;
  }
}
 
@supports not (display: grid) {
  div {
    float: right;
  }
}
```
### 画一个三角形？
```
.a {
  width: 0;
  height: 0;
  border-width: 100px;
  border-style: solid;
  border-color: #0099CC transparent transparent;
}

<div class="a"></div>
```
### line-height 和 height 的区别, vertical-align基本概念与应用

![image](https://user-images.githubusercontent.com/30766629/130578839-67a83511-cc3e-439e-91a8-748bd0a1ef7c.png)
  
- line-height 行高是指文本行基线baseline之间的垂直距离
行高是可以被继承的，数字可以直接被继承，然后在计算行高；而百分比是先计算出行高，在以px继承行高line-height实际上只影响行内元素和其他行内内容，而不会直接影响块级元素，也可以为一个块级元素设置line-height，但这个值只是应用到块级元素的内联内容时才会有影响。在块级元素上声明line-height会为该块级元素的内容设置一个最小行框高度
- height则是定义元素自身的高度
  
```
  <p>text, text,text,text,text,text,text</p>
  假如定义p标签的行高为line-heigth:20px; 文字在浏览器中显示为一行时，这个p标签的高度会为20px，如果为两行，则p标签的高度为40px;行高20px;
```
  
- vertical-align 基本概念与应用
  
vertical-align的百分比值不是相对于字体大小或者其他什么属性计算的，而是相对于line-height计算的。

![image](https://user-images.githubusercontent.com/30766629/130578918-1d2b2daa-b19c-498c-a9e7-d355831440b0.png)

- 图像元素在块级元素底部为什么留有空白？
  
原因是行内元素默认都受vertical-align（垂直对齐方式）和line-height（行高）的影响， 而vertical-align默认的对齐方式是baseline,即基线对齐。 这个基线就是span标签里的字母X的下边沿，故图片底部是与字母底部相对齐的（不是与span标签的背景对齐）。 又因为字母本身有line-height（行高）值，所以span标签加上背景后比字母要高一些。

  解决方法：（四种方法任意一种都可解决该问题）
- 将整个p内的font-size设置为0；
- 将图片img变为块级元素，即设置其为display:block;
- 给p设置一个行高（值尽量小些），设置为line-height:5px;
- 设置图片img垂直对齐方式vertical-align,值为top/middle/bottom任意一个都可以（为了覆盖默认的值baseline）;

### 设置一个元素的背景颜色，背景颜色会填充哪些区域？
- background-color 设置的背景颜色会填充元素的 content、padding、border 区域。

### 知道属性选择器和伪类选择器的优先级吗
  
- 属性选择器和伪类选择器优先级相同
  
### 了解重绘和重排(回流)吗，知道怎么去减少重绘和重排吗

回流这一阶段主要是计算节点的位置和几何信息，那么当页面布局和几何信息发生变化的时候，就需要回流. 比如以下情况：

- 调整窗口大小
- 更改字体
- 添加或删除样式表
- 内容更改，例如用户键入文本,输入框
- 激活 CSS 伪类，如 ：hover（在 IE 中激活兄弟姐妹的伪类）
- 操纵类属性
- 操纵 DOM 的脚本
- 计算偏移量
- 设置样式属性的属性

注意：回流一定会触发重绘，而重绘不一定会回流
  
如何避免回流或至少将其对性能的影响降至最低？
  
- 更改风格元素的类（在 dom 树中尽可能低）
- 避免设置多个内联样式
- 将动画应用于固定或绝对位置的元素
- 交易平滑度以加快速度
- 避免布局表
- 避免在 CSS中使用 JavaScript 表达式（仅限 IE）
  
  
### inline-block、inline 和 block 的区别；

- Block 是块级元素，其前后都会有换行符，能设置宽度，高度，margin/padding 水平垂直 方向都有效。 
- Inline：设置 width 和 height 无效，margin 在竖直方向上无效，padding 在水平方向垂直 方向都有效，前后无换行符 
- Inline-block：能设置宽度高度，margin/padding 水平垂直方向 都有效，前后无换行符
  
### 为什么 img 是 inline 还可以设置宽高
  
简单介绍：
- img、input 属于替换元素，替换元素一般有内在尺寸和宽高比(auto时起作用)，所以具有width和height，可以设定。

详细介绍
- 几乎所有的替换元素都是行内元素，例如img、input等等。不过元素的类型也不是固定的，通过设定CSS 的display属性，可以使行内元素变为块级元素，也可以让块级元素变为行内元素。
- 替换元素一般有内在尺寸，所以具有width和height，可以设定。例如你不指定img的width和height时，就按其内在尺寸显示，也就是图片被保存的时候的宽度和高度。对于表单元素，浏览器也有默认的样式，包括宽度和高度。

### Html 块级元素和行内元素的区别，替换元素（input）的特点
  
  [参考链接01](https://segmentfault.com/a/1190000013497383)
  
  [参考链接02](https://segmentfault.com/a/1190000006835284)
  
### 动画的简单动效 （圆圈画圆过程）
  
```
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, 2 * Math.PI);
  ctx.stroke();
  
```

### 如何三栏布局兼容问题
  
  [参考链接](https://segmentfault.com/a/1190000019269901)
  
### css 上下三栏布局，底部一直在页面底部
  
  [上下三栏布局](https://codepen.io/una/pen/bGVXPWB)
  
  [一直在底部位置](https://github.com/sanlangguo/learn-notes/wiki/footer-%E4%B8%80%E7%9B%B4%E5%9C%A8%E5%BA%95%E9%83%A8%E4%BD%8D%E7%BD%AE)
  
### css 左右布局，左固定 兼容写法
  [参考链接](https://www.cxyzjd.com/article/yinkaihui/49851773)

### rem em vh vw 原理
  [参考链接](https://zhuanlan.zhihu.com/p/96721026)
  
### css 五种不同颜色圆环
  [参考链接](https://www.zhangxinxu.com/wordpress/2017/11/pure-css-colorful-circle/)
  
  [dom地址](https://codepen.io/sanlangguo/pen/abdaqWP)
  
  
### 1像素问题
  [参考链接](https://segmentfault.com/a/1190000007604842)
  
### css 进度条
  [参考链接](https://cloud.tencent.com/developer/article/1572870)
  
### flex 1
  [参考链接](https://zhuanlan.zhihu.com/p/136223806)
  
  
  
  
