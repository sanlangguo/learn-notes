
### 上海享物说

* HTTP 和 HTTPS 详细握手和HTTP缓存
* 浏览器的垃圾回收机制和浏览器的渲染原理
* Html 块级元素和行内元素的区别，替换元素（input）的特点
https://segmentfault.com/a/1190000013497383
https://segmentfault.com/a/1190000006835284
* 算法
5.Map,Set,WeakMap
6.css 居中方式


* js 如何获取demo元素
2.动画的简单动效 （圆圈画圆过程）

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(75, 75, 50, 0, 2 * Math.PI);
  ctx.stroke();



### 掌门一对一

1.h5是什么
2.var let const 的区别
https://www.jianshu.com/p/4e9cd99ecbf5
3.如何三栏布局兼容问题
https://segmentfault.com/a/1190000019269901

### 云仓

1.数组map和 forEach 区别， Array.form （便捷数组操作），数组求和
到底有什么区别呢？forEach()方法不会返回执行结果，而是undefined。也就是说，forEach()会修改原来的数组。而map()方法会得到一个新的数组并返回。

数组求和: 
https://segmentfault.com/a/1190000023556599

var arr = [1,2,3];
function sum(arr) {
  return eval(arr.join("+"));
};
console.log(sum(arr));//6

2.css居中的方式
3.margin,padding
4.深拷贝 

### 快云

1.css 上下三栏布局，底部一直在页面底部
  https://codepen.io/una/pen/bGVXPWB
  https://github.com/sanlangguo/learn-notes/wiki/footer-%E4%B8%80%E7%9B%B4%E5%9C%A8%E5%BA%95%E9%83%A8%E4%BD%8D%E7%BD%AE

2.js 原型

3.wekpack 的原理
https://jishuin.proginn.com/p/763bfbd58517

wekpack 5 的更新内容
https://webpack.docschina.org/blog/#popular-posts

4.node js

### 诺亚财富

1.css 左右布局，左固定 兼容写法
https://www.cxyzjd.com/article/yinkaihui/49851773
2.js 各种循环的理解

3.css box-sizing
4.webpack 多页面配置
https://segmentfault.com/a/1190000022499953
5.vue 组件之间的传值

6.js 大文件上传
7.vuex更改组件状态，刷新状态是否改变
https://www.huaweicloud.com/articles/13698538.html
8.终止循环 break return continue
  https://blog.csdn.net/XXJ19950917/article/details/78310346

### JD （偏向原理和基础）

1.rem em vh vw 原理
https://zhuanlan.zhihu.com/p/96721026
2. vue文件编译原理/常见面试题
  https://cloud.tencent.com/developer/article/1601614
  https://github.com/berwin/Blog/issues/18
  https://www.cnblogs.com/skywind/p/14653339.html#12-vuejs-%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%E7%9A%84%E5%8E%9F%E7%90%86
3.css 五种不同颜色圆环
  参考 https://www.zhangxinxu.com/wordpress/2017/11/pure-css-colorful-circle/
  dom地址 https://codepen.io/sanlangguo/pen/abdaqWP
4.js 和 底层（ios android） 沟通原理
  https://www.zoo.team/article/jsbridge

5.this.nextTick() 原理 100次更新dem 执行一次 (更新dom 为什么是异步的)
https://github.com/berwin/Blog/issues/22

6. 盒模型理解 BFC 实现方式 解决了哪些问题

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
  

7. 1像素问题
  https://segmentfault.com/a/1190000007604842
  
8. 小程序原理
https://zhaomenghuan.js.org/blog/wechat-miniprogram-principle-analysis.html#%E5%89%8D%E8%A8%80

### 银科

1.js 数组的方法
2.深浅拷贝
https://segmentfault.com/a/1190000018874254

3.AMD/CMD
https://juejin.cn/post/6844903576309858318#heading-0
https://es6.ruanyifeng.com/#docs/module-loader

4.SSR/SEO
5.css居中
6.最小像素
7.rem px 区别
8.1px 的实现
9.小程序支付，关注公众号组件的限制
10.微信用户授权流程
11.小程序和微信的联动引流
12.微信支付，微信分享，小程序识别二维码
13.webpack 优化
14.vue 双向绑定原理
15.断点续传


### 上海汇付

1.原型和继承
2.this
3.事件循环 await async
4.promise 实现
5.css 三栏布局
6.webpack 核心
7.cookie HTTP-only 不能获取cookie
8.vue 双向绑定原理
9.vue-router hash history 核心理解
https://juejin.cn/post/6921965450742431758
https://www.jianshu.com/p/3b4abc20ae0f
10.减少回流


