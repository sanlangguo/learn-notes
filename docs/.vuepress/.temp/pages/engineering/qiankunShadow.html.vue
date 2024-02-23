<template><div><h3 id="js-沙箱" tabindex="-1"><a class="header-anchor" href="#js-沙箱" aria-hidden="true">#</a> JS 沙箱</h3>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/7/17326a9ab874b122~tplv-t2oaga2asx-zoom-in-crop-mark:1512:0:0:0.awebp" alt="img"></p>
<h3 id="样式隔离方案" tabindex="-1"><a class="header-anchor" href="#样式隔离方案" aria-hidden="true">#</a> 样式隔离方案</h3>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/7/17326a9ad800f668~tplv-t2oaga2asx-zoom-in-crop-mark:1512:0:0:0.awebp" alt="img"></p>
<h4 id="qiankun2-0" tabindex="-1"><a class="header-anchor" href="#qiankun2-0" aria-hidden="true">#</a> qiankun2.0</h4>
<p>当然来到 qiankun2.0 之后，我们追加了一个新的选项，叫作<strong>严格样式隔离</strong>，不知道大家有没有使用过。</p>
<p>其实严格样是隔离代表 Shadow DOM。Shadow DOM 是可以真正的做到 CSS 之间完全隔离的，在 Shadow Boundary 这个阴影边界阻隔之下，主应用的样式和子应用的样式可以完完全全的切分开来。</p>
<p>但是绝大部分情况下，你还是不能无脑的开启严格样式隔离的。原因之前的同学也已经提到过一些了，比如说你在使用一些弹窗组件的时候（弹窗很多情况下都是默认添加到了 <code v-pre>document.body</code> ）这个时候它就跳过了阴影边界，跑到了主应用里面，样式就丢了。又比方说你子应用使用的是 React 技术栈，而 React 事件代理其实是挂在 <code v-pre>document</code> 上的，它也会出一些问题。所以实践里当你开启 Shadow DOM 之后，当你的子应用可能会遇到一些奇怪的错误，这些错误需要你一一的去手动修复，这是比较累的一个过程。</p>
<p>我们提供了 Shadow DOM 这么一种样式隔离方式。但是实际使用中还是工程化的手段最为可靠、最为简单。当然在允许的情况下，大家还是可以去尝试开启严格样式隔离，毕竟这才是真正的隔离。</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/7/17326a9ade277fd7~tplv-t2oaga2asx-zoom-in-crop-mark:1512:0:0:0.awebp" alt="img"></p>
<h3 id="应用通信" tabindex="-1"><a class="header-anchor" href="#应用通信" aria-hidden="true">#</a> 应用通信</h3>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/7/17326a9b01c8ca95~tplv-t2oaga2asx-zoom-in-crop-mark:1512:0:0:0.awebp" alt="img"></p>
<p><a href="https://juejin.cn/post/6846687602439897101#heading-21" target="_blank" rel="noopener noreferrer">参考<ExternalLinkIcon/></a></p>
</div></template>


