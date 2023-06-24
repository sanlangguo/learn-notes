<template><div><h2 id="_22-dom树-javascript是如何影响dom树构建的" tabindex="-1"><a class="header-anchor" href="#_22-dom树-javascript是如何影响dom树构建的" aria-hidden="true">#</a> 22-DOM树：JavaScript是如何影响DOM树构建的？</h2>
<h3 id="什么是dom" tabindex="-1"><a class="header-anchor" href="#什么是dom" aria-hidden="true">#</a> 什么是DOM</h3>
<p>DOM是表述HTML的内部数据结构，它会将Web页面和JavaScript脚本连接起来，并过滤一些不安全的内容。从页面的视角来看，DOM是生成页面的基础数据结构。从JavaScript脚本视角来看，DOM提供给JavaScript脚本操作的接口，通过这套接口，JavaScript可以对DOM结构进行访问，从而改变文档的结构、样式和内容。从安全视角来看，DOM是一道安全防护线，一些不安全的内容在DOM解析阶段就被拒之门外了。</p>
<h3 id="dom树如何生成" tabindex="-1"><a class="header-anchor" href="#dom树如何生成" aria-hidden="true">#</a> DOM树如何生成</h3>
<p>在渲染引擎内部，有一个叫HTML解析器（HTMLParser）的模块，它的职责就是负责将HTML字节流转换为DOM结构。在开始介绍HTML解析器之前，需要先搞清楚HTML解析器是如何工作的。HTML解析器是等整个HTML文档加载完成之后开始解析的。</p>
<h3 id="javascript对dom树构建的影响" tabindex="-1"><a class="header-anchor" href="#javascript对dom树构建的影响" aria-hidden="true">#</a> JavaScript对DOM树构建的影响</h3>
<p>在解析过程中遇到JavaScript脚本，DOM解析器会停止解析HTML，将控制权交给JavaScript引擎，等到JavaScript执行完毕后再继续解析HTML。这就意味着如果JavaScript代码执行时间过长，会导致页面渲染延迟。为了避免这种情况发生，可以将JavaScript代码放在页面底部或使用异步加载。</p>
<p>另外，在处理跨站点资源时，DOM解析器会检查资源是否符合同源策略，如果不符合则会拒绝该资源。但是可以通过跨域资源共享（CORS）或JSONP等方式来解决这个问题。</p>
<p>总之，JavaScript对DOM树的影响是通过访问和修改DOM树来实现的。而在处理跨站点资源时需要谨慎处理以确保安全。</p>
</div></template>


