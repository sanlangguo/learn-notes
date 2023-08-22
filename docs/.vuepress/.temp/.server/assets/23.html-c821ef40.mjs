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
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_23-渲染流水线-css如何影响首次加载时的白屏时间" tabindex="-1"><a class="header-anchor" href="#_23-渲染流水线-css如何影响首次加载时的白屏时间" aria-hidden="true">#</a> 23-渲染流水线：CSS如何影响首次加载时的白屏时间？</h2><p>本文将深入讨论浏览器中CSS的工作原理，并分析性能瓶颈，以及如何减少首次加载时的白屏时间。CSS是页面中非常重要的资源，它决定了页面最终显示出来的效果，并影响着用户对整个网站的第一体验。</p><h3 id="渲染流水线视角下的css" tabindex="-1"><a class="header-anchor" href="#渲染流水线视角下的css" aria-hidden="true">#</a> 渲染流水线视角下的CSS</h3><p>在渲染流水线的视角下，我们可以通过代码示例来看看最简单的渲染流程。这段代码由CSS文件和HTML文件构成，当打开这段HTML文件时，渲染流水线会经过以下步骤：</p><ol><li>发起主页面的请求，请求被送到网络进程中去执行。</li><li>网络进程接收到返回的HTML数据之后，将其发送给渲染进程。</li><li>渲染进程会解析HTML数据并构建DOM。</li><li>预解析线程会解析出一个外部的CSS文件，并发起CSS文件的下载。</li><li>在DOM构建结束之后、CSS文件还未下载完成的这段时间内，渲染流水线无事可做，因为下一步是合成布局树，而合成布局树需要CSSOM和DOM，所以这里需要等待CSS加载结束并解析成CSSOM。</li><li>有了DOM和CSSOM，接下来就可以合成布局树了。</li></ol><h3 id="css对首次加载时的白屏时间的影响" tabindex="-1"><a class="header-anchor" href="#css对首次加载时的白屏时间的影响" aria-hidden="true">#</a> CSS对首次加载时的白屏时间的影响</h3><p>由此可见，CSS对于首次加载时的白屏时间有很大影响。在DOM构建结束之后、CSS文件还未下载完成的这段时间内，渲染流水线无事可做，因为下一步是合成布局树，而合成布局树需要CSSOM和DOM，所以这里需要等待CSS加载结束并解析成CSSOM。因此，减少CSS文件的大小和数量可以有效地减少首次加载时的白屏时间。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>理解浏览器中CSS的工作原理对于优化页面至关重要。在渲染流水线中，CSS对于首次加载时的白屏时间有很大影响。减少CSS文件的大小和数量可以有效地减少首次加载时的白屏时间。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/23.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _23_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "23.html.vue"]]);
export {
  _23_html as default
};
