<template><div><h2 id="_2章-javascript-是通过元素插入到-html-页面中的。这个元素可用于把-javascript-代码嵌入到" tabindex="-1"><a class="header-anchor" href="#_2章-javascript-是通过元素插入到-html-页面中的。这个元素可用于把-javascript-代码嵌入到" aria-hidden="true">#</a> [[2章]] JavaScript 是通过<script>元素插入到 HTML 页面中的。这个元素可用于把 JavaScript 代码嵌入到</h2>
<p>:PROPERTIES:
:todo: 1606660439707
:END:
HTML 页面中，跟其他标记混合在一起，也可用于引入保存在外部文件中的 JavaScript。本章的重点可
以总结如下。</p>
<h2 id="doing-事实上" tabindex="-1"><a class="header-anchor" href="#doing-事实上" aria-hidden="true">#</a> DOING 事实上</h2>
<p>:PROPERTIES:
:canceled: 1606661041805
:doing: 1606661050539
:END:</p>
<h2 id="embed-要包含外部-javascript-文件-必须将-src-属性设置为要包含文件的-url。文件可以跟网页在同一台服务器上-也可以位于完全不同的域。" tabindex="-1"><a class="header-anchor" href="#embed-要包含外部-javascript-文件-必须将-src-属性设置为要包含文件的-url。文件可以跟网页在同一台服务器上-也可以位于完全不同的域。" aria-hidden="true">#</a> {{{embed [[要包含外部 JavaScript 文件，必须将 src 属性设置为要包含文件的 URL。文件可以跟网页在同一台服务器上，也可以位于完全不同的域。]}}</h2>
<h2 id="所有元素会依照它们在网页中出现的次序被解释。在不使用-defer-和-async-属性的" tabindex="-1"><a class="header-anchor" href="#所有元素会依照它们在网页中出现的次序被解释。在不使用-defer-和-async-属性的" aria-hidden="true">#</a> 所有<script>元素会依照它们在网页中出现的次序被解释。在不使用 defer 和 async 属性的</h2>
<p>情况下，包含在<script>元素中的代码必须严格按次序解释。
 对不推迟执行的脚本，浏览器必须解释完位于<script>元素中的代码，然后才能继续渲染页面
的剩余部分。为此，通常应该把<script>元素放到页面末尾，介于主内容之后及</body>标签
之前。
 可以使用 defer 属性把脚本推迟到文档渲染完毕后再执行。推迟的脚本原则上按照它们被列出
的次序执行。
 可以使用 async 属性表示脚本不需要等待其他脚本，同时也不阻塞文档渲染，即异步加载。异
步脚本不能保证按照它们在页面中出现的次序执行。
 通过使用<noscript>元素，可以指定在浏览器不支持脚本时显示的内容。如果浏览器支持并启
用脚本，则<noscript>元素中的任何内容都不会被渲染。</p>
</div></template>