### 上海银科 二面

1.url浏览器详细渲染
2.直播相关技术
3.前端安全
4.git flow
5.ssl openssl
  https://www.zhihu.com/question/23341334


### 信也科技（拍拍贷）

1.vue react 区别
https://blog.csdn.net/xgangzai/article/details/115301290
2.computed watch methods 区别
3.css 进度条
  https://cloud.tencent.com/developer/article/1572870
4.promise 异步原理
6.react native 原理
7.vue 文件编译原理
8.自身项目的亮点
9.webpack hot 原理
10.node 中间件
11.react hooks
https://github.com/mrdulin/blog/issues/42
https://juejin.cn/post/6844903909698306056#heading-0
12.react setState 同步或者异步

### 美团

1.跨域 cros
2.webpack 原理和 plugin
  https://blog.csdn.net/Aria_Miazzy/article/details/106235716
3.如何提高 webpack 打包速度
4.vue react 生命周期的不同
5.native 怎么 h5沟通
6.h5 怎么沟通 native
8.前端性能指标
9.前端埋点
10.http 请求post, put
11.复杂请求和简单请求 http


### 2021-05-08
uclund
1.xcrf 攻击防护
2.强缓存和弱缓存
https://segmentfault.com/a/1190000015245578
3.图片 url 自定义请求头
4.强刷新，不缓存



### 得物app
2021-08-30
1.vue 响应式原理
2.object.defineProperty() 优缺点
3.vue3 watcher 原理
https://originalix.github.io/2021/06/16/Vue3-%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90-%E5%8D%81-watch-%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86/#
4.react hook 原理--- 为什么是单链表
5.map object 的区别
https://segmentfault.com/a/1190000039989397
6.async/await 与 promise 区别
http://www.ruanyifeng.com/blog/2015/05/async.html
7.事件循环
9.settimeout 内有 promiese.then, 里面的执行顺序
10. get post 区别
11. url 输入的过程
https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work
12. 哪些情况会阻塞 dom 的 渲染

- CSS 不会阻塞 DOM 的解析，但会阻塞 DOM 渲染。
- JS 阻塞 DOM 解析，但浏览器会"偷看"DOM，预先下载相关资源。
- 浏览器遇到 `<script>且没有defer或async属性的 标签时，会触发页面渲染，因而如果前面CSS资源尚未加载完毕时，浏览器会等待它加载完毕在执行脚本`。
- `<script>最好放底部，<link>最好放头部，如果头部同时有<script>与<link>的情况下，最好将<script>放在<link>`

13. 加载中文字体--》
14. webpack 构建过程和优化
15. 强缓存和弱缓存
https://segmentfault.com/a/1190000015245578
16. proxy 的使用场景和使用
17. dns 预加载
https://www.coderxing.com/dns-prefetch.html


### 微盟和平安
1.vue 响应式原理/ vue3， setTimeout, this.$nextTick(), 哪一个先执行
2.computed watch methods 区别, watch -> 相同一次的修改 例如 name ===1 重复修改，watch 会多次触发嘛
3.vue2 组建通信方式，(可以拓展到 vue3), 以及 vuex
4.documentFragment 理解
https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment
5.flex 1
https://zhuanlan.zhihu.com/p/136223806
6.左侧图片宽度固定，右侧文字显示，填充剩余空间，过长显示 。。。
7.浏览器首次渲染的过程，已经怎么去优化
8.在工作当中做的优化工作
9.怎么定位内存泄漏问题
https://juejin.cn/post/6844904048961781774#heading-0
10.项目中前端安全， AES key value 值的获取
11.前端跨域问题
https://segmentfault.com/a/1190000022398875
12.ES6 新属性，promise 理解，多个并发怎么处理
13.怎样实现 bind，call 
https://zhuanlan.zhihu.com/p/94068275
14.js 继承的理解，怎么实现继承的
15.小程序为什么做事件校验，以及小程序的原理
https://developers.weixin.qq.com/community/develop/article/doc/0008a4c4f28f30fe3eb863b2750813
16.闭包 理解 for (var i =0 ..) 
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures
for (var i = 0; i < 5; i++) {
  (function(i) {
   setTimeout(() => {
    console.log(i)
  }, 100)
  })(i)
}

or let

17.怎样终止 ajax 请求
https://axios-http.com/zh/docs/cancellation
https://juejin.cn/post/6844903933735878663#heading-1
https://www.cnblogs.com/echolun/p/15204279.html

