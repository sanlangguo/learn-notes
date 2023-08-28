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
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_16-v8是怎么通过内联缓存来提升函数执行效率的" tabindex="-1"><a class="header-anchor" href="#_16-v8是怎么通过内联缓存来提升函数执行效率的" aria-hidden="true">#</a> 16-V8是怎么通过内联缓存来提升函数执行效率的</h2><p>本文主要介绍了 V8 是如何通过内联缓存（Inline Cache，IC）来提高函数执行效率的。在 V8 中，获取对象属性值的流程是查找对象的隐藏类，根据隐藏类查找属性偏移量，再根据偏移量获取属性值，这个过程需要重复执行。为了提高效率，V8 使用内联缓存技术来缓存对象属性值的查找结果，从而减少重复查找的次数。</p><h3 id="什么是内联缓存" tabindex="-1"><a class="header-anchor" href="#什么是内联缓存" aria-hidden="true">#</a> 什么是内联缓存？</h3><p>内联缓存是一种加速函数执行的策略。在 V8 执行函数的过程中，会观察函数中的调用点（CallSite）上的关键中间数据，并将这些数据缓存起来。当下次再次执行该函数时，V8 就可以直接利用这些中间数据，节省了再次获取这些数据的过程。因此，V8 利用内联缓存可以有效提升一些重复代码的执行效率。</p><p>为每个函数维护一个反馈向量（FeedBack Vector），反馈向量记录了函数在执行过程中的一些关键中间数据。反馈向量是一个表格，其中每一行对应一个调用点，每一列对应一个隐藏类。当函数被调用时，V8 会根据调用点和参数类型来确定隐藏类，然后查找反馈向量中对应的行和列，如果找到了缓存，则直接使用缓存中的结果；如果没有找到，则进行正常的查找过程，并将结果添加到反馈向量中。</p><h3 id="内联缓存的优化策略" tabindex="-1"><a class="header-anchor" href="#内联缓存的优化策略" aria-hidden="true">#</a> 内联缓存的优化策略</h3><p>V8 使用了多种优化策略来提高内联缓存的效率。</p><h3 id="基于类型的内联缓存" tabindex="-1"><a class="header-anchor" href="#基于类型的内联缓存" aria-hidden="true">#</a> 基于类型的内联缓存</h3><p>基于类型的内联缓存是最简单、最常用的一种优化策略。在 V8 中，每个对象都有一个隐藏类，V8 可以根据隐藏类来确定对象的属性偏移量和类型信息。当函数被调用时，V8 会根据参数类型来确定隐藏类，并将这个隐藏类作为关键中间数据缓存在反馈向量中。下次再次执行该函数时，如果参数类型相同，则可以直接使用缓存中的隐藏类信息。</p><h3 id="基于形状的内联缓存" tabindex="-1"><a class="header-anchor" href="#基于形状的内联缓存" aria-hidden="true">#</a> 基于形状的内联缓存</h3><p>基于形状的内联缓存是一种更加高级的优化策略。在 V8 中，每个隐藏类都有一个形状（Shape），形状是隐藏类的元信息，描述了隐藏类中包含哪些属性和方法。当对象添加或删除属性时，V8 会创建一个新的隐藏类和新的形状。基于形状的内联缓存可以利用这个特性，在对象添加或删除属性时更新缓存。</p><h3 id="基于-map-的内联缓存" tabindex="-1"><a class="header-anchor" href="#基于-map-的内联缓存" aria-hidden="true">#</a> 基于 Map 的内联缓存</h3><p>基于 Map 的内联缓存是一种更加高级、更加灵活的优化策略。在 V8 中，Map 是一种可以动态添加属性和方法的对象类型。基于 Map 的内联缓存可以利用 Map 的动态特性，在运行时动态创建新的 Map 和新的隐藏类，并将它们作为关键中间数据缓存在反馈向量中。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>本文介绍了 V8 是如何通过内联缓存来提高函数执行效率的。内联缓存是一种加速函数执行的策略，它可以缓存函数执行过程中的关键中间数据，从而减少重复查找的次数。V8 使用了多种优化策略来提高内联缓存的效率，包括基于类型、基于形状和基于 Map 的内联缓存。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/v8/16.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _16_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "16.html.vue"]]);
export {
  _16_html as default
};
