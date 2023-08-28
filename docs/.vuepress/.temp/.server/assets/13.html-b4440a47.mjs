import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.80b21bdd.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_13-垃圾回收-垃圾数据是如何自动回收的" tabindex="-1"><a class="header-anchor" href="#_13-垃圾回收-垃圾数据是如何自动回收的" aria-hidden="true">#</a> 13-垃圾回收：垃圾数据是如何自动回收的？</h2><h3 id="手动回收策略" tabindex="-1"><a class="header-anchor" href="#手动回收策略" aria-hidden="true">#</a> 手动回收策略</h3><p>手动回收策略是指在编写代码时，需要手动分配和销毁内存空间。例如 C/C++ 语言中，使用 malloc 函数分配内存空间，使用 free 函数释放内存空间。手动回收策略需要程序员自己管理内存，如果管理不当，容易导致内存泄漏等问题。</p><h3 id="自动回收策略" tabindex="-1"><a class="header-anchor" href="#自动回收策略" aria-hidden="true">#</a> 自动回收策略</h3><p>自动回收策略是指在编写代码时，不需要手动分配和销毁内存空间，而是由垃圾回收器来自动回收不再使用的垃圾数据。例如 JavaScript、Java、Python 等语言都采用自动回收策略。自动回收策略可以减少内存泄漏等问题，但也可能会导致一些性能问题。</p><h3 id="javascript-的垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#javascript-的垃圾回收机制" aria-hidden="true">#</a> JavaScript 的垃圾回收机制</h3><p>JavaScript 中的垃圾回收机制是指如何自动回收不再使用的垃圾数据。JavaScript 中的垃圾回收器会定期扫描内存中的对象，标记出不再使用的对象，并将其释放。JavaScript 中的垃圾回收机制基于引用计数和标记清除两种算法。</p><h3 id="引用计数算法" tabindex="-1"><a class="header-anchor" href="#引用计数算法" aria-hidden="true">#</a> 引用计数算法</h3><p>引用计数算法是指在内存中为每个对象维护一个引用计数器，记录有多少个地方引用了该对象。当引用计数器为 0 时，说明该对象已经不再被使用，可以被释放。引用计数算法简单、实现方便，但会出现循环引用等问题。</p><h3 id="标记清除算法" tabindex="-1"><a class="header-anchor" href="#标记清除算法" aria-hidden="true">#</a> 标记清除算法</h3><p>标记清除算法是指在内存中为每个对象添加一个标记位，标记是否被引用。当垃圾回收器扫描内存时，会将所有被引用的对象标记为“存活”，未被标记的对象即为垃圾数据，可以被释放。标记清除算法可以解决循环引用等问题，但会出现一些性能问题。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>本文详细介绍了 JavaScript 中的垃圾回收机制，包括手动回收和自动回收两种策略的区别和优缺点，以及 JavaScript 中的引用计数和标记清除两种算法。了解垃圾回收机制可以帮助开发者编写更加高效、健壮的代码。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/13.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _13_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "13.html.vue"]]);
export {
  _13_html as default
};
