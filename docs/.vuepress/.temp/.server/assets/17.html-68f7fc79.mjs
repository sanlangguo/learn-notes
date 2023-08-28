import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.0c33dd42.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_17-消息队列-v8是怎么实现回调函数的" tabindex="-1"><a class="header-anchor" href="#_17-消息队列-v8是怎么实现回调函数的" aria-hidden="true">#</a> 17-消息队列：V8是怎么实现回调函数的</h2><p>本文主要介绍了回调函数的概念以及V8是如何实现回调函数的。回调函数是指在调用API时需要传入的函数，用于处理执行结果。本文介绍了同步回调和异步回调的区别，以及它们在执行过程中的不同表现。</p><h3 id="什么是回调函数" tabindex="-1"><a class="header-anchor" href="#什么是回调函数" aria-hidden="true">#</a> 什么是回调函数？</h3><p>回调函数是一种函数，具有函数的所有特征，包括参数和返回值。不同之处在于，回调函数需要作为参数传递给另一个函数，然后在该函数内部或宿主环境中被调用。回调函数有两种形式：同步回调和异步回调。同步回调函数在执行函数内部被执行，而异步回调函数则在执行函数外部被执行。</p><h3 id="v8如何实现回调函数" tabindex="-1"><a class="header-anchor" href="#v8如何实现回调函数" aria-hidden="true">#</a> V8如何实现回调函数？</h3><p>V8引擎使用消息队列来实现回调函数。当我们调用API时，会将回调函数添加到消息队列中。当主线程空闲时，V8引擎会从消息队列中取出一个回调函数，并将其作为任务加入到主线程的任务队列中。主线程会依次执行任务队列中的任务，从而执行回调函数。</p><p>在执行任务队列中的任务时，如果遇到耗时的操作，例如I/O操作或者计时器等待，V8引擎会将这些操作交给其他线程或进程来处理。当这些操作完成后，V8引擎会将对应的回调函数添加到消息队列中，等待主线程空闲时执行。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>通过本文的介绍，我们了解了回调函数的概念以及V8引擎是如何实现回调函数的。了解这些内容可以帮助我们更好地理解浏览器中的Web API工作原理，以及宏任务和微任务之间的区别。同时，它也是理解异步编程模型async/await的基础。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/v8/17.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _17_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "17.html.vue"]]);
export {
  _17_html as default
};
