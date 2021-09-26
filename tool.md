#### npm 发包者必读
[发包者必读](https://juejin.cn/post/6844903870678695943#heading-0)

#### http 缓存
[mdn 缓存介绍](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching)

[浏览器的强缓存与弱缓存](https://segmentfault.com/a/1190000015245578)


#### 输入 url 的浏览器渲染过程

[渲染页面：浏览器的工作原理 mdn](https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work)

#### 浏览器缓存原理以及本地存储
[浏览器缓存原理以及本地存储](https://segmentfault.com/a/1190000017185195)

#### wekpack 5 的更新内容
[wekpack 官网介绍](https://webpack.docschina.org/blog/#popular-posts)

#### wekpack 原理及常见的面试题
[2020年webpack面试题](https://blog.csdn.net/Aria_Miazzy/article/details/106235716)

#### webpack如何提高打包速度和工程优化
[webpack如何提高打包速度](https://www.cnblogs.com/Joe-and-Joan/p/12701767.html)

#### 哪些情况会阻塞 dom 的 渲染

- CSS 不会阻塞 DOM 的解析，但会阻塞 DOM 渲染。
- JS 阻塞 DOM 解析，但浏览器会"偷看"DOM，预先下载相关资源。
- 浏览器遇到 <script>且没有defer或async属性的 标签时，会触发页面渲染，因而如果前面CSS资源尚未加载完毕时，浏览器会等待它加载完毕在执行脚本。
- <script>最好放底部，<link>最好放头部，如果头部同时有<script>与<link>的情况下，最好将<script>放在<link>
