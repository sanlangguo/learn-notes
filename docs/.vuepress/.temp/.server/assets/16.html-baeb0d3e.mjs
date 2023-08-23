import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.3b32e088.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="webapi-settimeout是如何实现的" tabindex="-1"><a class="header-anchor" href="#webapi-settimeout是如何实现的" aria-hidden="true">#</a> WebAPI：setTimeout是如何实现的？</h2><p>本文介绍了 setTimeout 这个 WebAPI 的工作原理和使用方法。</p><h3 id="settimeout-的基本使用方法" tabindex="-1"><a class="header-anchor" href="#settimeout-的基本使用方法" aria-hidden="true">#</a> setTimeout 的基本使用方法</h3><p>setTimeout 是一个定时器，用于指定某个函数在多少毫秒之后执行。它会返回一个整数，表示定时器的编号，同时你还可以通过该编号来取消这个定时器。</p><p>以下是 setTimeout 的基本使用方法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">showName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;极客时间&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> timerID <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>showName<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上述代码，会在 200 毫秒之后调用 showName 函数，并输出“极客时间”四个字。</p><h3 id="浏览器如何实现-settimeout" tabindex="-1"><a class="header-anchor" href="#浏览器如何实现-settimeout" aria-hidden="true">#</a> 浏览器如何实现 setTimeout</h3><p>要了解定时器的工作原理，需要先了解事件循环系统。渲染进程中所有运行在主线程上的任务都需要先添加到消息队列，然后事件循环系统再按照顺序执行消息队列中的任务。</p><p>当调用 setTimeout 方法时，浏览器会将该定时器的回调函数添加到消息队列中，并设置一个定时器。当定时器到期时，浏览器会将该定时器对应的任务添加到消息队列中，等待事件循环系统执行。</p><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3><p>定时器的最短时间间隔为 4 毫秒。 在同一个作用域中，多次调用 setTimeout 不会因为前一个定时器还未执行而阻塞后一个定时器。 如果回调函数中抛出了异常，那么这个异常会被捕获，并且不会影响其他定时器和事件的执行。 取消定时器需要使用 clearTimeout 方法，并传入对应的定时器编号。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>本文介绍了 setTimeout 这个 WebAPI 的工作原理和使用方法。了解定时器的工作原理对于编写高效的前端代码非常有帮助。在使用 setTimeout 时需要注意最短时间间隔、多次调用不会阻塞、异常处理和取消定时器等问题。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/16.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _16_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "16.html.vue"]]);
export {
  _16_html as default
};
