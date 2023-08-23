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
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_12-栈空间和堆空间-数据是如何存储的" tabindex="-1"><a class="header-anchor" href="#_12-栈空间和堆空间-数据是如何存储的" aria-hidden="true">#</a> 12-栈空间和堆空间：数据是如何存储的？</h2><h3 id="javascript-的内存机制" tabindex="-1"><a class="header-anchor" href="#javascript-的内存机制" aria-hidden="true">#</a> JavaScript 的内存机制</h3><p>JavaScript 的内存机制是指如何分配和管理内存，以及如何回收不再使用的内存。虽然 JavaScript 并不需要直接去管理内存，但在实际项目中，为了避免一些不必要的问题，开发者还是需要了解数据在内存中的存储方式。</p><h3 id="栈空间和堆空间" tabindex="-1"><a class="header-anchor" href="#栈空间和堆空间" aria-hidden="true">#</a> 栈空间和堆空间</h3><p>JavaScript 中的内存分为栈空间和堆空间。栈空间用于存储基本类型数据和一些对象的引用，而堆空间用于存储复杂对象（如数组和函数）等数据。</p><h3 id="javascript-是一种动态类型语言" tabindex="-1"><a class="header-anchor" href="#javascript-是一种动态类型语言" aria-hidden="true">#</a> JavaScript 是一种动态类型语言</h3><p>JavaScript 是一种动态类型语言，这意味着变量的类型可以在运行时动态改变。这也就导致了在代码中声明一个变量时，其类型是不确定的。因此，在声明一个变量时，JavaScript 会为其分配一个指针，并将其存储在栈空间中。</p><h3 id="数据在内存中的存储方式" tabindex="-1"><a class="header-anchor" href="#数据在内存中的存储方式" aria-hidden="true">#</a> 数据在内存中的存储方式</h3><p>当我们声明一个变量时，JavaScript 会为其分配一个指针，并将其存储在栈空间中。如果该变量是一个基本类型，则直接将其值存储在栈空间中；如果该变量是一个对象，则将其引用存储在栈空间中，并将对象本身存储在堆空间中。</p><p>在代码中，当我们将一个对象赋值给另一个变量时，实际上是将该对象的引用复制给了另一个变量。因此，当我们修改其中一个变量所引用的对象时，另一个变量也会受到影响。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>本文从栈空间和堆空间的概念出发，详细介绍了 JavaScript 中数据在内存中的存储方式。同时，还介绍了 JavaScript 是一种动态类型语言的特点，以及这种特点对数据的存储方式造成的影响。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/12.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _12_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "12.html.vue"]]);
export {
  _12_html as default
};
