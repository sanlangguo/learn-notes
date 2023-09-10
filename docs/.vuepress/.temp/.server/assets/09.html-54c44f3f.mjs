import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.bf7dc909.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_09-运行时环境-运行javascript代码的基石" tabindex="-1"><a class="header-anchor" href="#_09-运行时环境-运行javascript代码的基石" aria-hidden="true">#</a> 09-运行时环境：运行JavaScript代码的基石</h2><p>本文主要介绍V8的运行时环境和宿主环境。</p><h3 id="运行时环境" tabindex="-1"><a class="header-anchor" href="#运行时环境" aria-hidden="true">#</a> 运行时环境</h3><p>在执行JavaScript代码之前，V8会先准备好代码的运行时环境，包括堆空间和栈空间、全局执行上下文、全局作用域、内置的内建函数、宿主环境提供的扩展函数和对象，以及消息循环系统。了解运行时环境可以帮助我们更好地理解V8的执行流程。</p><h3 id="宿主环境" tabindex="-1"><a class="header-anchor" href="#宿主环境" aria-hidden="true">#</a> 宿主环境</h3><p>V8的宿主环境是指V8被嵌入到的应用程序或环境。在宿主环境中，V8可以使用宿主环境提供的扩展函数和对象，比如在浏览器中，V8可以使用window对象和DOM API。宿主环境还可以向V8提供一些回调函数，比如在Node.js中，可以使用process.nextTick()函数进行异步操作。</p><p>了解宿主环境可以帮助我们更好地使用V8，并且在不同的宿主环境中，V8的使用方式也会有所不同。</p><p>总之，了解运行时环境和宿主环境对我们理解V8的执行流程和使用V8都非常重要。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/v8/09.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _09_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "09.html.vue"]]);
export {
  _09_html as default
};