18.iframe 怎么通信
https://segmentfault.com/a/1190000021683182

19. js 如何监听 css trasition
https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/transitionend_event

20.js 设计模式


### 2021-09-08 平安二面复试
* 为什么选用vuex, 不用 object 的根本原因
可以使用，vuex 提供的是一种完整的解决方案，看个人怎么选择，在团队开发当中，统一规范
https://vuex.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%E4%B8%8B%E6%88%91%E5%BA%94%E8%AF%A5%E4%BD%BF%E7%94%A8-vuex%EF%BC%9F
* 对技术选型的把握
3.浏览器缓存有几种和区别
https://segmentfault.com/a/1190000017185195
4.前端大数据怎么处理
异步，web worker
https://juejin.cn/post/6844903821278199822#comment

### 微盟二面
1.怎么判断缩放的大小比例
https://www.zhangxinxu.com/wordpress/2021/02/js-if-page-zoom/
2.日期组件的设计
3.星星组件的设计
4.移动端双指旋转角度怎么实现
https://blog.csdn.net/qq_17757973/article/details/54604625
5.vue3 哪些变化
https://v3.cn.vuejs.org/guide/migration/introduction.html#%E6%A6%82%E8%A7%88


补充：常见的算法
https://juejin.cn/post/6947842412102287373#heading-104

vue3 补充题目

watchEffect watch 区别

https://www.zhihu.com/question/462378193

vuu3 响应式原理
https://juejin.cn/post/6858899262596448270#heading-21
--


### 阿里本地生活一面
1.let var 区别
https://www.jianshu.com/p/9f7f053f7204
2.箭头函数， function 区别
https://blog.csdn.net/fish_skyyyy/article/details/113945502
3.写做 webpack 插件嘛

4.vue 常见面试题，计算属性 和 watch 区别
https://www.cnblogs.com/skywind/p/14653339.html#12-vuejs-%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%E7%9A%84%E5%8E%9F%E7%90%86

5.display none visibility hidden opacity 0 区别
https://github.com/sanlangguo/learn-notes/wiki/display-none-visibility-hidden-opacity-0-%E5%8C%BA%E5%88%AB

6.移动端响应式如何做
https://juejin.cn/post/6844904021552005128#heading-6





### 众安保险面试1面

1.UI 组件库怎么控制版本号，或者版本内的依赖升级
2.强缓存和弱缓存
* 

### 众安保险面试2面
* 组件弹框层级(组件设计)
2.typeOf object ,typeOf function
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof

3. 指令 和 组件区别，以及使用场景
组件和自定义指令基本无区别,都是将页面中出现的重复的UI和数据处理,封装起来,提高代码的复用性,同时在项目开发过程中,积累大量封装好的自定义指令或者组件,在后续的项目开发时直接使用,提高开发效率。


使用场景：
代码复用和抽象的主要形式是组件
当需要对普通 DOM 元素进行底层操作，此时就会用到自定义指令
但是，对于大幅度的 DOM 变动，还是应该使用组件

https://segmentfault.com/a/1190000020082673


### 携程 2022-03-29

* react 函数组建如何实现->componentWillUnmount
```

useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
```
* ts 剔除一个属性
```
interface Contact{
  name: string; // 姓名
  phone: string; // 手机
}
// 剔除 phone
type OmitEmailContact = Omit<Contact, 'phone'>;

```
* 静态资源更新的完美解决方案
1. 配置超长时间的本地缓存 —— 节省带宽，提高性能
2. 采用内容摘要作为缓存更新依据 —— 精确的缓存控制
3. 静态资源CDN部署 —— 优化网络请求
4. 更资源发布路径实现非覆盖式发布 —— 平滑升级

* 项目上的经验

```
1. i18 懒加载
2. 
```


* proxy 的兼容性，有没有降级方案

Babel 的 transpiled 和 polyfilled 都没办法支持 Proxy 的功能特性。ES6 是 ES5 的后浪，不是闹的。JS 的世界还有 Babel 搞不定的东西。
核心只有一句：由于 ES5 的限制，Proxy 功能特性无法用 ES5的语法写出来（Proxies cannot be transpiled or polyfilled）


[ios 10, ie 等问题所以导致不升级 vue3](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy#%25E6%25B5%258F%25E8%25A7%2588%25E5%2599%25A8%25E5%2585%25BC%25E5%25AE%25B9%25E6%2580%25A7)



















