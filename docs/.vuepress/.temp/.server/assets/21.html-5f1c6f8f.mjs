import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.d4b4a16d.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_21-垃圾回收-二-v8是如何优化垃圾回收器执行效率的" tabindex="-1"><a class="header-anchor" href="#_21-垃圾回收-二-v8是如何优化垃圾回收器执行效率的" aria-hidden="true">#</a> 21-垃圾回收（二）：V8是如何优化垃圾回收器执行效率的</h2><p>本文主要介绍了 V8 引擎是如何通过优化垃圾回收器的执行效率来提高 JavaScript 程序的性能。</p><h3 id="全停顿" tabindex="-1"><a class="header-anchor" href="#全停顿" aria-hidden="true">#</a> 全停顿</h3><p>由于 JavaScript 是运行在主线程之上的，一旦执行垃圾回收算法，都需要将正在执行的 JavaScript 脚本暂停下来，待垃圾回收完毕后再恢复脚本执行。这种行为叫做全停顿（Stop-The-World）。全停顿会导致主线程上的其他任务暂停，从而影响程序的性能和用户体验。</p><h3 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h3><p>为了解决全停顿而造成的用户体验问题，V8 团队通过添加并行、并发和增量等垃圾回收技术，来提高垃圾回收器的执行效率。这些技术主要从两个方面来解决垃圾回收效率问题：</p><p>将一个完整的垃圾回收任务拆分成多个小任务，消灭单个长的垃圾回收任务。 将标记对象、移动对象等任务转移到后台线程中执行，减少对主线程的占用。</p><h3 id="并行" tabindex="-1"><a class="header-anchor" href="#并行" aria-hidden="true">#</a> 并行</h3><p>并行是指在多个 CPU 上同时执行多个任务。V8 引擎使用了并行标记和并行清理两种技术来提高垃圾回收器的执行效率。</p><p>并行标记：将标记对象的任务分配给多个 CPU 执行，从而减少标记阶段的时间。V8 引擎使用了增量标记和并行标记两种技术来实现并行标记。</p><p>并行清理：将清理对象的任务分配给多个 CPU 执行，从而减少清理阶段的时间。V8 引擎使用了增量清理和并行清理两种技术来实现并行清理。</p><h3 id="并发" tabindex="-1"><a class="header-anchor" href="#并发" aria-hidden="true">#</a> 并发</h3><p>并发是指在单个 CPU 上交替执行多个任务。V8 引擎使用了增量标记和增量整理两种技术来实现并发垃圾回收。</p><p>增量标记：将标记对象的任务分成多个阶段，在每个阶段之间执行 JavaScript 代码。这样可以让垃圾回收过程与 JavaScript 代码交替执行，减少全停顿的时间。</p><p>增量整理：将整理对象的任务分成多个阶段，在每个阶段之间执行 JavaScript 代码。这样可以让垃圾回收过程与 JavaScript 代码交替执行，减少全停顿的时间。</p><h3 id="增量" tabindex="-1"><a class="header-anchor" href="#增量" aria-hidden="true">#</a> 增量</h3><p>增量是指将一个完整的垃圾回收任务分成多个小任务，在每个小任务之间执行 JavaScript 代码。这样可以让垃圾回收过程与 JavaScript 代码交替执行，减少全停顿的时间。V8 引擎使用了增量标记、增量整理和增量清理三种技术来实现增量垃圾回收。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>V8 引擎通过添加并行、并发和增量等垃圾回收技术，来提高垃圾回收器的执行效率，从而提高 JavaScript 程序的性能。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/v8/21.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _21_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "21.html.vue"]]);
export {
  _21_html as default
};
