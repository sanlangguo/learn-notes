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

```

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

[参考链接](https://www.jianshu.com/p/c7c331ea4fe8)


### js 如何获取demo元素
[参考链接](https://www.jianshu.com/p/6fefda57b51f)

### var let const 的区别
[参考链接](https://www.jianshu.com/p/4e9cd99ecbf5)

### 数组map和 forEach 区别， Array.form （便捷数组操作），数组求和

到底有什么区别呢？forEach()方法不会返回执行结果，而是undefined。也就是说，forEach()会修改原来的数组。而map()方法会得到一个新的数组并返回。

数组求和: [参考链接](https://segmentfault.com/a/1190000023556599)
```
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
[参考链接](https://blog.csdn.net/fish_skyyyy/article/details/113945502)


### 移动端响应式如何做

[参考链接](https://juejin.cn/post/6844904021552005128#heading-6)


### Map Set WeakMap WeakSet 场景
[参考链接](https://juejin.cn/post/6925320069522128909#heading-0)


### JS判断是否是数组的四种做法
[参考链接](https://www.cnblogs.com/echolun/p/10287616.html)


### js 作用域的理解
[参考链接](http://www.imooc.com/article/286497)


### 内存管理
[内存管理 mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management)


### 前端中的事件流
[事件流](https://segmentfault.com/a/1190000013265547)


