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
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_26-虚拟dom-虚拟dom和实际的dom有何不同" tabindex="-1"><a class="header-anchor" href="#_26-虚拟dom-虚拟dom和实际的dom有何不同" aria-hidden="true">#</a> 26-虚拟DOM：虚拟DOM和实际的DOM有何不同？</h2><p>本文主要介绍虚拟DOM的概念，以及虚拟DOM是如何解决实际DOM的缺陷的。同时，本文还将从双缓存和MVC的视角来聊聊虚拟DOM。</p><h3 id="dom的缺陷" tabindex="-1"><a class="header-anchor" href="#dom的缺陷" aria-hidden="true">#</a> DOM的缺陷</h3><p>文章首先指出了DOM的缺陷，即通过JavaScript操纵DOM会影响整个渲染流水线，对DOM进行不当操作还会降低渲染效率。在复杂的页面或单页应用中，这些问题会对用户体验产生较大影响。</p><h3 id="虚拟dom的解决方案" tabindex="-1"><a class="header-anchor" href="#虚拟dom的解决方案" aria-hidden="true">#</a> 虚拟DOM的解决方案</h3><p>为了解决DOM的缺陷，本文介绍了虚拟DOM的概念。虚拟DOM是一个轻量级的JavaScript对象，它是对实际DOM的一种抽象表示。虚拟DOM可以在内存中进行操作，而不会直接影响实际DOM。</p><p>当虚拟DOM发生变化时，可以使用Diff算法将其与原来的虚拟DOM进行比较，找出变化的部分，并将这些变化应用到实际DOM中。这样可以减少对实际DOM的操作次数，提高渲染效率。</p><h3 id="双缓存和mvc" tabindex="-1"><a class="header-anchor" href="#双缓存和mvc" aria-hidden="true">#</a> 双缓存和MVC</h3><p>文章最后从双缓存和MVC的视角来聊聊虚拟DOM。双缓存是指在内存中维护两份数据，一份是当前显示的数据，另一份是即将显示的数据。当即将显示的数据准备好后，再与当前显示的数据进行交换。这样可以避免闪烁和卡顿等问题。</p><p>MVC是一种软件架构模式，它将应用程序分为三个部分：模型、视图和控制器。在MVC模式中，模型负责处理数据，视图负责展示数据，控制器负责协调模型和视图之间的交互。虚拟DOM可以看作是MVC模式中视图层的一部分。</p><p>通过以上分析，可以看出虚拟DOM是如何解决实际DOM的缺陷的，并且可以更好地理解前端框架中使用虚拟DOM的原因。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/26.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _26_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "26.html.vue"]]);
export {
  _26_html as default
};
