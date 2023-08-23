import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.0c09e994.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="async-await-使用同步的方式去写异步代码" tabindex="-1"><a class="header-anchor" href="#async-await-使用同步的方式去写异步代码" aria-hidden="true">#</a> async-await：使用同步的方式去写异步代码</h2><p>本文介绍了使用 Async/Await 的方式来解决异步编程的问题。文章首先介绍了 Promise 解决回调地狱问题的方法，但是使用 Promise 的 then() 方法会让代码充斥着 then，语义化不明显，代码不能很好地表示执行流程。接着，文章介绍了使用 fetch() 方法请求远程资源的例子，展示了使用 Promise 的 then() 方法实现异步编程的复杂性。为了解决这个问题，ES7 引入了 Async/Await，提供了在不阻塞主线程的情况下使用同步代码实现异步访问资源的能力，并且使得代码逻辑更加清晰。</p><p>Async/Await 是 JavaScript 异步编程的一个重大改进，可以使用同步代码的方式来实现异步处理。通过使用 Async/Await，可以更好地表达执行流程，同时支持 try/catch 来捕获异常。文章展示了一个使用 Async/Await 的例子，该例子使用 fetch() 方法请求极客邦的内容和另一个资源，并且使用 try/catch 来捕获异常。</p><p>虽然 Async/Await 可以使异步编程更加清晰和易读，但是很多人都习惯了异步回调的编程思维，对于这种采用同步代码实现异步逻辑的方式，还需要一个转换的过程。此外，Async/Await 也有一些缺点，例如需要等待所有的异步操作完成后才能执行下一步操作，可能会导致性能问题。因此，在实际应用中需要根据具体情况选择合适的异步编程方式。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/20.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "20.html.vue"]]);
export {
  _20_html as default
};
