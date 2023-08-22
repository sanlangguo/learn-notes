import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.696937cd.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_18-异步编程-一-v8是如何实现微任务的" tabindex="-1"><a class="header-anchor" href="#_18-异步编程-一-v8是如何实现微任务的" aria-hidden="true">#</a> 18-异步编程（一）：V8是如何实现微任务的</h2><p>本文主要介绍了 JavaScript 中的宏任务和微任务以及 V8 是如何实现微任务的。在 JavaScript 中，宏任务是指消息队列中的等待被主线程执行的事件，而微任务是需要异步执行的函数，执行时机是在主函数执行结束之后、当前宏任务结束之前。微任务可以在实时性和效率之间做一个有效的权衡，并且使用微任务可以改变现有的异步编程模型，使得可以使用同步形式的代码来编写异步调用。</p><h3 id="v8-如何实现微任务" tabindex="-1"><a class="header-anchor" href="#v8-如何实现微任务" aria-hidden="true">#</a> V8 如何实现微任务？</h3><p>V8 是 JavaScript 的引擎之一，它通过事件循环机制来实现微任务。具体来说，V8 会在每个宏任务执行结束时，检查是否存在微任务，如果存在，则会按照添加顺序依次执行这些微任务，直到所有微任务执行完毕，才会开始执行下一个宏任务。在执行微任务时，V8 会优先处理 Promise 的回调函数，然后是 MutationObserver 和其他微任务。</p><h3 id="微任务的优势" tabindex="-1"><a class="header-anchor" href="#微任务的优势" aria-hidden="true">#</a> 微任务的优势</h3><p>相对于宏任务，微任务具有以下优势：</p><p>精度更高：由于微任务是在主函数结束后、当前宏任务结束前执行的，因此可以更准确地控制异步操作的执行时机。</p><p>可以使用同步形式的代码编写异步调用：使用 Promise 等技术可以使异步操作的代码看起来更像同步代码。</p><p>可以避免出现“回调地狱”：使用 Promise 等技术可以避免出现多层嵌套的回调函数，使代码更易于阅读和维护。</p><h3 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h3><p>微任务是基于消息队列、事件循环、UI主线程还有堆栈而来的，然后基于微任务，又可以延伸出协程、Promise、Generator、await/async等现代前端经常使用的一些技术。理解这些技术之间的关系和作用可以帮助开发者更好地理解和应用异步编程技术。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/v8/18.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _18_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "18.html.vue"]]);
export {
  _18_html as default
};
