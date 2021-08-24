#### BFC理解

```
  块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。
```

  [1.参考链接](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

  [2.参考链接](https://zhuanlan.zhihu.com/p/25321647)


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
  <div class="clear"></div>，并在 CSS 中赋 予.clear{clear:both;}属性即可清理浮动。亦可使用<br class="clear" />或<hr class="clear" /> 
来进行清理。 
```
- 方法二：使用 CSS 的 overflow 属性 给浮动元素的容器添加 overflow:hidden;或 overflow:auto;可以清除浮动，另外在 IE6 中还 需要触发 hasLayout ，例如为父元素设置容器宽高或设置 zoom:1。 在添加 overflow 属性后，浮动元素又回到了容器层，把容器高度撑起，达到了清理浮动 的效果。 
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
  
  
  
  
  
  
  
  
  
