### == 与 === 区别

在 JavaScript 中，== 运算符用于比较两个值是否相等。== 运算符会先进行类型转换，然后再比较两个值。

== 运算符的类型转换规则如下：

- 如果两个操作数的类型相同，则直接比较。

- 如果两个操作数的类型不同，则会根据以下规则进行转换：

1. 字符串和数字会转换为数字。

2. 布尔值会转换为数字。

3. 对象会转换为原始值。

4. 函数会转换为 undefined。

以下是一些== 运算符类型转换的示例：

```js

// 字符串和数字会转换为数字

console.log("123" == 123); // true



// 布尔值会转换为数字

console.log(true == 1); // true

console.log(false == 0); // true



// 对象会转换为原始值

console.log({ x: 1 } == 1); // false



// 函数会转换为 undefined

console.log(function() {} == undefined); // true

== 运算符的类型转换可能会导致意想不到的结果。例如，以下代码将返回 true：


console.log("123" == new Date()); // true

```

这是因为在类型转换过程中，字符串 "123" 会转换为数字 123，而 new Date() 会转换为 undefined。因此，两个值都是数字，== 运算符会返回 true。

为了避免这种情况，可以使用 === 运算符。=== 运算符不会进行类型转换，而是直接比较两个值的类型和值。

以下是 == 和=== 的区别：

| 运算符 | 描述 |
|---|---|
| == | 会进行类型转换，然后比较两个值 |
| === | 不会进行类型转换，直接比较两个值的类型和值 |


### 手写 bind, call

```js
// 模拟 call
Function.prototype.myCall = function(context = window, ...arg) {
  if (this === Function.prototype) {
    return undefined
  }
  context = context || window;
  const fn = Symbol();
  context[fn] = this;
  const result = context[fn](...arg)
  return result;
}

// 模拟 apply
Function.prototype.myApply = function(context = window, args) {
  if (this === Function.prototype) {
    return undefined
  }
  const fn = Symbol();
  context[fn] = this;
  let result;
  if (Array.isArray(args)) {
    result = context[fn](...args);
  } else {
    result = context[fn]();
  }
  return result
}

// 模拟实现bind
/
 * 1.处理参数，返回一个闭包
 * 2.判断是否为构造函数调用，如果是则使用new 调用当前函数
 * 3.如果不是，使用apply,将 context 和处理好的参数传入
 */
Function.prototype.myBind = function(context, ...args) {
  const func = this; // 保存原始函数的引用
  return function(...newArgs) {
    return func.apply(context, [...args, ...newArgs]);
  };
};


const person = {
  name: 'Monica'
};

const boundGreet = greet.myBind(person, 'Alice');
boundGreet(); // 输出：Hello, Alice! I'm Monica.

```

