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
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_20-垃圾回收-一-v8的两个垃圾回收器是如何工作的" tabindex="-1"><a class="header-anchor" href="#_20-垃圾回收-一-v8的两个垃圾回收器是如何工作的" aria-hidden="true">#</a> 20-垃圾回收（一）：V8的两个垃圾回收器是如何工作的</h2><h3 id="垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#垃圾回收机制" aria-hidden="true">#</a> 垃圾回收机制</h3><p>JavaScript 是一门自动垃圾回收的语言，也就是说，开发者不需要手动回收垃圾数据，而是由 V8 引擎的垃圾回收器来完成。在 JavaScript 中，垃圾数据是指一些不再被程序引用的数据，这些数据会占用内存空间，影响程序的性能。因此，垃圾回收机制是非常重要的。</p><h3 id="v8-引擎中的两个垃圾回收器" tabindex="-1"><a class="header-anchor" href="#v8-引擎中的两个垃圾回收器" aria-hidden="true">#</a> V8 引擎中的两个垃圾回收器</h3><p>为了更高效地回收垃圾，V8 引擎引入了两个垃圾回收器，分别针对不同的场景：</p><h3 id="新生代垃圾回收器-scavenge" tabindex="-1"><a class="header-anchor" href="#新生代垃圾回收器-scavenge" aria-hidden="true">#</a> 新生代垃圾回收器（Scavenge）</h3><p>适用于存活时间较短的对象 实现方式：将内存空间分为两个相等的半区域（From 空间和 To 空间），对象首先被分配到 From 空间中，当 From 空间快要被占满时，将其中存活的对象复制到 To 空间中，然后交换 From 空间和 To 空间的角色，完成一次垃圾回收。</p><h3 id="老生代垃圾回收器-mark-sweep-mark-compact" tabindex="-1"><a class="header-anchor" href="#老生代垃圾回收器-mark-sweep-mark-compact" aria-hidden="true">#</a> 老生代垃圾回收器（Mark-Sweep &amp; Mark-Compact）</h3><p>适用于存活时间较长的对象 实现方式：将内存空间分为两个部分（新生代空间和老生代空间），新生代空间采用 Scavenge 回收算法，老生代空间采用 Mark-Sweep 和 Mark-Compact 两种算法。Mark-Sweep 算法首先标记所有存活的对象，然后清除所有未标记的对象；Mark-Compact 算法则是在 Mark-Sweep 的基础上，将所有存活的对象向一端移动，并清除另一端的所有对象。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>本文介绍了 JavaScript 中的垃圾回收机制以及 V8 引擎中的两个垃圾回收器。了解这些知识可以帮助开发者更好地理解 JavaScript 在内存管理方面的工作原理，并且可以优化程序性能。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/v8/20.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "20.html.vue"]]);
export {
  _20_html as default
};
