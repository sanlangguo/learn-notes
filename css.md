##### BFC理解

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
  
#####  标准盒模型


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




#####  画一条 0.5px 的线

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

##### transition 和 animation 的区别
Animation和transition大部分属性是相同的，他们都是随时间改变元素的属性值，他们的主要区别是transition需要触发一个事件才能改变属性，而animation不需要触发任何事件的情况下才会随时间改变属性值，并且transition为2帧，从from .... to，而animation可以一帧一帧的。

- CSS的transition只有两个状态：开始状态 和 结束状态；但animation可能是多个状态，有帧的概念
- CSS的transition需要借助别的方式来触发，比如CSS的状态选择器（如:hover）或 借助JavaScript来触发；animation可以自动触发










