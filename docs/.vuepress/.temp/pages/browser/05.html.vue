<template><div><h2 id="_05-渲染流程-上-html、css和javascript-是如何变成页面的" tabindex="-1"><a class="header-anchor" href="#_05-渲染流程-上-html、css和javascript-是如何变成页面的" aria-hidden="true">#</a> 05-渲染流程（上）：HTML、CSS和JavaScript，是如何变成页面的？</h2>
<p>本文主要介绍了渲染流程的概念和各个子阶段的作用，以及如何理解HTML、CSS和JavaScript的关系。</p>
<h3 id="渲染流程" tabindex="-1"><a class="header-anchor" href="#渲染流程" aria-hidden="true">#</a> 渲染流程</h3>
<p>渲染流程是将HTML、CSS、JavaScript等文件转化为屏幕上像素的过程。这个过程经过了多个子阶段，包括构建DOM树、样式计算、布局阶段、分层、绘制、分块、光栅化和合成等。</p>
<h3 id="html、css和javascript的关系" tabindex="-1"><a class="header-anchor" href="#html、css和javascript的关系" aria-hidden="true">#</a> HTML、CSS和JavaScript的关系</h3>
<p>HTML是由标记和文本组成的，浏览器会根据标签的语义来正确展示HTML内容。CSS是由选择器和属性组成，可以改变HTML的字体颜色、大小等信息。JavaScript可以使网页的内容“动”起来，并修改CSS样式值。</p>
<p>子阶段内容
每个子阶段有其输入内容、处理过程和输出内容。具体子阶段包括：</p>
<ol>
<li>构建DOM树</li>
<li>样式计算</li>
<li>布局阶段</li>
<li>分层</li>
<li>绘制</li>
<li>分块</li>
<li>光栅化</li>
<li>合成</li>
</ol>
</div></template>