### Array 有哪些方法

  [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

- 使用slice和concat对对象数组的拷贝，整个拷贝还是浅拷贝，拷贝之后数组各个值的指针还是指向相同的存储地址。

- slice 不会修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组。原数组的元素会按照下述规则拷贝：

- 如果该元素是个对象引用 （不是实际的对象），slice 会拷贝这个对象引用到新的数组里。两个对象引用都引用了同一个对象。如果被引用的对象发生改变，则新的和原来的数组中的这个元素也会发生改变。
- 对于字符串、数字及布尔值来说（不是 String、Number 或者 Boolean 对象），slice 会拷贝这些值到新的数组里。在别的数组里修改这些字符串或数字或是布尔值，将不会影响另一个数组。
如果向两个数组任一中添加了新元素，则另一个不会受到影响。

### js 深拷贝

[参考链接](https://www.cnblogs.com/penghuwan/p/7359026.html#_label0_1)

### 闭包

```js

for (var i = 0; i < 5; i++) {
  (function(i) {
   setTimeout(() => {
    console.log(i)
  }, 100)
  })(i)
}

or let
```
[参考链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)


### defer与async

defer与async的区别是：defer要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。一句话，defer是“渲染完再执行”，async是“下载完就执行”。另外，如果有多个defer脚本，会按照它们在页面出现的顺序加载，而多个async脚本是不能保证加载顺序的。

浏览器遇到 async 脚本时不会阻塞页面渲染，而是直接下载然后运行。这样脚本的运行次序就无法控制，只是脚本不会阻止剩余页面的显示。当页面的脚本之间彼此独立，且不依赖于本页面的其它任何脚本时，async 是最理想的选择。

使用 defer 属性，脚本将按照在页面中出现的顺序加载和运行

脚本调用策略小结：
* 如果脚本无需等待页面解析，且无依赖独立运行，那么应使用 `async`
* 如果脚本需要等待页面解析，且依赖于其它脚本，调用这些脚本时应使用 `defer`，将关联的脚本按所需顺序置于 `HTML` 中。

```js
<script defer src="js/vendor/jquery.js"></script>

<script async src="js/script3.js"></script>

```



### 用 preload 预加载页面资源

如何区分 preload 和 prefetch
- preload   是告诉浏览器页面必定需要的资源，浏览器一定会加载这些资源；
- prefetch 是告诉浏览器页面可能需要的资源，浏览器不一定会加载这些资源

可以预加载哪些类型的内容？

* audio：音频文件，通常用于 `<audio>`
* document: 旨在由`<frame>`或嵌入的 HTML 文档 `<iframe>`。
* embed：要嵌入到 `<embed>`元素中的资源。
* fetch：要通过 fetch 或 XHR 请求访问的资源，例如 ArrayBuffer 或 JSON 文件。
* font: 字体文件。
* image： 图像文件。
* object：要嵌入到`<object>`元素中的资源。
* script: JavaScript 文件。
* style: CSS 样式表。
* track: WebVTT 文件。
* worker：一个 JavaScript 网络工作者或共享工作者。
* video：视频文件，通常用于 `<video>`。
<br>

#### preload 和 prefetch 都是 HTML 中的预加载属性，用于提前加载资源。

#### 它们的区别在于：

* preload 告诉浏览器立即加载资源，而 prefetch 告诉浏览器在空闲时才开始加载资源。
* preload 的优先级为最高，而 prefetch 的优先级为最低。
* preload 通常用于加载页面中必需的资源，而 prefetch 通常用于加载页面中可能需要的资源。

以下是 preload 和 prefetch 的使用示例：

```html
<link rel="preload" href="style.css" as="style">
<link rel="prefetch" href="script.js">
```

在上述示例中，浏览器会立即加载 `style.css` 文件，并在空闲时加载 `script.js` 文件。

preload 和 prefetch 可以帮助提高页面的加载速度，但也可能会增加网络流量。因此，在使用它们时，需要根据实际情况进行选择。

以下是一些使用 preload 和 prefetch 的最佳实践：

* 只为必需的资源使用 preload。
* 为可能需要的资源使用 prefetch。
* 使用合理的优先级。
* 监控网络流量，避免过度使用 preload 和 prefetch。

[参考链接](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload)


### js 如何获取demo元素
[参考链接](https://www.jianshu.com/p/6fefda57b51f)

### var let const 的区别
[参考链接](https://www.jianshu.com/p/4e9cd99ecbf5)

### 数组map和 forEach 区别， Array.form （便捷数组操作），数组求和

到底有什么区别呢？forEach()方法不会返回执行结果，而是undefined。也就是说，forEach()会修改原来的数组。而map()方法会得到一个新的数组并返回。

数组求和: [参考链接](https://segmentfault.com/a/1190000023556599)
```js
var arr = [1,2,3];
function sum(arr) {
  return eval(arr.join("+"));
};
console.log(sum(arr));//6
```

### js 原型
[参考链接 mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

[参考链接 1](https://github.com/mqyqingfeng/Blog/issues/2)

[参考链接 2](https://segmentfault.com/a/1190000039399746)

![image](https://user-images.githubusercontent.com/30766629/136643557-0a0fe875-c441-4c8c-9626-254e102ce535.png)



### js 大文件上传
[参考链接](https://juejin.cn/post/6844903968338870285#comment)




### js 和 底层（ios android） 沟通原理

[参考链接](https://www.zoo.team/article/jsbridge)


### this
[参考链接](https://github.com/sanlangguo/learn-notes/wiki/this-%E7%90%86%E8%A7%A3)


### promise 异步原理
[参考链接简介 1](https://segmentfault.com/a/1190000009478377)

[详细参考链接](https://zhuanlan.zhihu.com/p/58428287)


### map object 的区别
[参考链接](https://segmentfault.com/a/1190000039989397)


### async/await 与 promise 区别
[参考链接](http://www.ruanyifeng.com/blog/2015/05/async.html)


### js 事件循环

[参考链接 mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)

[参考链接 segmentfault](https://segmentfault.com/a/1190000022805523) 

[JS 事件循环 重点](https://ustbhuangyi.github.io/vue-analysis/v2/reactive/next-tick.html#js-%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6)

### settimeout 内有 promiese.then, 里面的执行顺序


### 怎么定位内存泄漏问题
[参考链接](https://juejin.cn/post/6844904048961781774#heading-0)


### ES6 新属性

[参考链接](https://es6.ruanyifeng.com/)

### 多个并发怎么处理

[参考链接](https://segmentfault.com/a/1190000019895597)


### 怎样实现 bind，call 
[参考链接](https://zhuanlan.zhihu.com/p/94068275)


### js 如何监听 css trasition

[参考链接](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/transitionend_event)


### js 设计模式

[参考链接](https://juejin.cn/post/6844904032826294286#comment)


### 前端大数据怎么处理
异步，web worker

[参考链接](https://juejin.cn/post/6844903821278199822#comment)


### 移动端双指旋转角度怎么实现
[参考链接](https://blog.csdn.net/qq_17757973/article/details/54604625)

### 怎么判断缩放的大小比例
[参考链接](https://www.zhangxinxu.com/wordpress/2021/02/js-if-page-zoom/)


### 箭头函数， function 区别
作用:
* 更简短的函数；
* 更直观的作用域和this的绑定(不绑定this)

注意点：
* 函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象
* 不可以当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误
* 不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用 `rest` 参数代替
* 不可以使用`yield`命令，因此箭头函数不能用作 `Generator` 函数

[参考链接](https://blog.csdn.net/fish_skyyyy/article/details/113945502)

### 移动端响应式如何做

[参考链接](https://juejin.cn/post/6844904021552005128#heading-6)

### Map Set WeakMap WeakSet 场景

set, map 产生的原因

`JavaScript`的默认对象表示方式`{}`可以视为其他语言中的`Map`或`Dictionary`的数据结构，即一组键值对。

但是`JavaScript`的对象有个小问题，就是键必须是字符串。但实际上`Number`或者其他数据类型作为键也是非常合理的。为了解决这个问题，最新的ES6规范引入了新的数据类型`Map`和`set`.

[参考链接](https://juejin.cn/post/6844904024509054984#comment)
[参考链接](https://juejin.cn/post/6925320069522128909#heading-0)


### JS判断是否是数组的四种做法
[参考链接](https://www.cnblogs.com/echolun/p/10287616.html)


### js 作用域的理解
[参考链接](http://www.imooc.com/article/286497)


### 内存管理
[内存管理 mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management)


### 前端中的事件流
[事件流](https://segmentfault.com/a/1190000013265547)


### typeOf object ,typeOf function
[mdn typeof 理解](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)

### 为什么typeof null是object？
简单来说，`typeof null`的结果为Object的原因是一个`bug`。在 javascript 的最初版本中，使用的 32位系统，js为了性能优化，使用低位来存储变量的类型信息。


| 数据类型 | 机器码标识 |
|------------------|--------------------|
| 对象(Object)     | 000                |
| 整数             | 1                  |
| 浮点数           | 010                |
| 布尔             | 110                |
| undefined        | -2^31(即全为1)     |
| null             | 000                |

在判断数据类型时，是根据机器码低位标识来判断的，而`null`的机器码标识为全`0`，而对象的机器码低位标识为`000`。所以`typeof null`的结果被误判为`Object`。



### js 默认事件

阻止默认事件是为了在特定情况下修改或取消元素的默认行为。这样可以使开发者有更多的控制权，以便根据需求自定义用户交互体验。

例如，在表单提交时，如果没有阻止默认事件，浏览器会刷新页面并将表单数据提交到服务器，这可能会打断用户的操作流程。但是，如果阻止默认事件，开发者就可以使用 JavaScript 来验证表单数据、自定义提交行为等，从而提供更好的用户体验。

另一个例子是在链接点击时阻止默认事件。如果没有阻止默认事件，浏览器会跳转到链接的 URL，这可能会打断用户的浏览流程。但是，如果阻止默认事件，开发者就可以使用 JavaScript 来实现自定义的操作，例如打开链接的新窗口或者在当前页面中异步加载链接内容等。

在 JavaScript 中，可以使用以下方法来阻止默认事件：

1. 使用 `event.preventDefault()` 方法：这个方法可以阻止元素的默认行为。例如，当点击一个链接时，可以使用 `event.preventDefault()` 来阻止浏览器跳转到链接的 URL。

```javascript
document.querySelector('a').addEventListener('click', function(event) {
  event.preventDefault();
});
```

2. 使用 `return false`：在一些特定的情况下，可以直接在事件处理函数中使用 `return false` 来阻止默认事件。例如：

```javascript
document.querySelector('form').addEventListener('submit', function() {
  // 执行一些自定义操作

  return false;
});
```

需要注意的是，使用 `return false` 只适用于某些特定的事件，如 `submit`、`click` 等，而不是所有事件。

无论是使用 `event.preventDefault()` 还是 `return false`，都需要在事件处理函数中正确地应用它们，以达到阻止默认事件的目的。



