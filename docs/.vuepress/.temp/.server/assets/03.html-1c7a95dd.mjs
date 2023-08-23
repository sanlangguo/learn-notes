import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.cbae9f3f.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_03-快属性和慢属性-v8是怎样提升对象属性访问速度的" tabindex="-1"><a class="header-anchor" href="#_03-快属性和慢属性-v8是怎样提升对象属性访问速度的" aria-hidden="true">#</a> 03-快属性和慢属性：V8是怎样提升对象属性访问速度的</h2><p>在本文中，作者介绍了 V8 引擎是如何提升 JavaScript 对象属性访问速度的。V8 引擎在实现对象存储时，并没有完全采用字典的存储方式，这是出于性能的考量。因为字典是非线性的数据结构，查询效率会低于线性的数据结构。因此，V8 引擎采用了一套复杂的存储策略。</p><h3 id="常规属性和排序属性" tabindex="-1"><a class="header-anchor" href="#常规属性和排序属性" aria-hidden="true">#</a> 常规属性和排序属性</h3><p>在 JavaScript 中，对象由一组组属性和值的集合组成，JavaScript 对象像一个字典，字符串作为键名，任意对象可以作为键值，可以通过键名读写键值。然而，在 V8 实现对象存储时，并没有完全采用字典的存储方式。V8 引擎采用了常规属性和排序属性两种存储方式。</p><p>常规属性是指键名为整数的属性，排序属性是指键名为字符串的属性。在 V8 引擎中，常规属性和排序属性分别采用不同的存储方式。常规属性使用元素表存储，排序属性使用属性字典存储。</p><h3 id="快属性和慢属性" tabindex="-1"><a class="header-anchor" href="#快属性和慢属性" aria-hidden="true">#</a> 快属性和慢属性</h3><p>在 V8 引擎中，对象的属性被分为快属性和慢属性两种类型。快属性是指可以在元素表或属性字典中直接访问的属性，访问速度非常快。慢属性是指无法直接访问的属性，需要通过查找原型链或执行 getter 函数才能访问，访问速度较慢。</p><h3 id="隐藏类" tabindex="-1"><a class="header-anchor" href="#隐藏类" aria-hidden="true">#</a> 隐藏类</h3><p>在 V8 引擎中，每个对象都对应一个隐藏类，隐藏类记录了对象的结构信息。当一个新对象被创建时，V8 引擎会根据对象的结构信息创建一个对应的隐藏类，并将该对象与该隐藏类关联起来。如果一个新对象的结构与已有对象相同，则该新对象会与已有对象共享同一个隐藏类。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>通过采用常规属性、排序属性、快属性、慢属性和隐藏类等技术手段，V8 引擎实现了高效的对象存储和访问。这些优化措施使得 V8 引擎成为目前最快的 JavaScript 引擎之一。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/v8/03.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _03_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "03.html.vue"]]);
export {
  _03_html as default
};
