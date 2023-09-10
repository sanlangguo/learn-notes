import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.bf7dc909.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_15-消息队列和事件循环-页面是怎么-活-起来的" tabindex="-1"><a class="header-anchor" href="#_15-消息队列和事件循环-页面是怎么-活-起来的" aria-hidden="true">#</a> 15-消息队列和事件循环：页面是怎么“活”起来的？</h2><p>本文讲述了消息队列和事件循环系统在浏览器页面中的作用。每个渲染进程都有一个主线程，主线程非常繁忙，需要处理DOM、计算样式、处理布局、处理JavaScript任务以及各种输入事件。要让这些不同类型的任务在主线程中有条不紊地执行，需要一个系统来统筹调度这些任务，这个系统就是消息队列和事件循环系统。</p><p>为了更好地理解事件循环机制，文章从最简单的场景开始分析，以一系列简单的任务为例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>任务<span class="token number">1</span>：<span class="token number">1</span><span class="token operator">+</span><span class="token number">2</span>
任务<span class="token number">2</span>：<span class="token number">20</span><span class="token operator">/</span><span class="token number">5</span>
任务<span class="token number">3</span>：<span class="token number">7</span><span class="token operator">*</span><span class="token number">8</span>
任务<span class="token number">4</span>：打印出任务<span class="token number">1</span>、任务<span class="token number">2</span>、任务<span class="token number">3</span>的运算结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些任务按照顺序写进主线程里，等线性执行完所有任务后再打印出结果。但是在实际情况下，页面中的任务是异步的，不是按照顺序依次执行的。因此需要引入消息队列和事件循环系统。</p><p>消息队列是一种数据结构，用来存储待执行的任务。当一个异步任务完成时，它会被放入消息队列中等待执行。而事件循环是一个不断运行的程序，它从消息队列中取出任务并执行。</p><p>在浏览器中，事件循环系统由以下几个部分组成：</p><ol><li>主线程：负责处理所有的JavaScript代码、渲染和用户交互事件。</li><li>消息队列：用来存储待执行的任务。</li><li>事件循环：不断地从消息队列中取出任务并执行。</li></ol><p>当一个异步任务完成时，它会被放入消息队列中等待执行。当主线程空闲时，事件循环会从消息队列中取出一个任务并执行。如果消息队列为空，则事件循环会一直等待，直到有新的任务被加入到消息队列中。</p><p>文章还介绍了JavaScript中的几种异步操作：</p><ol><li><p>定时器：setTimeout和setInterval可以用来在指定的时间间隔后执行代码。</p></li><li><p>XMLHttpRequest：用于向服务器发送请求并接收响应。</p></li><li><p>Promise：用于处理异步操作的结果。 最后，文章提到了一些关于事件循环系统的注意事项：</p></li><li><p>长时间运行的JavaScript代码会阻塞主线程并导致页面卡顿。</p></li><li><p>尽量避免使用同步代码，因为它会阻塞主线程。</p></li><li><p>尽量使用requestAnimationFrame代替setTimeout/setInterval来实现动画效果。</p></li><li><p>理解JavaScript异步操作的原理和机制可以帮助我们更好地编写高效的代码。</p></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/15.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _15_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "15.html.vue"]]);
export {
  _15_html as default
};
