<template><div><h2 id="_18-宏任务和微任务-不是所有任务都是一个待遇" tabindex="-1"><a class="header-anchor" href="#_18-宏任务和微任务-不是所有任务都是一个待遇" aria-hidden="true">#</a> 18-宏任务和微任务：不是所有任务都是一个待遇</h2>
<h3 id="浏览器的消息循环系统" tabindex="-1"><a class="header-anchor" href="#浏览器的消息循环系统" aria-hidden="true">#</a> 浏览器的消息循环系统</h3>
<p>浏览器的消息循环系统包括消息队列和事件循环机制。主线程通过一个for循环，不断地从消息队列中取出任务并执行任务。消息队列中的任务称为宏任务。</p>
<h3 id="宏任务" tabindex="-1"><a class="header-anchor" href="#宏任务" aria-hidden="true">#</a> 宏任务</h3>
<p>宏任务包括渲染事件、用户交互事件、JavaScript脚本执行事件和网络请求完成、文件读写完成事件。宏任务是以粗时间颗粒度为单位的，执行时间较长，实时性较低。</p>
<h3 id="微任务" tabindex="-1"><a class="header-anchor" href="#微任务" aria-hidden="true">#</a> 微任务</h3>
<p>微任务是一种实时性高、执行顺序优先于宏任务的任务。常见的微任务包括MutationObserver、Promise以及以Promise为基础开发出来的其他技术。</p>
<h3 id="宏任务和微任务的异同点" tabindex="-1"><a class="header-anchor" href="#宏任务和微任务的异同点" aria-hidden="true">#</a> 宏任务和微任务的异同点</h3>
<p>宏任务和微任务都是在主线程上执行的任务，但它们之间存在一些区别。宏任务是以粗时间颗粒度为单位的，执行时间较长，实时性较低；微任务是以细时间颗粒度为单位的，执行时间较短，实时性较高。在编写代码时，应根据实际情况选择合适的任务类型。</p>
</div></template>


